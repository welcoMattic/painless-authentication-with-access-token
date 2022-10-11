---
theme: apple-basic
highlighter: shiki
lineNumbers: true
title: SymfonyCon Disneyland Paris 2022
favicon: symfony.ico
info: |
  ## SymfonyCon Disneyland Paris 2022
drawings:
  persist: false
colorSchema: light
fonts:
  provider: 'none'
  local: 'SF Pro Display,Josefin Sans'
  sans: 'SF Pro Display'
  serif: 'Josefin Sans'
src: 'content/cover.md'
---

---
layout: two-cols
class: flex flex-col justify-center speaker-slide list-none
---

## Mathieu Santostefano

* 🧑‍💻 Web developer at&nbsp;<img src="/images/jolicode.svg" width="120" class="inline" />
* <fa-brands-symfony /> Symfony Core Team Member
* <cib-twitter class="text-sky-500" /> Twitter <a href="https://twitter.com/welcomattic">@welcomattic</a>
* <cib-github /> GitHub <a href="https://github.com/welcomattic">@welcomattic</a>

::right::

<img class="rounded-xl filter drop-shadow-md" src="/images/me.jpg" alt="Mathieu Santostefano"/>

<style>h2 { font-size: 2.1em; margin-bottom: 0.9em; }</style>

<!--
Before starting, I would like to briefly introduce myself, I'm Mathieu Santostefano. I'm working at JoliCode, a french web agency based in Paris.
I'm a Core Team member of Symfony. You can find me on the web with my at @welcomattic
-->

---
layout: statement
---

# 🎉 Last year, on Nov. 18, I received an email <br> from Fabien to join <br> the Core Team

<img src="/images/core-team-mail.png" class="-mt-8 w-8/12 mx-auto" />

<!--
About Core Team, today is a bit special for me. Last year, day for day, Fabien sent me an email to invite me joining the Core Team of Symfony.
-->

---
layout: section
---

# 🔐 Who has Access Token authentication in their apps?

<!--
Ok, well, let's dive into the topic. Who has implemented an Access Token Authentication in their apps?
-->

---
layout: section
---

# 🔒 Who is working with the new Symfony security?

<v-click>

Thank you for it, [Wouter](https://github.com/WouterJ) 🙏

</v-click>

<!--
Who is working with the new Symfony Security (released in 5.1)?

NEXT

I don't know if Wouter is here, but I want to thank him for his work 👏
-->

---

# ✨ The new Security System

* Removed everything but Guards
* Moved to an event-based system
* Passports and Badges
* Authenticator based: instantiate a Passport with Badges

> Your job is to use Authenticator or implement your own

<!--
Quick reminder about the new Security system

Everything has been removed but Guards

The process is now an event based system

It introduces Passports & Badges

The Authenticator returns a Passport with Badges, that let the system really makes the authentication, which is to retrieve a User from the Request.
-->

---

# ✨ The new Security System

## Event-based system

* You can interact on different levels
  * `CheckPassportEvent`
  * `AuthenticationTokenCreatedEvent`
  * `AuthenticationSuccessEvent`
  * `LoginSuccessEvent`
  * `LoginFailureEvent`
  * `LogoutEvent`
  * `TokenDeauthenticatedEvent`
  * `SwitchUserEvent`

<!--
The new event based system allows you to interact on different points of the authentication process like the success or failure of the login process and many other events
-->

---

# ✨ The new Security System

## As before, you can still handle what happens in case of authentication success or failure

> 🤩 As many things since the last years in Symfony, it improves the **DX**

<!--
Like any things one in Symfony since last years, it improves the DX.
Symfony takes care of the boring code for you, while letting you modify the default behaviors if needed, via events or extension points.
-->

---

# 🪙 What is an Access Token?

* `i-am-an-4cc3ss-t0k3n` **could be an Access Token**
* `mF_9.B5f-4.1JqM` **could be an Access Token**
* `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c` **could be an Access token**

<v-click>

> 🔡 **An Access Token is represented by a string.**

</v-click>

<!--
All these strings could be access tokens.

NEXT

Basically, any string could be an access token. But some are self-described, like JWT. Once decoded, they gives you exploitable data
-->

---

# 📑 Use cases

Authentication with Access Token is useful in some contexts, like

* Stateless user login
* API Gateway in front of private APIs
* Application that access to personal data provided by a third party
* Micro-services between them
* Client applications of a SaaS API
* …

<!--
  Access tokens are widely used in our industry, especially between applications. 
-->

---

# 🤨 Ok, so?

* Must be sent in a HTTP request to fetch a protected resource
* The application expects to find a token, **verifies** it and decides to allow access or not

<v-click>
  <img src="/images/auth-schema.png" class="mt-10 w-10/12 mx-auto" />
</v-click>

<!--
  To be access tokens, those strings must be sent in HTTP request.
  The application expects to find valid token, in order to let you access the resource.
-->

---
layout: section
---

# 🛂 Token issuer
## Let's assume our tokens come from an external authorization server,
## the user identity has been verified by this server

<!--
  To simplify the talk, we will assume that all tokens are issued by an authorization server. 
  
  We don't need to verify the user identity, it has already be done by the authorization server before providing the token, we only have to focus on the validation of the token itself.
-->

---

# ✅ Verify the token?

## The verification process is up to *you*

* Check if the string is present in a database
* Compute a hash and compare it to the expected one
* Decode the token (base64, …) and make assertions on decoded values
* Call an external service to validate the token
* Verify the expiration date if needed
* Check if the token has been revoked or not
* …

<!--
Depending on the kind of token you use, the verification process will be different. It is up to you to define and code it.

It could be about compare strings, compute signatures, check revocation or expiration date
-->

---
layout: section
---

# 🤔 How to set up an Access Token auth with Symfony?

<!--
How we could setup Access token authentication with Symfony?
-->

---

# 🎬 Disney Scenarios Manager : <br> A private API for next Disney movies scenarios

* Form login authentication for Users
* Users can create Scenarios
* Each users has two API keys, one for test, the other for production
* Users can request our private API with their API key
* Admins can revoke an API key at any time

<!--
  Imagine an application for Disney. Dedicated to scenario writers, with a private API.

  User login

  Users can create scenarios

  Each user has 2 api keys (test & prod)

  Users can request private api with api key

  Admins can revoke api key at anytime.
-->

---

# With Symfony <= 6.1

* Create a custom Authenticator
  * Handle **token** extraction 
  * Handle authentication failure cases
  * Decode **token** if needed (JWT, SAML, …)
  * Check **token** validity
  * Retrieve user identifier from the **token**
  * Then load User object

---

# With Symfony <= 6.1

* Handle token extraction
  * In request header?
    * Handle correctly the `Authorization` header with `Bearer` scheme
  * In query? 
  * In request body?
* Fill up WWW-Authenticate response header in case of failure
* All requests must be done using HTTPS protocol to secure the token transport

> 👂 Have you heard about [RFC6750](https://datatracker.ietf.org/doc/html/rfc6750)?

<!--
RFC 6750 is about Bearer Token Usage. From the token transportation, to the response headers in case of failure.
It's basically what we have to implement to properly handle authentication with access token.
-->

---

# With Symfony <= 6.1

```php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        Request::METHOD_GET === $req->getMethod()
        && $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        Request::METHOD_POST === $req->getMethod()
        && $req->request->has('access_token') => $req->request->get('access_token'),
        
        default => null,
    };
}
```

<!--
Here is the code, simplified, used to extract the token from the Request.
It supports extraction from header, query string, or body.

It's simplified, in real life we should check on types, make some assertions on token length, etc
-->

---

# ⚠TODO CODE !!!!! With Symfony <= 6.1

```php
public function authenticate(Request $request): Passport
{
    if (null === $apiKey = $this->extractToken($request)) {
        throw new AuthenticationException('No API Key provided');
    }

    /* Here's the token decoding if needed, then assertions on decoded values */

    return new SelfValidatingPassport(
        new UserBadge(
            $apiKey, # TODO make a real example, more complex
            fn (string $apiKey) => $this->repository->findOneBy(['apiKey' => $apiKey, 'revoked' => false]);
        )
    );
}
```

<!--
Now, the token is extracted (or not), we have to retrieve the user. 

Here it's pretty simple as the User entity has an apiKey property which is the user identifier. 
We can easily find the user matching the access token.

Note that if you use JWT, it's here you have to decode the token.
-->

---

# 🥱 Boring code

* We have to repeat this code in all our applications, **boring**
* Our responsibility to respect RFC6750, **boring**
* No body likes boring code
* Poor **D**eveloper e**X**perience, Symfony tends to improve DX


## This is definitely improvable

<!--
The extraction code is boring code. No body wants to maintain it, or replicate it on multiple application. As it must follow a RFC, this code must be rock solid and it's not intended to be modified over time.

Since a few versions, Symfony tends to improve the DX, to make it more pleasant for developers, so they can focus on adding business value.
-->

---

# ⌚ Discussions starts long time ago

* **April 2019**, at EU FOSSA Hackathon

<img src="/images/pr-30914.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<!--
  Ok, let's go back in time.

  In 2019, European Union has organized a Hackathon in which Symfony has participated with contributors and Core Team members.
  There was discussion about the whole Security component, and a point about Social Login with Oauth2 component.
-->

---

# ⌚ Discussions starts long time ago

* **June 2019**, first PR about OAuth2 Component. ❌ Aborted

<img src="/images/pr-31952.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<!--
  A few weeks later, Guillaume Loulier opens a PR to add an OAuth2 component into the Core. But due to bunch of OAuth implementations in the community, it has been decided not to merge it.
-->

---

# ⌚ Discussions starts long time ago

* **September 2019**, Wouter's 1st PR about redesign of Security

<img src="/images/pr-33558.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<!--
  Back to school in september, Wouter starts working on rewriting Symfony's Security component. Nothing better to consider the future and the extension of the capacities of this component.
-->

---

# ⌚ Discussions starts long time ago

* **April 2020**, continuation of Wouter's work on new Security system

<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-36570.png" class="filter drop-shadow-2xl" width="400" />
  <img src="/images/pr-36574.png" class="filter drop-shadow-2xl" width="400" />
</div>

<!--
  6 months later, Wouter is still working on the new Security component by removing anonymous authentication, and integrating Guards with the new system. Huge work.
-->

---

# ⌚ Discussions starts long time ago

* **March 2022**, Vincent Chalamon opens an issue about "Bearer Authenticator"

<img src="/images/issue-45844.png" class="mx-auto mt-6 filter drop-shadow-2xl" width="600" />

<!--
  Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens
-->

---

# ⌚ Discussions starts long time ago

* Finally, on **21 May 2022**, Vincent Chalamon & Florent Morselli each open a PR to implement the Authenticator


<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-46429.png" class="filter drop-shadow-xl" width="400" />
  <img src="/images/pr-46428.png" class="filter drop-shadow-xl" width="400" />
</div>

<!--
  On the very same day, Vincent Chalamon and Florent Morselli open 2 PRs, one each to implement this authenticator.
-->

---

# 🤩 Thanks to **Florent Morselli <img src="/images/spomky.png" width=52 class="rounded-full inline" />&nbsp;[@Spomky](https://github.com/Spomky)**

<img class="filter drop-shadow-2xl w-9/12 mx-auto mt-6" src="/images/pr-46428.png" alt="Symfony Pull request #46428"/>

<!--
  Finally, after some design debates, the PR of Florent has been merged!
  His PR is lighter than Vincent one, as it does not implement an arbitrary JWT validation.
  It was decided to leave the choice to the developers about the token validation.
-->

---
layout: section
---

# 🚀 Let's meet AccessTokenAuthenticator in Symfony 6.2

---

# AccessTokenAuthenticator

* Takes care of token extraction
  * Header
  * Query string
  * Request body
  * And/or your **Custom extractors**
* Calls **your Token Handler** to check the token (revocation, expiration, signature, …)
* Custom success / failure handlers if needed

> ✨ All this via configuration!

<!--
  This brand new authenticator will takes care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor. Be careful, extracting token from query string or request body is not recommended in production for security reasons.
  
  Then, the authenticator will look for your token handler, to handle the token in order to finally get the user identifier.
  
  Finally, like in any authenticator, you can write your own success or failure handler if needed.
  
  Except the token handler or custom things, all of this could be done by configuration.
-->

---

# ⚙ Internally, in Symfony

* Token will be extracted by using a `ChainTokenExtractor` (order can be defined in configuration)
  * You can mix usage of provided `AccessTokenExtractorInterface` implementation and your own Extractors
* `AccessTokenAuthenticator` will create a `PostAuthenticationToken`
* `AccessTokenAuthenticator` will take care about `WWW-Authenticate` Response header content in case of failure
* `AccessTokenAuthenticator` will use the User Provider you have configured to load the User

<!--
Token can be extracted using a series of Extractor, the chain stops after an extractor succeeds to return a string. Default and custom extractors can be used alongside.

As we assume the user identification is made by an external authentication server, the AccessTokenAuthenticator will produce a PostAuthenticationToken

The WWW-Authenticate response header will be correctly filled up in case of failure

You still control the User provider used to retrieve the user from the user identifier extracted from the token
-->

---

# What kind of tokens are supported?

* JWT
* SAML2
* [Biscuit](https://www.biscuitsec.org/)
* [Macaroons](https://research.google/pubs/pub41892/)
* Homemade tokens (with chocolate chips and nuts 😋)
* …
* Any kind of token, as it's up to you to handle them

<div class="absolute right-40 top-36 grid grid-cols-2 gap-10">
  <img src="/images/jwt.svg" width="90" />
  <img src="/images/saml.svg" width="90" />
  <img src="/images/biscuit.png" width="90" />
  <img src="/images/macarons.png" width="90" />
</div>

<!--
As the AccessTokenAuthenticator aims to follow the RFC6750, any kind of token can be handled, even homemade ones. Of course, it supports self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.
-->

---
layout: section
---

# How much easier <br> is it than in 6.1?

---
layout: two-cols-with-gap
---

# 6.1 security.yaml

```yaml
security:
  providers:
    client_app_provider:
      entity:
        class: App\Entity\App
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: client_app_provider
      custom_authenticator: App\Security\ApiKeyAuthenticator
```

::right::

# 6.2 security.yaml

```yaml
security:
  providers:
    client_app_provider:
      entity:
        class: App\Entity\App
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: client_app_provider
      access_token:
        token_extractors:
          - 'security.access_token_extractor.query_string'
          - 'security.access_token_extractor.request_body'
          - 'security.access_token_extractor.header'
        token_handler: App\Security\AccessTokenHandler
```

<!--
Ok, you will have to write a little more of YAML, but token_extractors could be ommited, as those are the default ones, in this order.

Of course, there are some other configuration entries if you need to use your own success or failure handlers
-->

---
layout: code-full
---

```php {1-2,9-14|16-30}
/** Disney Scenario Manager 6.1 **/
class ApiKeyAuthenticator extends AbstractAuthenticator
{
// TODO REFACTOR! 🛑
    public function __construct(
        private readonly UserRepository $repository,
    ) 
    {}

    public function supports(Request $request): ?bool
    {
        return $request->headers->has('Authorization')
            || $request->query->has('access_token')
            || $request->request->has('access_token');
    }

    public function authenticate(Request $request): Passport
    {
        if (null === $apiKey = $this->extractToken($request)) {
            throw new AuthenticationException('No API Key provided');
        }

        /* Here's the token decoding if needed, then assertions on decoded values */

        return new SelfValidatingPassport(
            new UserBadge(
                $apiKey,
                fn (string $apiKey) => $this->repository->findOneBy(['apiKey' => $apiKey, 'revoked' => false]);
            )
        );
    }
}
```

<!--
  Let's detail the code I show you previously.

  First, ensure our handler can support the authentication

  If we had to decode our token, it is the right place.

  Then, authenticate the token, by retrieve the matching User from database, while ensuring the token is not revoked.

  This example is quite simple, but with JWT, we should have to decode the token before retrieve the App from database.
-->

---

# TODO REFACTOR! 🛑 ApiKeyAuthenticator 6.1

```php
/** Simplified version */
private function extractToken(Request $request): ?string
{
    return match (true) {
        // Header
        $request->headers->has('Authorization') => str_replace('Bearer ', '', $request->headers->get('Authorization')),

        // Query string
        Request::METHOD_GET === $request->getMethod()
        && $request->query->has('access_token') => $request->query->get('access_token'),

        // Request body
        Request::METHOD_POST === $request->getMethod()
        && $request->request->has('access_token') => $request->request->get('access_token'),

        default => null,
    };
}
```

<!--
  About the extraction, as I said, it is a simple version but it definitely have to be more robust in production.
  Here we have to support extraction from different source. The order is fixed.
-->

---

# AccessTokenHandler 6.2

```php
class AccessTokenHandler implements AccessTokenHandlerInterface
{
    public function __construct(private readonly UserRepository $repository) 
    {}

    public function getUserIdentifierFrom(string $token): string
    {
        /* Here's the token decoding if needed, then assertions on decoded values */

        $user = $this->repository->findOneBy(['apiKey' => $token]);

        if ($user === null || $user->isApiKeyRevoked()) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        return $user->getUserIdentifier();
    }
}
```

<!--
  Here's an example of Token Handler. This is a simple one, it retrieve the User object from the database, check if the User API Key is not revoked, and return the user identifier.
  
  In case of JWT, it's here you will decode the token to play with values.
  
  If you work with more powerful tokens like Macaroons or Biscuit, it's the place where you can apply permissions attenuation if needed.
-->

---

# Less responsibility, less code

* Configure the way the extraction should be done
* Focus on the token treatment
  * Decoding
  * Checking signature, expiration, revocation
  * Retrieve user identifier

> 🦸 Leverage all Symfony power to fine tune configuration to your needs

<!--
Your job is to configure how the extraction will be done, and not code it anymore. It brings more flexibility.

You can focus on the Token itself, decoding it, checking signature, revocation, expiration. 

Retrieving the user identifier, from the token itself in case of JWT for instance, or from any other source, like a database, an API, an IAM like Keycloak, etc

Enjoy the power of Symfony to configure your authentication finely depending on your environments!
-->

---

<img src="/images/before-after.png" />

<!--
Now, you have less responsibility across the authentication process.
The token extraction is made by Symfony, accordingly to your configuration.

The handling of the token itself is up to you

Success or failure could be managed by Symfony with default behaviours, but you can make your owns. In case of failure, Symfony will automatically set the content of the WWW-authenticate response header, to respect the RFC 6750.

As always, the user loading is made with the configured UserProvider.
-->

---

# 🛑TODO  Quick example with a JWT

```php
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Token\Parser;
use Lcobucci\JWT\Validation\Constraint\RelatedTo;
use Lcobucci\JWT\Validation\RequiredConstraintsViolated;
use Lcobucci\JWT\Validation\Validator;use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class AccessTokenHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly UserRepository $repository,
        private readonly Parser $jwtParser = new Parser(new JoseEncoder()),
        private readonly Validator $jwtValidator = new Validator(),
    ) 
    {}

    public function getUserIdentifierFrom(string $token): string
    {
        $user = $this->repository->findOneBy(['apiKey' => $token]);
        $jwt = $this->parser->parse($token);
        
        try {
            $validator->assert($token, new RelatedTo($user->getEmail()));
            // signature check
        } catch (RequiredConstraintsViolated $e) {
            throw new BadCredentialsException($e->violations()); // todo
        }

        if ($user === null || $user->isApiKeyRevoked()) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        return $user->getUserIdentifier();
    }
}
```

---

# 👏 Thanks to

## Wouter
## Guillaume
## Vincent
## Robin
## Christophe
## Alexander
## Kévin
## Grégoire
## Florent


---
layout: section
---

# Thank you ☕ 🥐
## Any questions?


qrcode, slide link etc
