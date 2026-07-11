// gallery.js — 種目図鑑の画像メタデータ
// このファイルは <script> で読み込む。JSONにしない（file:// でも動くように / 設計書§5）。
// 反映は index.html の openGallery()/renderGallery()/openPoster()。
//
// 元ファイル対応表（元PNG＝C:\Users\bigba\Downloads\ChatGPT Image 2026年7月8日 *.png）
//   p01.jpg ← 10_29_29.png   種目別｜主に鍛えられる部位
//   p02.jpg ← 10_29_34.png   筋トレ種目一覧
//   p03.jpg ← 10_29_38.png   追加の主要筋トレ種目一覧
//   p04.jpg ← 10_29_42.png   追加の主要筋トレ種目一覧（これまでの種目以外）
//   p05.jpg ← 10_29_45.png   さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p06.jpg ← 10_29_48.png   さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p07.jpg ← 10_29_51.png   追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p08.jpg ← 10_29_54.png   追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p09.jpg ← 10_29_57.png   追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p10.jpg ← 10_30_00.png   さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p11.jpg ← 10_30_03.png   さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p12.jpg ← 10_30_06.png   さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）
//   p13.jpg ← 10_30_10.png   さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）
// ※ JPEG化：元PNG(約2MB)を長辺1600px・品質85で圧縮（約350KB）。タイトルは各画像の見出しを実読して記入。
// ※ 各ポスターは胸/背中/肩/腕/脚/体幹/全身を横断する複合図のため cats は "overview"。
//
// 画像を1枚足すとき：images/posters/ に置き、下の posters に {file,title,cats,order} を1行追加。
// 将来の個別種目画像は exerciseImages に "種目名(DB.exercises[].name と完全一致)":"パス" を追加。

window.GALLERY = {
  posters: [
    { file:"images/posters/p01.jpg", title:"種目別｜主に鍛えられる部位", cats:["overview"], order:1 },
    { file:"images/posters/p02.jpg", title:"筋トレ種目一覧", cats:["overview"], order:2 },
    { file:"images/posters/p03.jpg", title:"追加の主要筋トレ種目一覧", cats:["overview"], order:3 },
    { file:"images/posters/p04.jpg", title:"追加の主要筋トレ種目一覧（これまでの種目以外）", cats:["overview"], order:4 },
    { file:"images/posters/p05.jpg", title:"さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:5 },
    { file:"images/posters/p06.jpg", title:"さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:6 },
    { file:"images/posters/p07.jpg", title:"追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:7 },
    { file:"images/posters/p08.jpg", title:"追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:8 },
    { file:"images/posters/p09.jpg", title:"追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:9 },
    { file:"images/posters/p10.jpg", title:"さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:10 },
    { file:"images/posters/p11.jpg", title:"さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:11 },
    { file:"images/posters/p12.jpg", title:"さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:12 },
    { file:"images/posters/p13.jpg", title:"さらに追加の主要筋トレ種目一覧（これまでに出ていない種目）", cats:["overview"], order:13 }
  ],
  // 個別種目画像（GPT作成の種目カード）。キーは DB.exercises[].name と完全一致（半角括弧）。
  // 実体は images/exercises/pXX_cNN.jpg（切り出し目録 cells_inventory.md 検収済み）。
  // 同一種目が複数ポスターにある場合は幅の大きいカードを優先（p01>p03>p04>その他>p02）。
  // 意味が確実に一致するものだけマップ。未マップ種目は記録画面でSVG人体図にフォールバックする。
  exerciseImages: {
    // ── 胸 ──
    "ベンチプレス(フラット)": "images/exercises/p01_c01.jpg",
    "デクラインベンチプレス": "images/exercises/p03_c04.jpg",
    "ダンベルプレス": "images/exercises/p02_c02.jpg",
    "インクラインダンベルプレス": "images/exercises/p01_c03.jpg",
    "ダンベルフライ": "images/exercises/p04_c01.jpg",
    "インクラインダンベルフライ": "images/exercises/p06_c05.jpg",
    "チェストプレス(マシン)": "images/exercises/p03_c01.jpg",
    "ペックフライ(マシン)": "images/exercises/p03_c02.jpg",
    "ケーブルクロスオーバー": "images/exercises/p04_c03.jpg",
    "腕立て伏せ": "images/exercises/p02_c11.jpg",
    "ディップス(胸)": "images/exercises/p01_c04.jpg",
    // ── 背中 ──
    "デッドリフト(コンベンショナル)": "images/exercises/p03_c31.jpg",
    "懸垂(チンニング)": "images/exercises/p01_c05.jpg",
    "ラットプルダウン": "images/exercises/p01_c07.jpg",
    "ベントオーバーロウ": "images/exercises/p01_c06.jpg",
    "シーテッドロウ": "images/exercises/p03_c09.jpg",
    "ワンハンドダンベルロウ": "images/exercises/p04_c09.jpg",
    "Tバーロウ": "images/exercises/p03_c08.jpg",
    "バックエクステンション": "images/exercises/p04_c12.jpg",
    "プルオーバー": "images/exercises/p03_c10.jpg",
    "シュラッグ(僧帽筋)": "images/exercises/p05_c15.jpg",
    // ── 肩 ──
    "ショルダープレス(スタンディング)": "images/exercises/p02_c04.jpg",
    "ショルダープレス(シーテッド)": "images/exercises/p02_c04.jpg",
    "ダンベルショルダープレス(スタンディング)": "images/exercises/p01_c02.jpg",
    "ダンベルショルダープレス(シーテッド)": "images/exercises/p01_c02.jpg",
    "アーノルドプレス": "images/exercises/p03_c15.jpg",
    "サイドレイズ(スタンディング)": "images/exercises/p02_c05.jpg",
    "サイドレイズ(シーテッド)": "images/exercises/p02_c05.jpg",
    "フロントレイズ": "images/exercises/p03_c14.jpg",
    "リアレイズ": "images/exercises/p04_c14.jpg",
    "リアデルトフライ(マシン)": "images/exercises/p03_c13.jpg",
    "アップライトロウ": "images/exercises/p03_c11.jpg",
    "フェイスプル": "images/exercises/p01_c08.jpg",
    // ── 腕（二頭・三頭）──
    "バーベルカール(スタンディング)": "images/exercises/p03_c16.jpg",
    "バーベルカール(シーテッド)": "images/exercises/p03_c16.jpg",
    "ダンベルカール(スタンディング)": "images/exercises/p02_c22.jpg",
    "ダンベルカール(シーテッド)": "images/exercises/p02_c22.jpg",
    "ハンマーカール(スタンディング)": "images/exercises/p03_c18.jpg",
    "ハンマーカール(シーテッド)": "images/exercises/p03_c18.jpg",
    "インクラインダンベルカール": "images/exercises/p03_c17.jpg",
    "コンセントレーションカール": "images/exercises/p04_c21.jpg",
    "プリーチャーカール": "images/exercises/p07_c19.jpg",
    "トライセプスエクステンション": "images/exercises/p02_c48.jpg",
    "フレンチプレス": "images/exercises/p03_c20.jpg",
    "プレスダウン": "images/exercises/p07_c23.jpg",
    "ナローベンチプレス": "images/exercises/p09_c22.jpg",
    "ディップス(三頭)": "images/exercises/p04_c24.jpg",
    "キックバック": "images/exercises/p04_c20.jpg",
    "ライイングエクステンション": "images/exercises/p03_c19.jpg",
    // ── 脚 ──
    "バーベルスクワット(パラレル)": "images/exercises/p01_c09.jpg",
    "バーベルスクワット(フル)": "images/exercises/p01_c09.jpg",
    "バーベルスクワット(フルボトム)": "images/exercises/p01_c09.jpg",
    "バーベルスクワット(ハーフ)": "images/exercises/p01_c09.jpg",
    "バーベルスクワット(クォーター)": "images/exercises/p01_c09.jpg",
    "フロントスクワット": "images/exercises/p02_c26.jpg",
    "レッグプレス": "images/exercises/p01_c11.jpg",
    "レッグエクステンション": "images/exercises/p03_c21.jpg",
    "レッグカール": "images/exercises/p03_c22.jpg",
    "ブルガリアンスクワット": "images/exercises/p03_c23.jpg",
    "ランジ": "images/exercises/p02_c32.jpg",
    "ルーマニアンデッドリフト": "images/exercises/p01_c10.jpg",
    "ヒップスラスト": "images/exercises/p03_c24.jpg",
    "カーフレイズ(スタンディング)": "images/exercises/p01_c12.jpg",
    "カーフレイズ(シーテッド)": "images/exercises/p08_c24.jpg",
    "アダクション(内転)": "images/exercises/p03_c25.jpg",
    "アブダクション(外転)": "images/exercises/p09_c28.jpg",
    // ── 体幹 ──
    "クランチ": "images/exercises/p02_c37.jpg",
    "レッグレイズ": "images/exercises/p02_c38.jpg",
    "ハンギングレッグレイズ": "images/exercises/p03_c28.jpg",
    "プランク": "images/exercises/p04_c35.jpg",
    "サイドプランク": "images/exercises/p03_c30.jpg",
    "アブローラー": "images/exercises/p04_c32.jpg",
    "ロシアンツイスト": "images/exercises/p03_c27.jpg",
    "ケーブルクランチ": "images/exercises/p03_c26.jpg",
    // ── マシン・その他 ──
    "ハックスクワット": "images/exercises/p11_c22.jpg",
    "スミスマシンベンチプレス": "images/exercises/p04_c05.jpg",
    "ヒップリフト(ヒップブリッジ)": "images/exercises/p02_c36.jpg",
    "ワイドスクワット(相撲)": "images/exercises/p11_c21.jpg",
    "スプリットスクワット": "images/exercises/p07_c27.jpg",
    "内転筋トレ(アダクション)": "images/exercises/p03_c25.jpg"
  }
};
