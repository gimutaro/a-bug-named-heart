# CLAUDE.md

このファイルは、このリポジトリでコードを操作する際にClaude Code (claude.ai/code) にガイダンスを提供します。

## プロジェクト概要

Next.js 14、React、TypeScriptで構築された日本語ビジュアルノベルゲームです。深夜にデバッグ作業をしているプログラマーが、意識を持ったNPC「NPC-556」と出会う物語を描いています。

## 開発コマンド

- `npm run dev` - 開発サーバー起動
- `npm run build` - 本番用ビルド
- `npm run start` - 本番サーバー起動
- `npm run lint` - ESLint実行

## アーキテクチャ

ゲームは中央集約型ステート管理を持つコンポーネントベースアーキテクチャに従っています：

### コアコンポーネント
- `VisualNovel` - GameProviderコンテキストを提供するルートゲームコンポーネント
- `GameScreen` - シーンレンダリングとユーザーインタラクションを統制するメインゲームインターフェース
- `Scene` - 背景、キャラクター、テキスト表示を含む個別シーンのレンダリングを処理
- `TypewriterText` - ダイアログテキストのタイプライターアニメーション効果を提供
- `ChoiceMenu` - 分岐ダイアログのためのインタラクティブな選択肢ボタンをレンダリング

### ステート管理
ゲームステートはuseReducerを使用したReact Contextで管理されています：
- `useGameState`フックがゲームステートとディスパッチアクションを提供
- ステートには現在のシーン、訪れたシーン、プレイヤーの選択、ゲーム終了が含まれる
- アクション: NEXT_SCENE, MAKE_CHOICE, END_GAME, RESTART_GAME

### ストーリー構造
- 全てのシーンとダイアログは`src/data/story.ts`で定義
- 各シーンには背景画像、感情付きオプションキャラクター、話者、テキスト、ナビゲーションがある
- 分岐ストーリーラインは次のシーンIDを参照する選択肢オブジェクトで処理
- キャラクターの感情はストーリー進行に基づいて変化（neutral, sad, emotional, hope, smile）

### ファイル構造
- `src/types/game.ts` - Scene、Character、Choice、GameState、GameActionsのTypeScriptインターフェース
- `src/hooks/useGameState.tsx` - React ContextとuseReducerを使用したゲームステート管理
- `src/data/story.ts` - 全てのストーリーコンテンツ、シーン、ダイアログ
- `public/` - 背景画像とキャラクタースプライトを格納

### スタイリング
カスタムダークテーマのTailwind CSSを使用。没入感のあるビジュアルノベル体験のため、フルスクリーン黒背景に白テキストのデザインです。