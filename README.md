# Knowledge Box beta

## 概要

Knowledge Box beta は、知識を効率的にストックできるノートアプリです。</br>
私が過去に作ったアプリ、[Quick Quill](https://quick-quill.herokuapp.com/) を新たな技術スタックで最適化を試みているアプリになります。</br>
現在、開発中のため beta版 としております。(2024.06開発開始)

## 画面

### エディター画面

![エディダー画像](./src/assets/img/editor-img.png)

### ノートリスト画面

![ノートリスト](./src/assets/img/note-list-img.png)

## セットアップ手順

### 必要な前提条件

- Node.js v21.1.0
- npm または yarn

### インストール方法

1. リポジトリをクローンします。

```zsh
git clone https://github.com/yukisakakima/knowledge-box-beta.git
cd knowledge-box-beta
```

2. 依存関係をインストールします。

```zsh
npm install
yarn install
```

## 実行方法

### 開発環境での実行

```zsh
npm run dev
yarn dev
```

### デプロイ

```zsh
npm run deploy
yarn deploy
```

## コード整形

PrettierとESLintの実行(連携済み)

```zsh
npm run format
yarn format
```

## 使用技術

- React v18
- TypeScript v5
- React Router v6.23.1
- Emotion v11.11.4
- Dexie v4.0.7
- Prettier v3.3.2
- ESLint v8.57.0
- GitHub Pages

## 導入中の技術

- Supabase
- Redux Toolkit
