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
layout: statement
---

# 🎉 On nov. 18 2021, I received an email to join the Core Team

<img src="/images/core-team-mail.png" class="-mt-8 w-8/12 mx-auto" />

<!--
About Core Team, today is a bit special for me because last year, day for day on november eighteen, Fabien sent me an email to invite me joining the Core Team of Symfony. So today is something like my core team anniversary!
-->

---
layout: image-right
image: '/images/menu.jpg'
---

# 🍽 On the menu

<v-click>

1. Access token, **what is it?**

</v-click>

<v-click>

2. Implementation with **Symfony 6.1**

</v-click>

<v-click>

3. Time travel

</v-click>

<v-click>

4. Implementation with **Symfony 6.2**

</v-click>

<v-click>

5. Code examples

</v-click>

<v-click>

6. In the future?

</v-click>


<Credits link="https://unsplash.com/@nate_dumlao" name="Nathan Dumlao" side="right"></Credits>

---
layout: section
---

# 🔐 Who has Access Token authentication in their app?

<!--
Ok (thanks), well, let's dive into the topic. Who has already implemented an Access Token Authentication in their apps?
-->

---
layout: section
---

# 🔒 Who is working with the new Symfony Security?

<v-click>

Thank you for it, [Wouter](https://github.com/WouterJ) 🙏

</v-click>

<!--
Who is working with the new Symfony Security (released in 5.1)?

NEXT

I don't know if Wouter is here, but I want to thank him for his amazing work 👏
-->

---

# ✨ The New Security System

* Removed everything but Guards
* Moved to an event-based system
* Authenticator based: instantiate a Passport with Badges

> Your job is to use Authenticator or implement your own

<!--
Just to ensure everyone is ok with it, I made a quick reminder about the new Security system 

Everything has been removed but Guards

The process is now an event based system

It introduces Passports & Badges

Your job is to use or implement an Authenticator, in order to instantiate a Passport using data from the Request and a user provider.
-->

---

# ✨ The New Security System

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
The new system allows you to interact on different points of the authentication process like the success login or logout event.
-->

---

# ✨ The New Security System

## As before, you can still handle what happens in case of authentication success or failure

> 🤩 Like many things since the last years in Symfony, it improves the **DX**

<!--
Like many things contributed in Symfony since last years, it improves the DX.
In other words, Symfony takes care of the boring code for you, while leaving you the possibility to modify the default behavior if needed, via events or extension points.
-->

---

# 🪙 What is an Access Token?

<v-click>

* `i-am-an-4cc3ss-t0k3n` **could be an Access Token**

</v-click>

<v-click>

* `mF_9.B5f-4.1JqM` **could be an Access Token**

</v-click>

<v-click>

* `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4...` **could be an Access Token**

</v-click>

<v-click>

* 🌮 **could be an Access Token**

</v-click>

<v-click>

> 🔡 **An Access Token is represented by a string.**

</v-click>

<!--
Ok. Concretely, what is an access token?

1.

2.

3.

4., yes a taco emoji could be an access token

All those strings could be access tokens.

NEXT

Basically, any string could be an access token. 
But some are self-contained, like JWT. 

Once decoded, they gives you exploitable data like user identifier, expiration date etc
-->

---

# 📑 Use cases

Authentication with **Access Token** is useful in some contexts, like

* Stateless user login
* **API Gateway** in front of private APIs
* Application that access to personal data provided by a third party
* **Micro-services** between them
* Client applications of a **SaaS API**
* …

<!--
When are they used? There are plenty of use cases. Access tokens are widely used in our industry, especially between applications.  

For instance, in a micro services architecture, each service could request others, with access tokens, to ensure that they are granted to access resources.
-->

---

# 🤨 Ok, so?

* Must be sent in a **HTTP request** to fetch a protected resource
* The application expects to find a token, 👉 **validate** 👈 it and decide to allow access or not

<v-click>
  <img src="/images/auth-schema.png" class="mt-10 w-10/12 mx-auto" />
</v-click>

<!--
To really be access tokens, those strings must be sent in HTTP request.
The application expects to find a token, then validate it, in order to let you access the resource.  

NEXT

Here is a basic schema representing a client requesting a protected resource with an access token passed in query string. The application on the server will returns the resource only if the token is valid.
-->

---
layout: section
---

# 🛂 Token issuer
## Let's assume our tokens come from an external authentication server,
## the user identity has been verified by this server

<!--
To simplify the talk, we will assume that all tokens are issued by an authentication server. 
  
We don't need to verify the user identity, it has already be done by the authentication server before providing the token, we only have to focus on the validation of the token itself.
-->

---

# ✅ Validate the token?

## The validation process is up to <u>you</u>

* Check if the string is **present** in a database
* **Compute a hash** and compare it to the expected one
* **Decode the token** (base64, …) and make **assertions** on decoded values
* Ensure the **expiration date** is not passed if needed
* Check if the token has been **revoked** or not
* Call an **OpenID Connect** server to validate the token
* …

<!--
About validation, depending on the kind of token you use, the process will be different. 
It is up to you to define and code it.

It could be comparing strings, computing signatures, checking revocation or expiration date, call an OpenID Connect server, etc…
-->

---
layout: section
---

# 🤔 How to set up an Access Token auth with Symfony?

<!--
So, How Symfony can helps you to implement access token authentication?
-->

---

# 🎬 Marvel Scenarios Manager, a web app for writers and reviewers

* Each user (Writers and Reviewers) has an API key
* Admin for Writers
  * Form login authentication
  * Writers can create Scenarios
* Web app for Reviewers
  * Call the private API using API Key obtained after Reviewer login
* Admins can revoke API key at any time

<!--
For the fun, let's imagine a basic and fake application for Marvel. 

Dedicated to scenarios writing, with a private API.

Some basic features:

  Admin panel, protected by form login

  Writers can create scenarios

  Reviewers web app can request private api using the api key of the Writer

  Admins can revoke api key at anytime.
-->

---

<img src="/images/demo-app-schema.png" />

<!--
The reviewer authentication process starts with login to obtain an access token.
Then, the web app can request the API using the user access token.
-->

---

<img src="/images/demo-app-schema-2.png" />

<!--
I will focus on the reviewer part for the rest of the talk. Let's see how to implement it with Symfony.
-->

---

# 👉 With Symfony <= 6.1

## Create a custom Authenticator

<br>

1. Extract **token** 
2. Decode **token** if needed (JWT, SAML, …)
3. Check **token** validity
4. Retrieve user identifier from the **token**
5. Then load User object
6. Handle authentication failure cases

<!--
With Symfony 6.1 and before, thanks to the new Security system, we have to work in a single file : the Authenticator :

It's where we will extract the token

decode it

check the validity

retrieve the user identifier 

load the user

handle failure cases

All these steps are standardized in a RFC
-->

---

# 👂 Have you heard about [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750)?

* Token transportation
  * In **request header**? ➡ `Authorization` header
  * In **query string**? ➡ parameter `access_token`
  * In **request body**? ➡ parameter `access_token`

<v-click>

* `WWW-Authenticate` **response header** in case of failure

</v-click>

<v-click>

* **HTTPS** protocol mandatory

</v-click>

<!--
The RFC 6750 is about Bearer Token Usage. It defines many things from the token transportation, to the response headers in case of failure.

It's basically what we have to implement to properly handle authentication with access token.
-->

---

<img src="/images/auth-process-61.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>

<!--
as a picture is sometimes better than a long speech, here is the authentication process. In red what you are responsible for. And in black, what Symfony does by default but that you can customize if needed.
-->

---

# 🧑‍💻 Some code

```php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        $req->request->has('access_token') => $req->request->get('access_token'),

        default => null,
    };
}
```

<!--
Here is some code, simplified, used to extract the token from the Request.
It supports extraction from header, query string, or request body.

I said simplified, because in real life we should check on types, HTTP methods, make some assertions on token length, etc.

Another limitation here is the order of extraction source is fixed. We cannot configure it differently depending on environment for instance.
-->

---

# 🧑‍💻 Some code

```php
public function authenticate(Request $req): Passport
{
    if (null === $apiKey = $this->extractToken($req)) {
        throw new AuthenticationException('No API Key provided');
    }
    
    // Here, it could be some logic to validate the token

    return new SelfValidatingPassport(
        new UserBadge($apiKey,
            function (string $apiKey) {
                return $this->userRepository->findOneByApiKey($apiKey);
            }
        )
    );
}
```

<!--
Now, the token is extracted, we have to retrieve the user. 
Here we assume the user identifier is the access token (variable $apiKey).

*soupire*, very interesting code, isn't it?
-->

---

# 🥱 Boring code

* We have to repeat this code in all our applications, **boring**
* Our responsibility to respect RFC6750, **boring**
* No body likes boring code
* Boring code is code we rewrite in all projects, no business value
* Poor **D**eveloper e**X**perience, Symfony tends to improve DX


## This is definitely improvable

<!--
No.

The extraction code is boring code. No body wants to maintain such code, or replicate it on multiple applications. 

Boring code is code we rewrite in all projects, no business value

As it must follow a RFC, this code must be rock solid, battle tested and it's not intended to be modified over time.

Since a few versions, Symfony tends to improve the DX, to make the framework more pleasant for developers, so they can focus on adding business value.

Anyway, this is improvable!
-->

---
layout: image
image: 'images/dr-strange.gif'
---

<!--
GIF DR STRANGE

Ok, let's go back in time to understand how we managed to improve this!
-->

---

# ⌚ Discussions started long time ago

* **April 2019**, at EU FOSSA Hackathon

<img src="/images/pr-30914.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
In 2019, European Union has organized a Hackathon in which Symfony has participated with contributors and Core Team members.
There was discussion about the whole Security component, and a point about Social Login with Oauth2 component.

It was the starting point of the new security system
-->

---

# ⌚ Discussions started long time ago

* **June 2019**, first PR about OAuth2 Component. ❌ Aborted

<img src="/images/pr-31952.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
A few weeks later, the first attempt about support access token natively in Symfony was made by Guillaume Loulier. 

He opens a pull request to add an OAuth2 component into the Core. But due to bunch of OAuth implementations in the PHP community, it has been decided not to merge it.

Moreover, it was focused on OAuth2. It was a little too specific.
-->

---

# ⌚ Discussions started long time ago

* **September 2019**, Wouter's 1st PR about redesign of Security

<img src="/images/pr-33558.png" class="filter drop-shadow-2xl mx-auto mt-12" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
Back to school in september 2019, Wouter starts working on rewriting Symfony's Security component. 

What better time than this to consider the future of the component and the extension of its capabilities?
-->

---

# ⌚ Discussions started long time ago

* **April 2020**, continuation of Wouter's work on new Security system

<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-36570.png" class="filter drop-shadow-2xl" width="400" />
  <img src="/images/pr-36574.png" class="filter drop-shadow-2xl" width="400" />
</div>

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>

<!--
6 months later, Wouter is still working on the new Security component by removing anonymous authentication, and integrating Guards with the new system. 
It was a huge work. Now, we have the new Authenticator feature!
-->

---

# ⌚ Discussions started long time ago

* **March 2022**, Vincent Chalamon opens an issue about "Bearer Authenticator"

<img src="/images/issue-45844.png" class="mx-auto mt-6 filter drop-shadow-2xl" width="600" />

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
  <div class="dot"></div>
</div>

<!--
Spring 2022, this year. Vincent Chalamon from Les Tilleuls starts the discussion about a new Bearer Authenticator which allows developers to configure an authentication based on access tokens
-->

---

# ⌚ Discussions started long time ago

* Finally, on **May 21st, 2022**, Vincent Chalamon & Florent Morselli each open a pull request to implement the Authenticator


<div class="grid grid-cols-2 gap-4 mt-12">
  <img src="/images/pr-46429.png" class="filter drop-shadow-xl" width="400" />
  <img src="/images/pr-46428.png" class="filter drop-shadow-xl" width="400" />
</div>

<div class="timeline">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot active"></div>
</div>

<!--
Later on the spring, on the very same day, may 21st, Vincent Chalamon and Florent Morselli opened 2 pull requests, one each to implement this authenticator.
-->

---

# 🤩 Thanks a lot **Florent Morselli <img src="/images/spomky.png" width=52 class="rounded-full inline" />&nbsp;[@Spomky](https://github.com/Spomky)**

<img class="filter drop-shadow-2xl w-9/12 mx-auto mt-6" src="/images/pr-46428.png" alt="Symfony Pull request #46428"/>

<!--
Finally, after some design debates, the pull request of Florent has been merged!
His pull request is lighter than Vincent one, as it does not provide an arbitrary JWT validation.
It was decided to leave the choice to the developers about the token validation, for now.
-->

---
layout: statement
---

# Adding a feature to Symfony could take years

<!--
This feature is an example that adding a feature to Symfony could take years. 

Years of discussion between contributors, years of trials, of closed Pull Requests.

This is normal, it's the way Symfony lives. Between the birth of an idea and the release of a feature, it can take days, weeks, months or years. It all depends on the discussions within the community, the complexity of the feature, its impact on the existing.

And even if in the end, like here, the feature may seem small and uncomplicated, it took a lot of time before it was included in the core, because we had to find the right way to do it, a sustainable way.
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

<style>
  blockquote {
    margin-top: 20px;
  }
</style>

<!--
This brand new authenticator will take care of the token extraction for you. By default, it can extract a token from the header, the query string or the request body. If you need to extract the token from elsewhere, you can write your own token extractor. 

Side note about extraction: Be careful, extracting token from query string or request body is not recommended in production for security reasons, tokens could be readable on the network.
  
Then, the authenticator will look for your token handler, to find the user identifier from the token.

Finally, like in any authenticator, a Passport will be instantiate with the user identifier and the user provider.

Except the token handler or custom things, all of this could be done by configuration.
-->

---

# What kind of tokens could be used?

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
As this Authenticator aims to follow the RFC6750, and it's up to you to process the token, any kind of token can be handled, even homemade ones. 

Of course, you can use self-contained token like JWT, and even more powerful token like Macaroons or Biscuit, which embed permissions attenuation capabilities.
-->

---

# ⚙ Internally, in Symfony

* Extraction with `ChainTokenExtractor` (configurable order)
  * Default and custom extractors can be used at the same time
* Handle the token with **your** `TokenHandlerInterface` implementation
* `AccessTokenAuthenticator` will 
  * create a `PostAuthenticationToken` object
  * set `WWW-Authenticate` Response header content in case of failure
  * use the configured User Provider in security.yaml

<!--
Internally in Symfony, Token will be extracted using a series of Extractors. The chain stops right after one of the extractors manages to return a string. Default and custom extractors can be used alongside.

In case of failure, The WWW-Authenticate response header will be correctly filled up

You still control the User provider to retrieve the User object from the User identifier.
-->

---
layout: section
---

# 🪄 How much easier is it with 6.2?

<!--
In practice, why it's easier in 6.2? Let's compare the 2 versions 6.1 and 6.2
-->

---

# 6.1 security.yaml

```yaml
security:
  providers:
    user_provider:
      entity:
        class: App\Entity\User
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      custom_authenticator: App\Security\ApiKeyAuthenticator
```

<!--
Here's the basic configuration for a custom authenticator in Symfony 6.1
We define a user provider and a firewall, specifying the Authenticator
-->

---
layout: code-full
---

# 6.1 ApiKeyAuthenticator

```php {1,8-11|13-31|15}
class ApiKeyAuthenticator extends AbstractAuthenticator
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function supports(Request $req): ?bool
    {
        return $req->headers->has('Authorization') || $req->query->has('access_token') || $req->request->has('access_token');
    }

    public function authenticate(Request $req): Passport
    {
        if (null === $apiKey = $this->extractToken($req)) {
            throw new AuthenticationException('No API Key provided');
        }
        
        // Here, it could be some logic to validate the token

        return new SelfValidatingPassport(
            new UserBadge($apiKey,
                function (string $apiKey) {
                    return $this->userRepository->findOneByApiKey($apiKey);
                }
            )
        );
    }
}
```

<style>
  h1 {
    position: absolute;
    z-index: 9998;
    right: 0;
  }
</style>

<!--
The authenticator itself:

First, ensure our Authenticator can support the authentication with access token

NEXT

Then, extract the token, retrieve the matching User from database, while ensuring the token is not revoked.

NEXT

Let's see the extraction method
-->

---

# 6.1 ApiKeyAuthenticator

```php
/** Simplified version */
private function extractToken(Request $req): ?string
{
    return match (true) {
        // Header
        $req->headers->has('Authorization') => str_replace('Bearer ', '', $req->headers->get('Authorization')),

        // Query string
        $req->query->has('access_token') => $req->query->get('access_token'),

        // Request body
        $req->request->has('access_token') => $req->request->get('access_token'),

        default => null,
    };
}
```

<!--
About the extraction, as I said, it is a simple version but it definitely have to be more robust in production.
Here we have to support extraction from different source. The order is fixed.
-->

---

# 6.2 security.yaml

```yaml
security:
  providers:
    user_provider:
      entity:
        class: App\Entity\User
        property: apiKey
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      access_token:
        token_extractors:
          - header
          - query_string
          - request_body
        token_handler: App\Security\AccessTokenHandler
```

<!--
Here's the config in 6.2. Ok, you will have to write some more lines of YAML. Not so hard I guess

The list of extractors is customizable, the first of the list is called first. 

Of course, there are some other configuration entries if you need to use your own token extractor, or success handler
-->

---

# 6.2 AccessTokenHandler

```php
class AccessTokenHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly string $env,
    ) {}

    public function getUserIdentifierFrom(string $token): string
    {
        $user = $this->userRepository->findOneByApiKey($token);

        if ($user === null) {
            throw new BadCredentialsException('Invalid credentials.');
        }

        return $user->getUserIdentifier();
    }
}
```

<style>
  .slidev-code-wrapper {
    margin-top: -30px !important;
  }
</style>

<!--
This is an example of Token Handler.

Our job here, is to retrieve the User identifier from the token. nothing more, nothing less.

So, let's query the database, to retrieve our User and return the user identifier.

We don't have to worry anymore about extraction from the request.
-->

---
layout: statement
---

# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server

---
layout: image
image: 'images/jwt-flow.png'
---

<!--
Here's a diagram to resume how JWT authentication works. 
First, the user login, then the OpenIDConnect server returns the JWT to the client app.
Second, the client app requests the API with the JWT in the request
To validate the token, the API calls the OIDC server, and if everything is ok, it returns the requested resource.
-->

---

# <img src="/images/jwt.svg" width="48" class="inline -mt-2" /> 6.2 With a JWT issued by an OIDC server


```php
class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly HttpClientInterface $oidcHttpClient,
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        try {
            $userInfo = $this->oidcHttpClient->request('GET', 'protocol/openid-connect/userinfo', [
                'auth_bearer' => $accessToken,
            ])->toArray();
        } catch (HttpExceptionInterface $e) {
            throw new BadCredentialsException($e->getMessage());
        }

        return $userInfo['email'];
    }
}
```

<style>
  .slidev-code-wrapper {
    margin-top: -30px !important;
  }
</style>

<!--
Here another example of Token Handle but with a JWT. 

To validate it, we must call the OpenID Connect server which has produced the token. 

It returns the user info, then we can return the user identifier, here the email.
-->

---
layout: section
---

# <img src="/images/jwt.svg" width="64" class="inline -mt-2" /> 6.2 With a JWT issued by your Symfony app

> with [lcobucci/jwt](https://github.com/lcobucci/jwt) <br> <small>(or [web-token/jwt-checker](https://github.com/web-token/jwt-checker))</small>

---

# 🔐 6.2 security.yaml

```yaml
security:
  providers:
    user_provider:
      entity:
        class: App\Entity\User
        property: email
  firewalls:
    api:
      pattern: ^/api
      lazy: true
      provider: user_provider
      access_token:
        token_extractors: header
        token_handler: App\Security\JwtHandler
```

<!--
First step, we configure the firewall named api.

We assume to be in production, so we use the Header extractor only.

Then, we configure the token handler.
-->

---

# 6.2 JwtHandler

```php
class JwtHandler implements AccessTokenHandlerInterface
{
    public function __construct(
        private readonly Parser $jwtParser = new Parser(new JoseEncoder()),
        private readonly Validator $jwtValidator = new Validator(),
    ) {}

    public function getUserIdentifierFrom(string $accessToken): string
    {
        $jwt = $this->jwtParser->parse($accessToken);
        $timezone = new \DateTimeZone('Europe/Paris');

        try {
            $this->jwtValidator->assert($jwt, new ValidAt(new SystemClock($timezone)));
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
```

<style>
  h1 {
    position: absolute;
    z-index: 9998;
    top: 0;
    right: 0;
  }
</style>

<!--
Final step (yes, it's a 2 step implementation, very quick :D), we write the Token Handler.

Here we use the lcobucci jwt library to make some assertions on the token. We want to verify the expiration date and the signature.

At the end, we return the claim named "sub" which is our user identifier. End.

A dozen lines of yaml and some twenty-five lines of PHP, it's enough to handle a basic JWT authentication with Symfony. Obviously, your code in real life applications could be a little more complex, but now you can focus on this complexity.
-->

---

# API Platform plans to support <br> OpenID Connect authentication <img src="/images/api-platform.png" class="absolute inline right-20 top-15" width="72"/>

https://github.com/api-platform/demo/pull/265

<img src="/images/apip-pr-265.png" width="700" class="mx-auto"/>

<!--
Good news! Soon, API Platform plans to provide an OidcTokenHandler. 
It gives you the possibility easily setup access token auth with OIDC server, only with configuration.

Don't hesitate to browse the pull request and bring your help!
-->

---

# 💫 In the future?

* Add a native JwtHandler to Symfony?
* Add a native SamlHandler to Symfony?
* Add a native BiscuitHandler to Symfony?

> 👉 It's up to the community!

<!--
What's next?

Well, as many tokens are specified in RFC, it could be interesting to implement natives Token Handler in Symfony.
But, may be it needs time. The community could need time to adopt the TokenHandlerInterface. But who knows, in 6.3 or 7.0, we may see some natives Token Handlers in Symfony!
-->

---

<img src="/images/auth-process-62.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>

<!--
Let's get back the schema from the beginning. Now, you have less responsibility across the authentication process.
The extraction is made by Symfony. Accordingly the order defined in your configuration.

The handling of the token is up to you as it depends on the kind of token.

Success or failure could be managed by Symfony with default behaviours, but you can make your owns. 

In case of failure, Symfony will automatically set the content of the WWW-authenticate response header, to respect the RFC 6750.

As always, the user loading is made with the configured UserProvider.
-->

---

<img src="/images/auth-process-63.jpg" width="900" class="mx-auto" />

<style>
.slidev-layout {
  background-color: #f8f9fa;
}
</style>

<!--
Now, in 6.2 Symfony is responsible of the RFC 6750 implementation, we could imagine the future. 
Why not providing in 6.3 default TokenHandler to support natively JWT or even better any OIDC server?

You may have attended Robin Chalas talk yesterday morning? Maybe GNAP will one day be natively supported by Symfony, thanks to this system!

As always, the community will decide!
-->

---

# Less responsibility, less code

* **Configure** the way the extraction should be done
* **Focus** on the token processing
  * Decoding
  * Checking signature, expiration, revocation
  * Retrieve user identifier

> 🦸 Leverage all Symfony power to fine tune configuration to your needs

<!--
Now, to sum up, your job is to configure how the extraction will be done. It brings more flexibility.

You can focus on the Token itself, decoding it, checking signature, revocation, expiration. 

Retrieving the user identifier, from the token itself, or from any other source, like a database, an API, an OpenID Connect server like Keycloak, etc

Enjoy the power of Symfony to configure your authentication finely depending on your environments! For instance,you can supporttoken extraction from query string and request body only on dev or test environment, but not on production.
-->

---
class: text-center
---

# 👏 Thanks a lot

# Wouter
# Guillaume
# Vincent
# Florent

<div class="mt-12"></div>

## And all reviewers, commenters 🎉

<!--
Before leaving the stage, I would like to thank Wouter, Guillaume, Vincent, Florent, and all reviewers and commenters for this feature!
-->

---
layout: section
---

# Thank you ☕ 🍰
## Any questions?

<br>
<br>

Slides and demo apps 👉 [welcomattic.github.io/painless-authentication-with-access-token](https://welcomattic.github.io/painless-authentication-with-access-token/)

Sources
* [JWT RFC](https://www.rfc-editor.org/rfc/rfc7519)
* [Bearer Token Usage RFC](https://datatracker.ietf.org/doc/html/rfc6750)
* [In-depth article about token authentication](https://lafor.ge/biscuit-1)

<!--
Thank you for your attention, I hope you've learned something during this talk.
If you have any question, I will be happy to answer 
-->
