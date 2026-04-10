/**
 * @beeping.io/commitlint-config
 *
 * Shared commitlint rules for all repos in the Beeping ecosystem.
 * Enforces Conventional Commits with the allowed types, scopes, and formatting.
 *
 * Usage in consumer repos:
 *   // commitlint.config.cjs
 *   module.exports = { extends: ['@beeping.io/commitlint-config'] }
 */
module.exports = {
  rules: {
    // Type
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],

    // Scope
    'scope-case': [2, 'always', 'lower-case'],

    // Subject
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],

    // Header
    'header-max-length': [2, 'always', 100],

    // Body
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],

    // Footer
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
};
