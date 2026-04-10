import { describe, it, expect } from 'vitest';
import lint from '@commitlint/lint';
import config from './index.js';

const { rules } = config;

async function lintMessage(message) {
  return lint(message, rules);
}

describe('@beeping-io/commitlint-config', () => {
  describe('valid messages', () => {
    const valid = [
      'feat(auth): add LinkedIn OAuth via Firebase custom provider',
      'fix(receive): handle empty audio buffer gracefully',
      'test(send): add property-based tests for vCard encoding',
      'docs: update README with new platform list',
      'chore(deps): bump vitest from 3.0.0 to 3.1.0',
      'refactor(core): extract encoding logic into separate module',
      'perf(decode): reduce memory allocations in FFT path',
      'style: fix trailing whitespace in config files',
      'build(android): update Gradle to 8.5',
      'ci: add branch protection workflow',
      'revert: revert "feat(auth): add broken OAuth flow"',
      'feat(auth): short',
      'fix: single word scope-less',
    ];

    for (const msg of valid) {
      it(`accepts: "${msg}"`, async () => {
        const result = await lintMessage(msg);
        expect(result.valid).toBe(true);
      });
    }
  });

  describe('invalid messages', () => {
    const invalid = [
      ['no type or colon here', 'missing type'],
      ['Feature(auth): capitalized type', 'uppercase type'],
      ['feat(auth): Add something.', 'trailing period + uppercase subject start'],
      ['unknown(scope): some change', 'unknown type'],
      [
        'feat(auth): ' + 'a'.repeat(90),
        'header exceeds 100 chars',
      ],
      ['Feat(auth): uppercase type', 'pascal-case type'],
      ['FEAT(auth): all-caps type', 'upper-case type'],
      ['feat(Auth): uppercase scope', 'uppercase scope'],
    ];

    for (const [msg, reason] of invalid) {
      it(`rejects: "${reason}"`, async () => {
        const result = await lintMessage(msg);
        expect(result.valid).toBe(false);
      });
    }
  });

  describe('body and footer rules', () => {
    it('accepts message with body separated by blank line', async () => {
      const msg = 'feat(auth): add OAuth\n\nThis adds OAuth support for LinkedIn.';
      const result = await lintMessage(msg);
      expect(result.valid).toBe(true);
    });

    it('rejects body without leading blank line', async () => {
      const msg = 'feat(auth): add OAuth\nNo blank line before body.';
      const result = await lintMessage(msg);
      expect(result.valid).toBe(false);
    });

    it('accepts footer with BREAKING CHANGE', async () => {
      const msg =
        'feat(auth): add OAuth\n\nAdds OAuth support.\n\nBREAKING CHANGE: removes legacy auth';
      const result = await lintMessage(msg);
      expect(result.valid).toBe(true);
    });
  });
});
