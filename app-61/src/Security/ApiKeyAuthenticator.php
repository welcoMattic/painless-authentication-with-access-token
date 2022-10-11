<?php

namespace App\Security;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class ApiKeyAuthenticator extends AbstractAuthenticator
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function supports(Request $request): ?bool
    {
        return $request->headers->has('Authorization')
            || $request->query->has('access_token')
            || $request->request->has('access_token');
    }

    public function authenticate(Request $request): Passport
    {
        $apiKey = $this->extractToken($request);

        if (null === $apiKey) {
            throw new AuthenticationException('No API Key provided');
        }

        return new SelfValidatingPassport(
            new UserBadge(
                $apiKey,
                function (string $apiKey) {
                    return $this->userRepository->findOneBy([
                        $this->env === 'prod' ? 'apiKeyProduction' : 'apiKeyTest' => $apiKey,
                        $this->env === 'prod' ? 'apiKeyProductionRevoked' : 'apiKeyTestRevoked' => false,
                    ]);
                }
            )
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new JsonResponse(
            ['message' => strtr($exception->getMessageKey(), $exception->getMessageData())],
            Response::HTTP_UNAUTHORIZED
        );
    }

    /** Simplified version */
    private function extractToken(Request $request): ?string
    {
        return match (true) {
            // Header
            $request->headers->has('Authorization') => str_replace('Bearer ', '', $request->headers->get('Authorization')),

            // Query string
            $request->query->has('access_token') => $request->query->get('access_token'),

            // Request body
            $request->request->has('access_token') => $request->request->get('access_token'),

            default => null,
        };
    }
}
