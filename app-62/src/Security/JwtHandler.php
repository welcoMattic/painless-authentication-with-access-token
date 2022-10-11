<?php

namespace App\Security;

use App\Repository\ApiKeyRepository;
use App\Repository\AppRepository;
use App\Repository\UserRepository;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Token\Parser;
use Lcobucci\JWT\Validation\Constraint\RelatedTo;
use Lcobucci\JWT\Validation\Constraint\SignedWith;
use Lcobucci\JWT\Validation\RequiredConstraintsViolated;
use Lcobucci\JWT\Validation\Validator;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Http\AccessToken\AccessTokenHandlerInterface;

class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly Parser $jwtParser = new Parser(new JoseEncoder()),
        private readonly Validator $jwtValidator = new Validator(),
    ) {}

    public function getUserIdentifierFrom(string $token): string
    {
        $apiKey = $this->userRepository->findOneBy(['key' => $token, 'revoked' => false]);

        if ($apiKey === null || $apiKey->getOwner() === null) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        $jwt = $this->jwtParser->parse($token);

        try {
            $this->jwtValidator->assert($jwt, new RelatedTo($apiKey->getOwner()->getEmail()));
            // ⚠ use private key file in production
            $this->jwtValidator->assert($jwt, new SignedWith(new Sha256(), InMemory::base64Encoded('mBC5v1sOKVvbdEitdSBenu59nfNfhwkedkJVNabosTw=')));
        } catch (RequiredConstraintsViolated $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $token;
    }
}
