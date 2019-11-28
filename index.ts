import * as wanakana from 'wanakana';
import { cac } from 'cac';

type Options = {
  romaji?: boolean;
  katakana?: boolean;
  hiragana?: boolean;
}

type RawMap = {
  [index: string]: any;
};

const reservedOptions = new Set(['--', 'romaji', 'katakana', 'hiragana']);

function extractRawArgs(rawMap: RawMap): RawMap {
  return Object.keys(rawMap).reduce((newMap, key) => {
    if (!reservedOptions.has(key)) {
      switch (key) {
        case 'useObsoleteKana':
        case 'passRomaji':
          newMap[key] = Boolean(rawMap[key]);
          break;

        default:
          newMap[key] = rawMap[key];
      }
      
    }
    return newMap;
  }, {})
}

function main(): void {
  const cli = cac();
  const { options, args } = cli
    .version('0.1.0')
    .help()
    .option('-r, --romaji', 'Convert to romaji')
    .option('-k, --katakana', 'Convert to kana')
    .option('-h, --hiragana', 'Convert to hiragana')
    .parse() as unknown as { options: Options, args: typeof cli.args };

  if (options.katakana && options.romaji && options.hiragana) {
    console.error('Cannot perform multiple conversion!')
    process.exit(2);
  }

  const kanaParams = extractRawArgs(options);
  const text = args.join(' ');
  let result: string;
  if (options.katakana) {
    result = wanakana.toKatakana(text, kanaParams);
    console.log(result);
  } else if (options.romaji) {
    result = wanakana.toRomaji(text, kanaParams);
    console.log(result);
  } else if (options.hiragana) {
    result = wanakana.toHiragana(text, kanaParams);
    console.log(result);
  } else {
    cli.outputHelp();
  }
}

main();
