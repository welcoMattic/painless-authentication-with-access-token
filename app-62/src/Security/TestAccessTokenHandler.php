<?php

namespace App\Security;

use App\Repository\UserRepository;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Http\AccessToken\AccessTokenHandlerInterface;

class TestAccessTokenHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository,
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        $user = $this->userRepository->findOneBy([
            'apiKeyTest' => $accessToken,
            'apiKeyTestRevoked' => false,
        ]);

        if (!$user) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        return $user->getEmail();
    }
}
