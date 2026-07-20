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
    "ベンチプレス(フラット)": "images/exercises/rS23_c1.jpg",
    "デクラインベンチプレス": "images/exercises/rS12_c1.jpg",
    "ダンベルプレス": "images/exercises/rS8_c2.jpg",
    "インクラインダンベルプレス": "images/exercises/rS23_c3.jpg",
    "インクラインベンチプレス(30°)": "images/exercises/rS1_c1.jpg",
    "インクラインベンチプレス(45°)": "images/exercises/rS1_c2.jpg",
    "インクラインベンチプレス(60°)": "images/exercises/rS1_c3.jpg",
    "ダンベルフライ": "images/exercises/rS12_c2.jpg",
    "インクラインダンベルフライ": "images/exercises/rS12_c3.jpg",
    "チェストプレス(マシン)": "images/exercises/rS13_c1.jpg",
    "ペックフライ(マシン)": "images/exercises/rS13_c2.jpg",
    "ケーブルクロスオーバー": "images/exercises/rS12_c4.jpg",
    "腕立て伏せ": "images/exercises/rS10_c4.jpg",
    "ディップス(胸)": "images/exercises/rS22_c3.jpg",
    // ── 背中 ──
    "デッドリフト(コンベンショナル)": "images/exercises/rS14_c1.jpg",
    "デッドリフト(スモウ)": "images/exercises/rS1_c4.jpg",
    "懸垂(チンニング)": "images/exercises/rS23_c4.jpg",
    "ラットプルダウン": "images/exercises/rS24_c1.jpg",
    "ベントオーバーロウ": "images/exercises/rS24_c2.jpg",
    "シーテッドロウ": "images/exercises/rS14_c2.jpg",
    "ワンハンドダンベルロウ": "images/exercises/rS14_c3.jpg",
    "Tバーロウ": "images/exercises/rS14_c4.jpg",
    "バックエクステンション": "images/exercises/rS15_c1.jpg",
    "プルオーバー": "images/exercises/rS15_c2.jpg",
    "シュラッグ(僧帽筋)": "images/exercises/rS15_c3.jpg",
    "ビハインドネックプルダウン": "images/exercises/rS2_c1.jpg",
    "ハイロウ(マシン)": "images/exercises/rS3_c1.jpg",
    "アシストチンニング(マシン)": "images/exercises/rS3_c4.jpg",
    // ── 肩 ──
    "ショルダープレス(スタンディング)": "images/exercises/rS8_c3.jpg",
    "ショルダープレス(シーテッド)": "images/exercises/rS8_c3.jpg",
    "ダンベルショルダープレス(スタンディング)": "images/exercises/rS23_c2.jpg",
    "ダンベルショルダープレス(シーテッド)": "images/exercises/rS23_c2.jpg",
    "アーノルドプレス": "images/exercises/rS16_c1.jpg",
    "サイドレイズ(スタンディング)": "images/exercises/rS8_c4.jpg",
    "サイドレイズ(シーテッド)": "images/exercises/rS8_c4.jpg",
    "フロントレイズ": "images/exercises/rS16_c2.jpg",
    "リアレイズ": "images/exercises/rS16_c3.jpg",
    "リアデルトフライ(マシン)": "images/exercises/rS16_c4.jpg",
    "アップライトロウ": "images/exercises/rS15_c4.jpg",
    "フェイスプル": "images/exercises/rS22_c4.jpg",
    // ── 腕（二頭・三頭）──
    "バーベルカール(スタンディング)": "images/exercises/rS17_c1.jpg",
    "バーベルカール(シーテッド)": "images/exercises/rS17_c1.jpg",
    "ダンベルカール(スタンディング)": "images/exercises/rS9_c1.jpg",
    "ダンベルカール(シーテッド)": "images/exercises/rS9_c1.jpg",
    "ハンマーカール(スタンディング)": "images/exercises/rS17_c2.jpg",
    "ハンマーカール(シーテッド)": "images/exercises/rS17_c2.jpg",
    "インクラインダンベルカール": "images/exercises/rS17_c3.jpg",
    "コンセントレーションカール": "images/exercises/rS17_c4.jpg",
    "プリーチャーカール": "images/exercises/rS9_c4.jpg",
    "ケーブルカール": "images/exercises/rS2_c2.jpg",
    "トライセプスエクステンション": "images/exercises/rS9_c2.jpg",
    "フレンチプレス": "images/exercises/rS18_c1.jpg",
    "プレスダウン": "images/exercises/rS9_c3.jpg",
    "ナローベンチプレス": "images/exercises/rS11_c4.jpg",
    "ディップス(三頭)": "images/exercises/rS18_c2.jpg",
    "キックバック": "images/exercises/rS18_c3.jpg",
    "ライイングエクステンション": "images/exercises/rS18_c4.jpg",
    // ── 脚 ──
    "バーベルスクワット(パラレル)": "images/exercises/rS24_c3.jpg",
    "バーベルスクワット(フル)": "images/exercises/rS24_c3.jpg",
    "バーベルスクワット(フルボトム)": "images/exercises/rS24_c3.jpg",
    "バーベルスクワット(ハーフ)": "images/exercises/rS24_c3.jpg",
    "バーベルスクワット(クォーター)": "images/exercises/rS24_c3.jpg",
    "フロントスクワット": "images/exercises/rS10_c1.jpg",
    "レッグプレス": "images/exercises/rS25_c1.jpg",
    "レッグエクステンション": "images/exercises/rS19_c1.jpg",
    "レッグカール": "images/exercises/rS19_c2.jpg",
    "ブルガリアンスクワット": "images/exercises/rS19_c3.jpg",
    "ランジ": "images/exercises/rS10_c2.jpg",
    "ルーマニアンデッドリフト": "images/exercises/rS24_c4.jpg",
    "ヒップスラスト": "images/exercises/rS19_c4.jpg",
    "カーフレイズ(スタンディング)": "images/exercises/rS25_c2.jpg",
    "カーフレイズ(シーテッド)": "images/exercises/rS20_c1.jpg",
    "アダクション(内転)": "images/exercises/rS20_c2.jpg",
    "アブダクション(外転)": "images/exercises/rS20_c3.jpg",
    "バックキック(臀部)": "images/exercises/rS4_c3.jpg",
    "クラムシェル": "images/exercises/rS4_c4.jpg",
    // ── 体幹 ──
    "クランチ": "images/exercises/rS11_c1.jpg",
    "シットアップ": "images/exercises/rS2_c3.jpg",
    "レッグレイズ": "images/exercises/rS11_c2.jpg",
    "ハンギングレッグレイズ": "images/exercises/rS21_c1.jpg",
    "プランク": "images/exercises/rS21_c2.jpg",
    "サイドプランク": "images/exercises/rS21_c3.jpg",
    "アブローラー": "images/exercises/rS21_c4.jpg",
    "ロシアンツイスト": "images/exercises/rS22_c1.jpg",
    "ケーブルクランチ": "images/exercises/rS22_c2.jpg",
    "ロータリートルソー": "images/exercises/rS3_c2.jpg",
    "アブクランチ(マシン)": "images/exercises/rS3_c3.jpg",
    "肛門開閉(骨盤底筋)": "images/exercises/rS4_c1.jpg",
    "ドローイン": "images/exercises/rS4_c2.jpg",
    "ハンドレッド": "images/exercises/rS5_c1.jpg",
    "ロールアップ": "images/exercises/rS5_c2.jpg",
    "ロールオーバー": "images/exercises/rS5_c3.jpg",
    "シングルレッグストレッチ": "images/exercises/rS5_c4.jpg",
    "ダブルレッグストレッチ": "images/exercises/rS6_c1.jpg",
    "ティーザー": "images/exercises/rS6_c2.jpg",
    "レッグサークル": "images/exercises/rS6_c3.jpg",
    "スイミング": "images/exercises/rS6_c4.jpg",
    "スワン": "images/exercises/rS7_c1.jpg",
    "キャット&カウ": "images/exercises/rS7_c2.jpg",
    "バードドッグ": "images/exercises/rS7_c3.jpg",
    "サイドキック": "images/exercises/rS7_c4.jpg",
    "ショルダーブリッジ": "images/exercises/rS8_c1.jpg",
    // ── マシン・その他 ──
    "ハックスクワット": "images/exercises/rS13_c4.jpg",
    "スミスマシンベンチプレス": "images/exercises/rS13_c3.jpg",
    "スミスマシンスクワット": "images/exercises/rS2_c4.jpg",
    "ヒップリフト(ヒップブリッジ)": "images/exercises/rS11_c3.jpg",
    "ワイドスクワット(相撲)": "images/exercises/rS20_c4.jpg",
    "スプリットスクワット": "images/exercises/rS10_c3.jpg",
    "内転筋トレ(アダクション)": "images/exercises/rS20_c2.jpg"
  }
};
