# @beeping.io/commitlint-config

Shared [commitlint](https://commitlint.js.org/) configuration for all repos in
the [Beeping](https://github.com/beeping-io) ecosystem.

Enforces [Conventional Commits](https://www.conventionalcommits.org/) with
Beeping-specific rules.

## Installation

```bash
npm install -D @beeping.io/commitlint-config @commitlint/cli
```

## Usage

Create `commitlint.config.cjs` in your repo root:

```js
module.exports = { extends: ['@beeping.io/commitlint-config'] };
```

## Rules

| Rule | Level | Value |
|---|---|---|
| `type-enum` | error | `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert` |
| `type-case` | error | `lower-case` |
| `type-empty` | error | never |
| `scope-case` | error | `lower-case` |
| `subject-empty` | error | never |
| `subject-full-stop` | error | never `.` |
| `subject-case` | error | never `upper-case`, `pascal-case`, `start-case` |
| `header-max-length` | error | 100 chars |
| `body-leading-blank` | error | always |
| `body-max-line-length` | error | 100 chars |
| `footer-leading-blank` | error | always |
| `footer-max-line-length` | error | 100 chars |

## Development

```bash
npm install
npm test
```

## License

[Apache-2.0](LICENSE)
