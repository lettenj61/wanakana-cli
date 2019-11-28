wanakana-cli
============

Convert Japanese KANA and ROMAJI from command line via [WaniKani/WanaKana][wanakana].




## Installation

Prerequisite: `npm` or `yarn`.

TODO: not published yet.




## Usage

```sh
$ wanakana-cli --help
wanakana-cli v0.1.0

Usage:
  $ wanakana-cli <command> [options]

Options:
  -v, --version   Display version number
  -h, --help      Display this message
  -r, --romaji    Convert to romaji
  -k, --katakana  Convert to kana
  -h, --hiragana  Convert to hiragana
```

### Romaji to Hiragana (**-h**)

```sh
$ wanakana-cli -h kibun ha saikou
きぶん は さいこう
```

### Romaji to Katakana (**-k**)

```sh
$ wanakana-cli -k irokoi purisukin
イロコイ プリスキン
```

### Katakana/Hiragana to Romaji (**-r**)

```
$ wanakana-cli --upcaseKatakana -r すいへいせん の クルーザー
suiheisen no KURUUZAA
```




## Build

1) Fetch this repository

```sh
$ git clone https://github.com/lettenj61/wanakana-cli.git
```

2) Compile & install (we use [zeit/ncc][ncc])

```sh
$ yarn
$ yarn build
```

You'll have bundled script under `./target/wanakana-cli`.




## License

MIT.


[wanakana]: https://github.com/WaniKani/WanaKana
[ncc]: https://github.com/zeit/ncc

