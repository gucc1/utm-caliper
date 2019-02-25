# Caliper for UTM

[このリポジトリ](https://github.com/gucc1/utm-fabric)の Chaincode のベンチマークを取るためのツール

## Requirements(検証した環境)

- Node.js v10.13.0
- npm 6.4.1
- yarn 1.12.1

## Usage

1. Install dependencies

```bash
npm install
```

or

```bash
yarn
```

2. Generate config files

```bash
cd network/utm/config/
./generate.sh
```

Fabric では、鍵やチャンネル情報などを事前に生成しておく必要があるため、それを事前に生成する。
`network/utm/config/`以下の

- configtx.yaml
- crypto-config.yaml

がそれに該当する。
ここでは事前に 24org 分を生成してそれを各 org のベンチマーク計測で利用した。

3. Run

```bash
node benchmark/utm/main.js -c config.yaml -n ../../network/utm/dev/24peer.json
```

`benchmark/utm/`以下にベンチマークの設定がおいてあり、`config.yaml`にて TPS やパターンを変更することができる  
`data`以下には事前に用意した重複のない予約情報がおいてある  
`network/utm/dev`以下にネットワークの設定をおいてある  
json で設定を記載しており、各 org パターンを事前に用意している  
またそれに合わせて各 org パターンの`docker-compose`ファイルも用意している

## Other

Chaincode は`src/contract/fabric/utm/`以下においてある  
基本的に以下のディレクトリで設定ファイルなどを変更していくことになる

- `benchmark/utm/`
- `network/utm/`

## Reference

https://github.com/hyperledger/caliper
