# TOEIC モバイル練習ツール — MVP プラン

## ゴール

**スマホでTOEIC Part 5（短文穴埋め）を練習できる最小限のWebアプリ**を作る。
Part 5 は1問完結型で実装がシンプルなため、MVPに最適。

---

## 技術スタック

| 技術 | 選定理由 |
|------|---------|
| **React + TypeScript** | 型安全、コンポーネント指向 |
| **Vite** | 高速ビルド |
| **Tailwind CSS** | モバイルファーストCSS |
| **vite-plugin-pwa** | オフライン対応・ホーム画面追加 |
| **React Router** | ページ遷移 |
| **localStorage** | 学習記録の簡易保存（MVP段階） |

---

## MVP スコープ（やること / やらないこと）

### やること
- Part 5 の練習（10〜20問のサンプル問題）
- 4択タップで回答 → 即座に正誤表示
- 解説の表示
- 正答率の表示（シンプルなカウント）
- モバイルファーストUI
- PWA対応（ホーム画面に追加可能）

### やらないこと（将来対応）
- Part 6, 7（読解系）
- Part 1〜4（リスニング系）
- ユーザー認証
- クラウド同期
- 詳細な統計・グラフ
- ダークモード
- 模試モード

---

## 画面構成（3画面のみ）

```
/           → ホーム（練習開始ボタン + 正答率表示）
/practice   → 問題画面（Part 5 の問題を1問ずつ表示）
/result     → 結果画面（今回のセッションの成績）
```

---

## データモデル

```typescript
// 問題データ
interface Question {
  id: string;
  sentence: string;        // "The manager _____ the report yesterday."
  choices: [string, string, string, string];
  correctIndex: number;     // 0-3
  explanation: string;
}

// 回答記録（localStorage）
interface AnswerRecord {
  questionId: string;
  isCorrect: boolean;
  selectedIndex: number;
  timestamp: number;
}
```

---

## ディレクトリ構成

```
toeic-practice-tool/
├── public/
│   └── icons/                 # PWAアイコン
├── src/
│   ├── components/
│   │   ├── Header.tsx         # アプリヘッダー
│   │   ├── QuestionCard.tsx   # 問題文表示
│   │   ├── ChoiceButton.tsx   # 選択肢ボタン
│   │   └── ResultSummary.tsx  # 結果サマリー
│   ├── pages/
│   │   ├── HomePage.tsx       # ホーム
│   │   ├── PracticePage.tsx   # 練習画面
│   │   └── ResultPage.tsx     # 結果画面
│   ├── data/
│   │   └── questions.ts       # サンプル問題データ
│   ├── hooks/
│   │   └── useQuiz.ts         # 問題進行ロジック
│   ├── lib/
│   │   └── storage.ts         # localStorage操作
│   ├── types.ts               # 型定義
│   ├── App.tsx                # ルーティング
│   ├── main.tsx
│   └── index.css              # Tailwind + グローバルCSS
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## モバイルUI設計

### 問題画面レイアウト

```
┌─────────────────────────┐
│  ← Part 5    3 / 10     │  ← ヘッダー（進捗）
├─────────────────────────┤
│                         │
│  The manager _____      │
│  the report yesterday.  │  ← 問題文
│                         │
├─────────────────────────┤
│                         │
│  ┌───────────────────┐  │
│  │ (A) submitted     │  │  ← 選択肢（大きなタップ領域）
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ (B) submitting    │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ (C) submit        │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ (D) submits       │  │
│  └───────────────────┘  │
│                         │
└─────────────────────────┘
```

### 正誤フィードバック

```
┌─────────────────────────┐
│  ← Part 5    3 / 10     │
├─────────────────────────┤
│                         │
│  The manager _____      │
│  the report yesterday.  │
│                         │
├─────────────────────────┤
│  ┌───────────────────┐  │
│  │ ✓ (A) submitted   │  │  ← 正解: 緑ハイライト
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │   (B) submitting  │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ ✗ (C) submit      │  │  ← 選択した不正解: 赤ハイライト
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │   (D) submits     │  │
│  └───────────────────┘  │
├─────────────────────────┤
│  過去形の文脈("yesterday")│
│  に合うのは submitted。  │  ← 解説エリア
│                         │
│  ┌───────────────────┐  │
│  │    次の問題 →      │  │  ← 次へボタン
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 実装ステップ

### Step 1: プロジェクトセットアップ
- Vite + React + TypeScript 初期化
- Tailwind CSS 設定
- React Router 設定
- PWA プラグイン設定

### Step 2: サンプル問題データ作成
- Part 5 形式の問題を10〜20問作成
- 文法・語彙・品詞のカテゴリをバランスよく

### Step 3: 問題画面の実装
- 問題文の表示（空欄のハイライト）
- 4択ボタン（タップしやすい大きなサイズ）
- 正誤判定とフィードバック表示（色 + アイコン）
- 解説の表示
- 「次の問題」ボタン

### Step 4: 結果画面の実装
- セッション結果表示（正解数 / 全問数）
- 「もう一度」「ホームに戻る」ボタン

### Step 5: ホーム画面 + 記録
- 累計正答率の表示
- 「練習開始」ボタン
- localStorage への回答記録保存

### Step 6: PWA仕上げ
- アイコン・マニフェスト設定
- Service Worker でオフライン対応
- モバイルでの動作確認

---

## サンプル問題例

```json
{
  "id": "p5-001",
  "sentence": "The manager _____ the report to the board of directors yesterday.",
  "choices": ["submitted", "submitting", "submit", "submits"],
  "correctIndex": 0,
  "explanation": "文中の 'yesterday' から過去形が必要。主語 'The manager' は三人称単数だが、過去形では submitted が正解。"
}
```

---

## 成功基準

- [ ] スマホブラウザで問題を解ける
- [ ] 正誤がすぐ分かる
- [ ] 解説が読める
- [ ] 正答率が見える
- [ ] ホーム画面に追加して使える（PWA）
