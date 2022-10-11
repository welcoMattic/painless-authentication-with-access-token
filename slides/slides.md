---
theme: apple-basic
highlighter: shiki
lineNumbers: true
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

* 🧑‍💻 Web developer at JoliCode
* <fa-brands-symfony /> Symfony Core Team Member
* <cib-twitter class="text-sky-500" /> Twitter: <a href="https://twitter.com/welcomattic">@welcomattic</a>

::right::

<img class="rounded-3xl" src="/images/me.jpg" alt="Mathieu Santostefano"/>

---

# What is an Access Token?

* `i-am-an-access-token` **is an Access Token**
* `083d8330-fc1e-4d00-8306-dda10aad3e95` **is an Access Token**
* `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c` **is an Access token**

> **An Access Token is a string. Nothing less, nothing more.**

<style>
  blockquote { font-size: 1.5em; padding: 0.6em; margin-top: 2em }
</style>

---

# Ok, but

* Those strings are Access Tokens, because an application expects to find such a string in incoming requests

* The application will verify the token and decide to continue the process or not

---

# Verify the token?

The verification process is up to **you**.

* Check if the string is in some database table
* Calculate hash and compare it to the expected one
* Decode the token (base64, …) and make some assertions on decoded values
* …

---

# Use cases

Authentication with Access Token is useful in some contexts, like

* API Gateway in front of private APIs
* Application that access to personal data provided by a third party (ex. a social network)
* Micro-services between them
* Client applications of a SaaS API
* …

---

# Access Token auth with Symfony < 6.2