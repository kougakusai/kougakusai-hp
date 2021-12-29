# [こうがく祭 HP](https://kougakusai.github.io/kougakusai-hp/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

次のコマンドで必要なパッケージをインストールしてください。

```
$ yarn install
```

### 開発用サーバで動作確認する場合

次のコマンドで開発サーバを起動可能です。

```
$ yarn dev
```

起動後は[http://localhost:3000](http://localhost:3000)にアクセスすることでサイトが閲覧できます。

### 静的サイトとして動作確認する場合

次のコマンドで静的サイトを生成・起動可能です。

```
$ yarn start
```

起動後は[http://localhost:3000](http://localhost:3000)にアクセスすることでサイトが閲覧できます。

## Available Scripts

### `yarn dev`

開発用サーバを起動します。

[http://localhost:3000](http://localhost:3000)からアクセス可能です。

### `yarn gen`

ソースコードから静的サイトを生成します。成果物は`out/`に出力されます。

GitHub Pages にデプロイされるものと同じ状態なので、ローカルで確認したい場合に使用してください。

### `yarn fix`

`src/`配下の`.ts`、`.tsx`ファイルに対して静的解析と整形を行います。

VSCode で編集している場合は保存時に自動実行されるようになっているので、基本的には手動で実行する必要はありません。

## Branch

### `gh-pages`

- 開発者が直接触れる必要はありません。
- GitHub Actions により`main`のコードをビルドした結果が Push されます。
- GitHub Pages でホスティングされている静的ファイルです。

### `hotfix`

- 本番環境の問題に緊急で対処する場合のみ作成するブランチです。
- `main`から切り、`main`に Pull Request を発行します。
- 対応が完了したら`develop`にも Pull Request を発行してください。

### `main`

- 直接 Push は禁止です。`develop`または`hotfix`から Pull Request を発行してください。
- `main`への Push により GitHub Actions のビルドタスクがトリガーされ、本番環境にデプロイするファイルが生成されます。

### `develop`

- 直接 Push は基本的に禁止です。`feature`または`hotfix`から Pull Request を発行してください。
- 開発中のコードが集まるブランチです。
- `feature`は`develop`から切るようにしてください。

### `feature`

- 自身が担当している作業を行うためのブランチです。
- 関連 Issue がある場合は、その Issue の番号をブランチ名にすると良いでしょう。例）`feature/#000`
- 関連 Issue がない場合は、適宜命名してください。例）`feature/foo-bar-baz`

## Notes

- `npm`は使用できません。`yarn`を使用してください。
- VSCode に ESLint と Prettier の拡張機能を導入のうえ編集することをお勧めします。その他のエディタで編集する場合は、コミット前に必ず`yarn fix`で整形するようにしてください。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
