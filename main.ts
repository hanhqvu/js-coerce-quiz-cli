import * as p from 'npm:@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import color from 'npm:picocolors';

async function main() {
  console.clear();

  await setTimeout(1000);

  p.intro(`${color.bgYellow(color.black('クイズ大会を始まります！'))}`);

  await setTimeout(1000);

  await p.group(
    {
      participants: () =>
        p.text({
          message: '参加者の名前を入れてください。',
          placeholder: 'もも、タロ'
        }),
      numberEqualString: () =>
        p.select({
          message: `Q: 1 == '1'`,
          maxItems: 3,
          initialValue: 'true',
          options: [
            { value: 'true', label: 'true' },
            { value: 'false', label: 'false' },
            { value: 'error', label: 'エラー' }
          ]
        }),
      answer1: () => p.note(`${color.green(true)}     `, 'A'),
      stringPlusNum: () =>
        p.select({
          message: `5 + '9'`,
          maxItems: 3,
          initialValue: 'ts',
          options: [
            { value: 'number', label: '59' },
            { value: 'string', label: '"59"' },
            { value: 'half', label: '5"9"' }
          ]
        }),
      answer2: () => p.note(`${color.green('59')}     `, 'A'),
      stringPlusNumPlusNum: () =>
        p.select({
          message: `'number' + 5 + '9'`,
          maxItems: 3,
          initialValue: 'number',
          options: [
            { value: 'NaN14', label: 'NaN14' },
            { value: 'error', label: 'エラー' },
            { value: 'number14', label: 'number14' }
          ]
        }),
      answer3: () => p.note(`${color.green('number14')}     `, 'A'),
      trueVoid1: () =>
        p.select({
          message: `true + undefined + '1'`,
          maxItems: 3,
          initialValue: 'true',
          options: [
            { value: 'trueundefined1', label: 'trueundefined1' },
            { value: 'NaN1', label: 'NaN1' },
            { value: '2', label: '2' }
          ]
        }),
      answer4: () => p.note(`${color.green('NaN1')}     `, 'A'),
      falseEqualMinus1: () =>
        p.select({
          message: `false === -1`,
          maxItems: 3,
          initialValue: 'false',
          options: [
            { value: 'true', label: 'true' },
            { value: 'error', label: 'エラー' },
            { value: 'false', label: 'false' }
          ]
        }),
      answer5: () => p.note(`${color.green('NaN1')}     `, 'A'),
      theme: () =>
        p.select({
          message: `Q: テーマ`,
          maxItems: 3,
          initialValue: 'math',
          options: [
            { value: 'math', label: '数学' },
            { value: 'coerce', label: '型強制' },
            { value: 'none', label: 'テーマなし' }
          ]
        }),
      answer6: () => p.note(`${color.green('型強制')}         `, 'A')
    },
    {
      onCancel: () => {
        p.cancel('残念ですがクイズ大会がキャンセルしました。🥲');
        Deno.exit(0);
      }
    }
  );

  p.outro(`${color.underline(color.yellow('参加をありがとうございます'))}`);

  Deno.exit(0);
}

main().catch(console.error);
