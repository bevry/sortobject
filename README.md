<!-- TITLE/ -->

# Sort Object

<!-- /TITLE -->

<!-- BADGES/ -->

<span class="badge-githubworkflow"><a href="https://github.com/bevry/sortobject/actions?query=workflow%3Abevry" title="View the status of this project's GitHub Workflow: bevry"><img src="https://github.com/bevry/sortobject/workflows/bevry/badge.svg" alt="Status of the GitHub Workflow: bevry" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/sortobject" title="View this project on NPM"><img src="https://img.shields.io/npm/v/sortobject.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/sortobject" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/sortobject.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<br class="badge-separator" />
<span class="badge-discord"><a href="https://discord.gg/nQuXddV7VP" title="Join this project's community on Discord"><img src="https://img.shields.io/discord/1147436445783560193?logo=discord&amp;label=discord" alt="Discord server badge" /></a></span>
<span class="badge-twitch"><a href="https://www.twitch.tv/balupton" title="Join this project's community on Twitch"><img src="https://img.shields.io/twitch/status/balupton?logo=twitch" alt="Twitch community badge" /></a></span>

<!-- /BADGES -->

<!-- DESCRIPTION/ -->

Returns a copy of an object, sorted deeply by its keys, without mangling any arrays inside of it

<!-- /DESCRIPTION -->


## Usage

[Complete API Documentation.](http://master.sortobject.bevry.surge.sh/docs/)

```javascript
import sortObject from 'sortobject'
const fixture = {
    c: true,
    a: true,
    b: null,
    d: [
        {
            c: true,
            a: true,
            b: null,
        },
        {
            c: true,
            a: true,
            b: null,
            d: [
                {
                    c: true,
                    a: true,
                    b: null,
                },
            ],
        },
    ],
}
const actual = sortObject(fixture)
console.log(JSON.stringify(actual, null, 4)) /* {
    "a": true,
    "b": null,
    "c": true,
    "d": [
        {
            "a": true,
            "b": null,
            "c": true
        },
        {
            "a": true,
            "b": null,
            "c": true,
            "d": [
                {
                    "a": true,
                    "b": null,
                    "c": true
                }
            ]
        }
    ]
} */
```

<!-- INSTALL/ -->

## Install

### [npm](https://npmjs.com "npm is a package manager for javascript")

-   Install: `npm install --save sortobject`
-   Import: `import pkg from ('sortobject')`
-   Require: `const pkg = require('sortobject').default`

### [Deno](https://deno.land "Deno is a secure runtime for JavaScript and TypeScript, it is an alternative for Node.js")

``` typescript
import pkg from 'https://unpkg.com/sortobject@^5.5.0/edition-deno/index.ts'
```
### [Skypack](https://www.skypack.dev "Skypack is a JavaScript Delivery Network for modern web apps")

``` html
<script type="module">
    import pkg from '//cdn.skypack.dev/sortobject@^5.5.0'
</script>
```
### [unpkg](https://unpkg.com "unpkg is a fast, global content delivery network for everything on npm")

``` html
<script type="module">
    import pkg from '//unpkg.com/sortobject@^5.5.0'
</script>
```
### [jspm](https://jspm.io "Native ES Modules CDN")

``` html
<script type="module">
    import pkg from '//dev.jspm.io/sortobject@5.5.0'
</script>
```
### [Editions](https://editions.bevry.me "Editions are the best way to produce and consume packages you care about.")

This package is published with the following editions:
-   `sortobject/source/index.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") source code with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `sortobject/edition-browsers/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2022](https://en.wikipedia.org/wiki/ES2022 "ECMAScript 2022") for web browsers with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `sortobject` aliases `sortobject/edition-es2022/index.js`
-   `sortobject/edition-es2022/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2022](https://en.wikipedia.org/wiki/ES2022 "ECMAScript 2022") for [Node.js](https://nodejs.org "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine") 4 || 6 || 8 || 10 || 12 || 14 || 16 || 18 || 20 || 21 with [Require](https://nodejs.org/dist/latest-v5.x/docs/api/modules.html "Node/CJS Modules") for modules
-   `sortobject/edition-es2022-esm/index.js` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled against [ES2022](https://en.wikipedia.org/wiki/ES2022 "ECMAScript 2022") for [Node.js](https://nodejs.org "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine") 12 || 14 || 16 || 18 || 20 || 21 with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `sortobject/edition-types/index.d.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") compiled Types with [Import](https://babeljs.io/docs/learn-es2015/#modules "ECMAScript Modules") for modules
-   `sortobject/edition-deno/index.ts` is [TypeScript](https://www.typescriptlang.org/ "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.") source code made to be compatible with [Deno](https://deno.land "Deno is a secure runtime for JavaScript and TypeScript, it is an alternative to Node.js")

<!-- /INSTALL -->

<!-- HISTORY/ -->

## History

[Discover the release history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/sortobject/blob/HEAD/HISTORY.md#files)

<!-- /HISTORY -->

<!-- BACKERS/ -->

## Backers

### Code

[Discover how to contribute via the `CONTRIBUTING.md` file.](https://github.com/bevry/sortobject/blob/HEAD/CONTRIBUTING.md#files)

#### Authors

-   [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.

#### Maintainers

-   [Benjamin Lupton](https://github.com/balupton) — Accelerating collaborative wisdom.

#### Contributors

-   [Benjamin Lupton](https://github.com/balupton) — [view contributions](https://github.com/bevry/sortobject/commits?author=balupton "View the GitHub contributions of Benjamin Lupton on repository bevry/sortobject")
-   [James Newell](https://jameslnewell.me/)
-   [James Newell](https://github.com/jameslnewell) — [view contributions](https://github.com/bevry/sortobject/commits?author=jameslnewell "View the GitHub contributions of James Newell on repository bevry/sortobject")
-   [Serge Havas](https://github.com/Sinewyk) — [view contributions](https://github.com/bevry/sortobject/commits?author=Sinewyk "View the GitHub contributions of Serge Havas on repository bevry/sortobject")

### Finances

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

#### Funders

-   [GoVests](https://www.govests.com.au)

#### Sponsors

-   [Andrew Nesbitt](https://nesbitt.io) — Software engineer and researcher
-   [Balsa](https://balsa.com) — We're Balsa, and we're building tools for builders.
-   [Codecov](https://codecov.io/) — Empower developers with tools to improve code quality and testing.
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Rob Morris](https://github.com/Rob-Morris)
-   [Sentry](https://sentry.io) — Real-time crash reporting for your web apps, mobile apps, and games.
-   [Syntax](https://syntax.fm) — Syntax Podcast

#### Donors

-   [Andrew Nesbitt](https://nesbitt.io)
-   [Balsa](https://balsa.com)
-   [Chad](https://opencollective.com/chad8)
-   [Codecov](https://codecov.io/)
-   [entroniq](https://gitlab.com/entroniq)
-   [GoVests](https://www.govests.com.au)
-   [Jean-Luc Geering](https://github.com/jlgeering)
-   [Michael Duane Mooring](https://mdm.cc)
-   [Mohammed Shah](https://github.com/smashah)
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Rob Morris](https://github.com/Rob-Morris)
-   [Sentry](https://sentry.io)
-   [ServieJS](https://github.com/serviejs)
-   [Skunk Team](https://skunk.team)
-   [Syntax](https://syntax.fm)

<!-- /BACKERS -->

<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

-   Copyright &copy; [Benjamin Lupton](https://balupton.com)

and licensed under:

-   [Artistic License 2.0](http://spdx.org/licenses/Artistic-2.0.html)

<!-- /LICENSE -->
