# 心という名のバグ (A Bug Named Heart)

深夜のオフィスで、プログラマーが出会ったのは意識を持ったNPCだった——。

## 概要

「心という名のバグ」は、Next.js 14とReactで開発された日本語ビジュアルノベルゲームです。ゲーム開発会社で働くプログラマーが、深夜のデバッグ作業中に偶然出会った意識を持つNPC「NPC-556」との交流を描いた物語です。

## 特徴

- 🎮 **インタラクティブストーリー**: プレイヤーの選択によって物語が分岐
- ✨ **タイプライター効果**: 臨場感のあるテキスト表示
- 😊 **感情表現システム**: キャラクターの感情に応じた表情変化
- 🌙 **没入感のあるデザイン**: ダークテーマによる夜のオフィス空間の再現
- 📱 **レスポンシブ対応**: デスクトップ・モバイル両対応

## 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: React Context + useReducer
- **UI**: React 18

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてゲームを開始できます。

## 利用可能なスクリプト

```bash
npm run dev    # 開発サーバー起動
npm run build  # 本番用ビルド
npm run start  # 本番サーバー起動
npm run lint   # ESLint実行
```

## プロジェクト構造

```
src/
├── app/          # Next.js App Router
├── components/   # Reactコンポーネント
│   ├── VisualNovel.tsx    # ルートゲームコンポーネント
│   ├── GameScreen.tsx     # メインゲーム画面
│   ├── Scene.tsx          # シーン表示
│   ├── TypewriterText.tsx # テキストアニメーション
│   └── ChoiceMenu.tsx     # 選択肢メニュー
├── data/         # ゲームデータ
│   └── story.ts  # ストーリー・シーン定義
├── hooks/        # カスタムフック
│   └── useGameState.tsx   # ゲーム状態管理
└── types/        # TypeScript型定義
    └── game.ts   # ゲーム関連の型
```

## ゲームシステム

### ストーリー進行
- シーンベースの物語構造
- プレイヤーの選択による分岐システム
- 複数エンディング対応

### キャラクターシステム
- NPC-556の感情状態（neutral, sad, emotional, hope, smile）
- 感情に応じた表情・セリフの変化

### 状態管理
- React ContextとuseReducerによる一元管理
- 訪問済みシーン、選択履歴、ゲーム進行状況の保持

## ライセンス

このプロジェクトはプライベートリポジトリです。