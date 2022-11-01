<?php

namespace App\Security;

use Lcobucci\Clock\SystemClock;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Token\Parser;
use Lcobucci\JWT\Token\RegisteredClaims;
use Lcobucci\JWT\Validation\Constraint\SignedWith;
use Lcobucci\JWT\Validation\Constraint\ValidAt;
use Lcobucci\JWT\Validation\RequiredConstraintsViolated;
use Lcobucci\JWT\Validation\Validator;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Http\AccessToken\AccessTokenHandlerInterface;
use Symfony\Contracts\HttpClient\Exception\HttpExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly Parser $jwtParser = new Parser(new JoseEncoder()),
        private readonly Validator $jwtValidator = new Validator(),
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        $jwt = $this->jwtParser->parse($accessToken);

        try {
            $this->jwtValidator->assert($jwt, new ValidAt(new SystemClock(new \DateTimeZone('Europe/Paris'))));
            $this->jwtValidator->assert($jwt, new SignedWith(
                new Sha256(),
                InMemory::plainText('PRIVATE-KEY')
            ));
        } catch (RequiredConstraintsViolated $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $jwt->claims()->get(RegisteredClaims::SUBJECT);
    }
}
