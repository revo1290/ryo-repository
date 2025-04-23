// 副業の種類と詳細情報
export const sideJobs = [
  {
    id: "web-writer",
    title: "Webライター",
    description:
      "ブログ記事やWebサイトのコンテンツを作成する仕事です。特定のテーマについて調査し、読みやすく魅力的な文章を書きます。",
    price: "1文字0.5円〜3円",
    difficulty: "初心者向け",
    features: ["在宅で働ける", "時間や場所を選ばない", "特別な資格は不要", "文章力が身につく"],
    howToStart: [
      "クラウドソーシングサイト（ランサーズ、クラウドワークスなど）に登録",
      "プロフィールを充実させ、ポートフォリオを作成",
      "小さな案件から始めて実績を積む",
      "専門分野を決めて特化すると単価アップが狙える",
    ],
    tools: ["Word", "Google Docs", "Grammarly（文章チェックツール）"],
    suitableFor: ["文章を書くのが好きな人", "コツコツ作業が得意な人", "在宅で働きたい人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "programming",
    title: "プログラミング・システム開発",
    description:
      "Webサイト制作、アプリ開発、システム構築などのプログラミング業務を請け負います。技術力を活かして高単価案件を獲得できます。",
    price: "時給3,000円〜10,000円",
    difficulty: "中級者〜上級者向け",
    features: ["高単価が期待できる", "リモートワークが一般的", "技術力が身につく", "将来独立の足がかりになる"],
    howToStart: [
      "プログラミング言語（JavaScript、Python、PHPなど）を学ぶ",
      "ポートフォリオサイトを作成",
      "GitHubでコードを公開して実績作り",
      "クラウドソーシングサイトやフリーランスエージェントに登録",
    ],
    tools: ["Visual Studio Code", "GitHub", "各種プログラミング言語"],
    suitableFor: ["IT・技術が好きな人", "論理的思考が得意な人", "新しい技術を学ぶのが好きな人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "youtuber",
    title: "YouTuber・動画クリエイター",
    description:
      "自分の専門知識や趣味、日常生活などを題材に動画を制作し、YouTubeなどの動画プラットフォームで公開して収益化します。",
    price: "再生数や登録者数に応じて変動（月数万円〜数百万円）",
    difficulty: "初心者〜中級者向け",
    features: [
      "自分の好きなことで収益化できる",
      "場所を選ばず活動できる",
      "ファンを獲得できる",
      "企業案件などの副次的な収入も期待できる",
    ],
    howToStart: [
      "YouTubeチャンネルを開設",
      "スマホでも撮影可能だが、徐々に機材を揃える",
      "定期的に動画を投稿し、チャンネル登録者を増やす",
      "広告収入の他、スポンサー契約やグッズ販売なども検討",
    ],
    tools: [
      "スマートフォンまたはカメラ",
      "動画編集ソフト（Adobe Premiere Pro、Final Cut Pro、無料ならDaVinci Resolve）",
    ],
    suitableFor: ["人前に出るのが好きな人", "特定の分野に詳しい人", "クリエイティブな活動が好きな人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "illustrator",
    title: "イラストレーター",
    description:
      "イラスト制作を請け負う仕事です。SNSやポートフォリオサイトで作品を発信し、クライアントから依頼を受けます。",
    price: "1点5,000円〜50,000円",
    difficulty: "中級者向け",
    features: [
      "自分の絵のスタイルを活かせる",
      "在宅で働ける",
      "作品が増えるとポートフォリオが充実する",
      "SNSでファンを獲得できる",
    ],
    howToStart: [
      "ポートフォリオサイトを作成（Pixiv、Behanceなど）",
      "SNS（Twitter、Instagramなど）で作品を発信",
      "クラウドソーシングサイトで小さな案件から始める",
      "ココナラなどのスキルマーケットにも出品",
    ],
    tools: [
      "iPad + Apple Pencil",
      "液タブ（Wacom, XP-Pen）",
      "イラスト制作ソフト（CLIP STUDIO PAINT, Adobe Illustrator）",
    ],
    suitableFor: ["絵を描くのが好きな人", "デザインセンスがある人", "創作活動が好きな人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "online-teacher",
    title: "オンライン講師",
    description:
      "語学、プログラミング、音楽など、自分の得意分野をオンラインで教える仕事です。個人レッスンやグループレッスンを提供します。",
    price: "時給2,000円〜5,000円",
    difficulty: "初心者〜中級者向け",
    features: [
      "自分の知識やスキルを活かせる",
      "オンラインで場所を選ばない",
      "人と関わる仕事が好きな人に向いている",
      "教えることで自分のスキルも向上する",
    ],
    howToStart: [
      "オンライン講師マッチングサービス（ストアカ、Cafetalk、Teachaなど）に登録",
      "自分の専門分野を明確にしたプロフィールを作成",
      "レッスン内容と料金を設定",
      "SNSやブログでも情報発信して集客",
    ],
    tools: ["Zoom", "Skype", "Google Meet", "教材作成ツール（Canva, PowerPointなど）"],
    suitableFor: ["教えるのが好きな人", "コミュニケーション能力が高い人", "特定の分野に詳しい人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "data-entry",
    title: "データ入力",
    description:
      "企業から依頼されたデータをExcelなどに入力する単純作業です。特別なスキルがなくても始められる副業として人気があります。",
    price: "時給1,000円〜2,000円",
    difficulty: "初心者向け",
    features: ["特別なスキルが不要", "在宅で働ける", "短時間から始められる", "コツコツ作業が得意な人に向いている"],
    howToStart: [
      "クラウドソーシングサイト（ランサーズ、クラウドワークスなど）に登録",
      "タイピングスキルを磨く",
      "Excel基本操作を習得",
      "評価を上げて単価の高い案件を目指す",
    ],
    tools: ["Excel", "Google スプレッドシート", "タイピング練習ソフト"],
    suitableFor: ["コツコツ作業が得意な人", "正確性が高い人", "短時間でも効率よく働きたい人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "social-media-manager",
    title: "SNS運用代行",
    description:
      "企業や個人のSNSアカウントの運用を代行する仕事です。投稿内容の企画、作成、スケジュール管理などを行います。",
    price: "月額2万円〜10万円",
    difficulty: "初心者〜中級者向け",
    features: [
      "SNSが好きな人に向いている",
      "在宅で働ける",
      "マーケティングスキルが身につく",
      "長期契約が多く安定しやすい",
    ],
    howToStart: [
      "SNSマーケティングの基礎知識を学ぶ",
      "自分のSNSアカウントで実績を作る",
      "ポートフォリオを作成",
      "クラウドソーシングやココナラで小さな案件から始める",
    ],
    tools: ["Buffer", "Hootsuite", "Canva", "各種SNSアプリ"],
    suitableFor: ["SNSが好きな人", "トレンドに敏感な人", "コミュニケーション能力が高い人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "translation",
    title: "翻訳・通訳",
    description:
      "外国語のテキストや音声を日本語に、または日本語を外国語に翻訳する仕事です。英語だけでなく、中国語やその他の言語も需要があります。",
    price: "1文字1円〜3円、時給3,000円〜10,000円",
    difficulty: "中級者〜上級者向け",
    features: [
      "語学力を活かせる",
      "在宅で働ける",
      "専門分野に特化すると高単価が期待できる",
      "グローバルな仕事に関われる",
    ],
    howToStart: [
      "語学力を証明する資格を取得（TOEIC, 英検など）",
      "翻訳会社に登録",
      "クラウドソーシングサイトで小さな案件から始める",
      "特定の分野（IT, 医療, 法律など）に特化すると有利",
    ],
    tools: ["翻訳支援ツール（SDL Trados, MemoQ）", "辞書ツール", "Google翻訳（参考用）"],
    suitableFor: ["語学力がある人", "正確な文章を書ける人", "異文化に興味がある人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "web-design",
    title: "Webデザイン",
    description:
      "企業や個人のWebサイトのデザインを制作する仕事です。ユーザビリティとビジュアルの両面から魅力的なサイトを作ります。",
    price: "1ページ1万円〜5万円、サイト全体で10万円〜50万円",
    difficulty: "中級者向け",
    features: [
      "クリエイティブなスキルを活かせる",
      "在宅で働ける",
      "ポートフォリオが充実する",
      "デザインスキルが向上する",
    ],
    howToStart: [
      "HTML, CSS, JavaScriptの基礎を学ぶ",
      "デザインツールの使い方を習得",
      "ポートフォリオサイトを作成",
      "クラウドソーシングサイトで小さな案件から始める",
    ],
    tools: ["Adobe XD", "Figma", "Photoshop", "Illustrator", "WordPress"],
    suitableFor: ["デザインが好きな人", "ビジュアルセンスがある人", "新しい技術を学ぶのが好きな人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  {
    id: "affiliate-marketing",
    title: "アフィリエイトマーケティング",
    description:
      "自分のブログやSNSで商品やサービスを紹介し、読者が購入すると報酬が得られる仕事です。特定のジャンルに特化すると効果的です。",
    price: "成果報酬型（月数千円〜数十万円）",
    difficulty: "初心者〜中級者向け",
    features: [
      "自分の好きなジャンルで始められる",
      "初期投資が少ない",
      "ストック型の収入が期待できる",
      "マーケティングスキルが身につく",
    ],
    howToStart: [
      "ブログを開設（WordPress, はてなブログなど）",
      "特定のジャンルに特化したコンテンツを作成",
      "ASP（A8.net, もしもアフィリエイトなど）に登録",
      "SEO対策を学び、検索流入を増やす",
    ],
    tools: ["WordPress", "Google Analytics", "SEO分析ツール（Ubersuggest, Ahrefs）"],
    suitableFor: ["文章を書くのが好きな人", "特定の分野に詳しい人", "マーケティングに興味がある人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29",
  },
  // --- 追加した副業 ---
  {
    id: "online-secretary",
    title: "オンライン秘書・事務代行",
    description:
      "企業や個人事業主の代わりに、メール対応、スケジュール管理、資料作成、データ入力などの事務作業をオンラインで行います。",
    price: "時給1,500円〜3,000円、月額3万円〜15万円",
    difficulty: "初心者向け",
    features: [
      "特別な資格が不要な場合が多い",
      "在宅で働ける",
      "基本的なPCスキルがあれば始めやすい",
      "様々な業種に関われる",
    ],
    howToStart: [
      "クラウドソーシングサイトやオンライン秘書専門のマッチングサイトに登録",
      "基本的なビジネスマナーやPCスキル（Word, Excel, PowerPoint）を確認",
      "コミュニケーション能力を高める",
      "小さな案件から始めて実績を積む",
    ],
    tools: ["Word", "Excel", "PowerPoint", "Google Workspace", "Slack", "Zoom"],
    suitableFor: ["コツコツ作業が得意な人", "サポートするのが好きな人", "PC作業に抵抗がない人", "コミュニケーションを丁寧にできる人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29", // 例：関連性の高いアフィリエイトがあれば変更
  },
  {
    id: "stock-photo",
    title: "写真販売・ストックフォト",
    description:
      "自分で撮影した風景、人物、モノなどの写真をストックフォトサイトを通じて販売します。写真が使われる度に収益が得られます。",
    price: "1枚あたり数十円〜数千円（販売サイトによる）",
    difficulty: "初心者〜中級者向け",
    features: [
      "趣味を収益化できる",
      "特別な機材がなくても始められる（スマホでも可能）",
      "一度アップロードすれば継続的な収入になる可能性がある",
      "自分のセンスを活かせる",
    ],
    howToStart: [
      "ストックフォトサイト（Adobe Stock, Shutterstock, PIXTAなど）に登録",
      "質の高い写真を撮影する練習",
      "需要のあるテーマやキーワードを研究",
      "規約に沿って写真をアップロード・申請",
    ],
    tools: ["カメラ（一眼レフ、ミラーレス、高性能スマホ）", "写真編集ソフト（Adobe Lightroom, Photoshop）", "ストックフォトサイトのアプリ/ウェブサイト"],
    suitableFor: ["写真を撮るのが好きな人", "視覚的な表現が得意な人", "コツコツと作品を増やせる人", "長期的な視点で取り組める人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29", // 例：関連性の高いアフィリエイトがあれば変更
  },
  {
    id: "online-consulting",
    title: "オンラインコンサルティング・コーチング",
    description:
      "自身の専門知識や経験（ビジネス、キャリア、ヘルスケアなど）を活かして、オンラインで個人や企業にアドバイスや指導を行います。",
    price: "時給5,000円〜30,000円以上",
    difficulty: "中級者〜上級者向け",
    features: [
      "専門性を活かして高単価を目指せる",
      "感謝されやりがいを感じやすい",
      "時間の融通が利きやすい",
      "自身の学びや成長にも繋がる",
    ],
    howToStart: [
      "自分の専門分野・ターゲットを明確にする",
      "実績や経験を棚卸し、信頼性を高める",
      "ブログやSNS、専門サイトで情報発信",
      "オンラインミーティングツールを使ってセッションを提供",
      "コーチングやコンサルティングの基礎を学ぶ",
    ],
    tools: ["Zoom", "Google Meet", "オンライン決済ツール（Stripe, PayPal）", "専門知識に関する書籍や情報源"],
    suitableFor: ["人に教えるのが好きな人", "専門知識・経験が豊富な人", "コミュニケーション能力が高い人", "課題解決に関心がある人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29", // 例：関連性の高いアフィリエイトがあれば変更
  },
  {
    id: "e-commerce",
    title: "物販・ECサイト運営",
    description:
      "インターネットを通じて商品を仕入れ、オンラインストアやフリマアプリなどで販売します。国内外からの仕入れやオリジナル商品の販売など形態は様々です。",
    price: "売上から経費を引いた利益（月数万円〜数百万円以上）",
    difficulty: "初心者〜中級者向け",
    features: [
      "ビジネスの基礎が学べる",
      "仕組みを作れば自動化も可能",
      "在庫管理やマーケティングなど幅広いスキルが身につく",
      "軌道に乗れば大きな収入になる可能性がある",
    ],
    howToStart: [
      "販売する商品ジャンルやターゲットを選定",
      "仕入れ先を探す（国内卸、海外サイト、クラウドファンディングなど）",
      "販売プラットフォームを決める（Shopify, BASE, メルカリ, Amazonなど）",
      "集客・販売戦略を立てる",
      "在庫管理や発送、顧客対応を行う",
    ],
    tools: ["ECサイト構築プラットフォーム", "仕入れサイト", "梱包材", "配送サービス", "販売管理ツール"],
    suitableFor: ["ビジネスやマーケティングに興味がある人", "リサーチが得意な人", "顧客対応を丁寧に行える人", "PDCAを回せる人"],
    affiliateLink: "https://px.a8.net/svt/ejp?a8mat=3H7MD8+DJM862+2OM2+U3W29", // 例：関連性の高いアフィリエイトがあれば変更
  },
];

// 診断ロジック
export function analyzeDiagnosis(type: string, answers: Record<number, string>) {
  // 各副業の適性スコアを計算
  const scores: Record<string, number> = {};

  // 初期化
  sideJobs.forEach((job) => {
    scores[job.id] = 0;
  });

  // スコアリングロジックの強化
  // 各質問に対して、各副業の適性度に合わせてスコアを加算する
  // スコアの重み付けを調整し、よりリアルな結果に近づける

  // 質問1: 性格
  switch (answers[1]) {
    case "a": // コツコツ作業
      scores["web-writer"] += 4;
      scores["data-entry"] += 5; // データ入力はコツコツ度が高い
      scores["programming"] += 2;
      scores["illustrator"] += 3;
      scores["online-secretary"] += 3; // 事務作業はコツコツ
      scores["stock-photo"] += 2; // 写真選定・加工はコツコツ
      scores["e-commerce"] += 2; // 在庫管理や発送はコツコツ
      break;
    case "b": // 人と話す
      scores["online-teacher"] += 5; // 直接的な対話が多い
      scores["youtuber"] += 4; // コミュニケーション能力が重要
      scores["social-media-manager"] += 3; // クライアントとのやり取り
      scores["online-consulting"] += 5; // コミュニケーションが中心
      scores["e-commerce"] += 2; // 顧客対応
      break;
    case "c": // 新しいこと
      scores["youtuber"] += 4; // トレンドを追う
      scores["affiliate-marketing"] += 3; // 新しい手法を学ぶ
      scores["programming"] += 4; // 技術の進化が早い
      scores["web-design"] += 3; // デザインの流行
      scores["stock-photo"] += 2; // 新しい撮影技術やテーマ
      scores["e-commerce"] += 3; // 新しい商品や販路
      break;
    case "d": // 計画的
      scores["web-design"] += 3; // 構成やスケジュール
      scores["programming"] += 3; // 設計やタスク管理
      scores["translation"] += 3; // スケジュール管理
      scores["online-secretary"] += 4; // スケジュール管理やタスク遂行
      scores["online-consulting"] += 3; // セッション計画
      scores["e-commerce"] += 4; // 販売計画、在庫計画
      break;
  }

  // 質問2: 時間
  switch (answers[2]) {
    case "a": // 平日夜
      scores["web-writer"] += 3;
      scores["data-entry"] += 4; // 短時間でできる案件が多い
      scores["social-media-manager"] += 3;
      scores["online-secretary"] += 3; // 隙間時間も活用しやすい
      break;
    case "b": // 週末
      scores["programming"] += 3; // まとまった時間が必要な場合も
      scores["web-design"] += 3;
      scores["illustrator"] += 3;
      scores["youtuber"] += 2; // 撮影や編集に時間がかかる
      scores["stock-photo"] += 3; // 撮影に出かけるなど
      break;
    case "c": // まとまった時間
      scores["youtuber"] += 4; // 企画、撮影、編集
      scores["programming"] += 4; // 開発作業
      scores["online-teacher"] += 3; // レッスン時間
      scores["web-design"] += 3; // デザイン作業
      scores["online-consulting"] += 4; // セッション時間、準備
      scores["e-commerce"] += 3; // 仕入れ、梱包、発送作業
      break;
    case "d": // 隙間時間
      scores["data-entry"] += 5; // 細かいタスクが多い
      scores["social-media-manager"] += 3; // 投稿予約など
      scores["web-writer"] += 3; // 短文案件やリサーチ
      scores["online-secretary"] += 4; // メール対応など
      scores["stock-photo"] += 2; // 写真の整理やアップロード
      scores["affiliate-marketing"] += 2; // 短時間の記事修正など
      break;
  }

  // 質問3: 重視すること
  switch (answers[3]) {
    case "a": // 安定収入
      scores["data-entry"] += 4; // 単純作業で案件が多い
      scores["web-writer"] += 3; // 継続案件がある
      scores["online-teacher"] += 3; // リピーターがつけば安定
      scores["social-media-manager"] += 3; // 長期契約が多い
      scores["online-secretary"] += 4; // 継続的な契約が多い
      break;
    case "b": // 高収入
      scores["programming"] += 5; // スキルが高ければ高単価
      scores["web-design"] += 4;
      scores["translation"] += 4; // 専門性があれば高単価
      scores["online-consulting"] += 5; // 専門性や実績で高単価
      scores["e-commerce"] += 4; // 軌道に乗れば大きく稼げる
      break;
    case "c": // スキルアップ
      scores["programming"] += 5; // 技術の習得が必須
      scores["web-design"] += 4; // 常に新しい技術やトレンド
      scores["youtuber"] += 3; // 企画力、編集スキルなど
      scores["affiliate-marketing"] += 3; // マーケティングスキル
      scores["online-consulting"] += 4; // 専門知識の深化
      scores["e-commerce"] += 4; // 幅広いビジネススキル
      break;
    case "d": // 趣味特技
      scores["illustrator"] += 5; // 絵を描くのが好き
      scores["youtuber"] += 4; // 好きなことを発信する
      scores["online-teacher"] += 3; // 得意なことを教える
      scores["stock-photo"] += 5; // 写真を撮るのが好き
      scores["online-consulting"] += 3; // 専門分野への情熱
      break;
  }

  // 質問4: スキル
  switch (answers[4]) {
    case "a": // 文章
      scores["web-writer"] += 5; // ライティングスキルが核
      scores["translation"] += 4; // 文章力が必要
      scores["affiliate-marketing"] += 3; // 記事作成
      scores["social-media-manager"] += 2; // 投稿文作成
      break;
    case "b": // デザイン
      scores["illustrator"] += 5; // イラスト制作
      scores["web-design"] += 5; // Webデザイン
      scores["youtuber"] += 2; // サムネイルやテロップ
      scores["stock-photo"] += 3; // 構図やレタッチ
      break;
    case "c": // プログラミング
      scores["programming"] += 5; // 必須スキル
      scores["web-design"] += 3; // フロントエンド開発
      scores["data-entry"] += 1; // Excel関数など（簡易的な関連）
      scores["e-commerce"] += 2; // プラットフォームの設定など
      break;
    case "d": // 特になし
      scores["data-entry"] += 4; // 特殊スキル不要
      scores["social-media-manager"] += 2; // SNS経験があれば可
      scores["affiliate-marketing"] += 1; // 知識は後からでも
      scores["online-secretary"] += 3; // 基本的なPC操作から
      scores["stock-photo"] += 2; // スマホでも始められる
      break;
  }

  // 質問5: 不安
  // 不安要素が少ない副業、または不安解消のための情報が多い副業にスコアを加算
  switch (answers[5]) {
    case "a": // 時間確保
      scores["data-entry"] += 3; // 短時間案件が多い
      scores["web-writer"] += 2; // 納期調整が可能
      scores["social-media-manager"] += 2; // スケジュール管理で対応
      scores["online-secretary"] += 3; // 柔軟な働き方が可能
      scores["stock-photo"] += 2; // 自分のペースでできる
      break;
    case "b": // スキル知識
      scores["data-entry"] += 4; // 覚えることが少ない
      scores["online-secretary"] += 3; // 基本的なPCスキルから
      scores["affiliate-marketing"] += 2; // 学びながらできる
      scores["web-writer"] += 2; // マニュアルがある場合も
      break;
    case "c": // 始め方
      scores["data-entry"] += 3; // クラウドソーシングで簡単に見つかる
      scores["web-writer"] += 3; // クラウドソーシングで簡単に見つかる
      scores["online-teacher"] += 2; // マッチングサイトがある
      scores["social-media-manager"] += 2; // 経験があれば始めやすい
      scores["online-secretary"] += 3; // マッチングサイトがある
      scores["stock-photo"] += 3; // 登録サイトがある
      scores["e-commerce"] += 2; // フリマアプリから小さく始める
      break;
    case "d": // 継続
      scores["data-entry"] += 2; // 単純作業で続けやすい
      scores["web-writer"] += 2; // 継続案件があれば安定
      scores["social-media-manager"] += 3; // 長期契約が多い
      scores["online-secretary"] += 3; // 継続的な契約が多い
      break;
  }

  // 詳細診断の場合の追加質問（6-15）
  if (type === "detailed") {
    // 質問6: 職業タイプ
    switch (answers[6]) {
      case "a": // デスクワーク
        scores["programming"] += 3;
        scores["web-writer"] += 3;
        scores["web-design"] += 3;
        scores["data-entry"] += 2;
        scores["online-secretary"] += 4; // 事務作業
        scores["translation"] += 2;
        break;
      case "b": // 営業・接客
        scores["online-teacher"] += 4;
        scores["youtuber"] += 3;
        scores["social-media-manager"] += 3; // 対人スキルが活きる
        scores["online-consulting"] += 4;
        scores["e-commerce"] += 2; // 顧客対応
        break;
      case "c": // フリーランス
        scores["programming"] += 3;
        scores["web-design"] += 3;
        scores["affiliate-marketing"] += 2; // 独立志向
        scores["illustrator"] += 2;
        scores["online-consulting"] += 3;
        break;
      case "d": // 学生・主婦
        scores["data-entry"] += 4; // 時間調整がしやすい
        scores["web-writer"] += 3; // 在宅で可能
        scores["social-media-manager"] += 3; // SNS利用経験
        scores["online-secretary"] += 4; // 在宅で可能
        scores["stock-photo"] += 3; // 自分のペースで
        scores["e-commerce"] += 2; // フリマアプリなどから
        break;
    }

    // 質問7: 目的
    switch (answers[7]) {
      case "a": // 収入アップ
        scores["programming"] += 3;
        scores["web-design"] += 3;
        scores["translation"] += 3;
        scores["online-consulting"] += 4; // 高収入が見込める
        scores["e-commerce"] += 4; // 努力次第で大きく
        break;
      case "b": // 独立・転職
        scores["programming"] += 4; // 本業にしやすい
        scores["web-design"] += 3; // 本業にしやすい
        scores["youtuber"] += 3; // 影響力を持てば
        scores["online-consulting"] += 4; // 独立しやすい
        scores["e-commerce"] += 4; // 独立開業の形
        break;
      case "c": // 趣味特技
        scores["illustrator"] += 5;
        scores["youtuber"] += 4;
        scores["online-teacher"] += 4;
        scores["stock-photo"] += 5;
        break;
      case "d": // 新しいスキル
        scores["programming"] += 4;
        scores["web-design"] += 4;
        scores["affiliate-marketing"] += 3;
        scores["youtuber"] += 3;
        scores["online-consulting"] += 3;
        scores["e-commerce"] += 3;
        break;
    }

    // 質問8: 働き方
    switch (answers[8]) {
      case "a": // 完全在宅
        scores["web-writer"] += 5;
        scores["programming"] += 4;
        scores["data-entry"] += 4;
        scores["translation"] += 4;
        scores["online-secretary"] += 5;
        scores["stock-photo"] += 3; // 撮影は外の場合も
        scores["online-consulting"] += 4; // オンラインセッション
        scores["e-commerce"] += 3; // 発送作業
        break;
      case "b": // 外出して人と関わる
        scores["online-teacher"] += 3; // 対面レッスンなど
        scores["youtuber"] += 3; // イベント参加など
        scores["stock-photo"] += 3; // 撮影
        scores["online-consulting"] += 3; // 対面コンサルなど
        break;
      case "c": // ミックス
        scores["web-design"] += 3;
        scores["translation"] += 3;
        scores["illustrator"] += 3;
        scores["social-media-manager"] += 2;
        scores["e-commerce"] += 4; // 仕入れや発送、イベント出店など
        break;
      case "d": // 自由に
        scores["youtuber"] += 4;
        scores["affiliate-marketing"] += 4;
        scores["stock-photo"] += 4;
        scores["online-consulting"] += 3;
        break;
    }

    // 質問9: コミュニケーション
    switch (answers[9]) {
      case "a": // 得意
        scores["online-teacher"] += 5;
        scores["youtuber"] += 5;
        scores["social-media-manager"] += 4;
        scores["online-consulting"] += 5;
        break;
      case "b": // 必要に応じて
        scores["web-design"] += 3;
        scores["translation"] += 3;
        scores["programming"] += 3;
        scores["online-secretary"] += 4; // クライアントとのやり取り
        scores["e-commerce"] += 3; // 顧客対応
        break;
      case "c": // 得意ではない
        scores["web-writer"] += 3;
        scores["data-entry"] += 4;
        scores["illustrator"] += 4;
        scores["stock-photo"] += 3; // 写真は作品で語る
        break;
      case "d": // 一人で黙々
        scores["data-entry"] += 5;
        scores["web-writer"] += 4;
        scores["programming"] += 3;
        scores["illustrator"] += 4;
        scores["stock-photo"] += 4;
        break;
    }

    // 質問10: 英語力
    switch (answers[10]) {
      case "a": // ビジネスレベル
        scores["translation"] += 5;
        scores["online-teacher"] += 3; // 語学講師
        scores["programming"] += 3; // 海外の情報収集
        scores["online-consulting"] += 2; // 海外クライアント
        scores["e-commerce"] += 3; // 海外仕入れ、海外販売
        break;
      case "b": // 日常会話
        scores["translation"] += 3;
        scores["online-teacher"] += 3;
        scores["social-media-manager"] += 2;
        scores["online-secretary"] += 2; // 外資系クライアントなど
        break;
      case "c": // 読み書き
        scores["web-writer"] += 2; // 海外サイトを参考
        scores["programming"] += 3;
        scores["data-entry"] += 1;
        scores["affiliate-marketing"] += 2; // 海外の情報収集
        break;
      case "d": // ほとんどできない
        scores["illustrator"] += 3;
        scores["data-entry"] += 4;
        scores["youtuber"] += 3; // 日本語でコンテンツ作成
        scores["online-secretary"] += 3; // 国内クライアント向け
        scores["stock-photo"] += 3; // 写真は言語を問わない
        break;
    }

    // 質問11: パソコンスキル
    switch (answers[11]) {
      case "a": // プログラミング・デザイン
        scores["programming"] += 5;
        scores["web-design"] += 5;
        scores["illustrator"] += 4;
        scores["youtuber"] += 3; // 編集ソフト
        scores["stock-photo"] += 3; // 編集ソフト
        break;
      case "b": // オフィスソフト
        scores["web-writer"] += 3;
        scores["data-entry"] += 4;
        scores["social-media-manager"] += 3;
        scores["online-secretary"] += 5; // 事務作業に必須
        scores["translation"] += 2; // 文書作成
        scores["online-consulting"] += 3; // 資料作成
        scores["e-commerce"] += 3; // 在庫・売上管理
        break;
      case "c": // 基本操作
        scores["data-entry"] += 3;
        scores["web-writer"] += 2;
        scores["affiliate-marketing"] += 2;
        scores["online-secretary"] += 3;
        scores["stock-photo"] += 2;
        scores["e-commerce"] += 2;
        break;
      case "d": // 得意ではない
        scores["youtuber"] += 2; // スマホ編集などから
        scores["online-teacher"] += 2; // オンライン会議ツールの操作のみ
        scores["data-entry"] += 1; // 少しずつ慣れる
        scores["stock-photo"] += 2; // スマホ撮影・アプリ編集
        break;
    }

    // 質問12: 初期投資
    switch (answers[12]) {
      case "a": // ほとんどかけられない
        scores["data-entry"] += 5; // PCとネット環境があればOK
        scores["web-writer"] += 4; // PCとネット環境があればOK
        scores["social-media-manager"] += 3; // スマホからでも可能
        scores["online-secretary"] += 4; // PCとネット環境があればOK
        scores["stock-photo"] += 3; // スマホからでも可能
        break;
      case "b": // 5万円程度
        scores["affiliate-marketing"] += 3; // サーバー代、テーマ代など
        scores["web-writer"] += 3; // 有料ツールなど
        scores["online-teacher"] += 3; // マイク、Webカメラなど
        scores["e-commerce"] += 3; // 少額の仕入れ
        break;
      case "c": // 10万円程度
        scores["illustrator"] += 3; // 液タブやソフト代
        scores["web-design"] += 3; // ソフト代
        scores["youtuber"] += 3; // カメラ、照明など
        scores["programming"] += 2; // 高性能PC
        scores["stock-photo"] += 4; // ミラーレスカメラなど
        scores["e-commerce"] += 4; // ある程度の仕入れ
        break;
      case "d": // 10万円以上
        scores["programming"] += 3; // 高性能PC、学習費用
        scores["web-design"] += 3; // 高性能PC、学習費用
        scores["youtuber"] += 4; // 高性能カメラ、PC、編集ソフト
        scores["illustrator"] += 4; // 高性能液タブ、PC、ソフト
        scores["translation"] += 2; // CATツールなど
        scores["online-consulting"] += 2; // 集客広告費など
        scores["e-commerce"] += 4; // 大規模な仕入れ、ECサイト構築費用
        break;
    }

    // 質問13: 期間
    switch (answers[13]) {
      case "a": // 短期間で稼ぎたい
        scores["data-entry"] += 4; // 単発案件が多い
        scores["web-writer"] += 3; // 単発案件がある
        scores["translation"] += 3; // 単発案件がある
        scores["online-secretary"] += 3; // 単発・短期契約がある
        break;
      case "b": // 中期的に安定させたい
        scores["web-writer"] += 3;
        scores["social-media-manager"] += 4; // 長期契約
        scores["online-teacher"] += 3; // リピーター
        scores["online-secretary"] += 4; // 継続契約
        scores["translation"] += 2; // 継続案件
        break;
      case "c": // 長期的に育てたい
        scores["programming"] += 4; // スキルを磨きながら
        scores["web-design"] += 4; // スキルを磨きながら
        scores["affiliate-marketing"] += 4; // 資産構築
        scores["youtuber"] += 3; // チャンネル成長
        scores["illustrator"] += 3; // ポートフォリオ充実
        scores["stock-photo"] += 4; // 写真資産を増やす
        scores["online-consulting"] += 3; // 実績と評判
        scores["e-commerce"] += 4; // 事業拡大
        break;
      case "d": // 本業にしたい
        scores["programming"] += 5; // 独立しやすい
        scores["web-design"] += 4; // 独立しやすい
        scores["youtuber"] += 4; // 影響力で本業に
        scores["online-consulting"] += 5; // 独立しやすい
        scores["e-commerce"] += 5; // 事業として成立
        break;
    }

    // 質問14: 月収目標
    switch (answers[14]) {
      case "a": // 3万円未満
        scores["data-entry"] += 4;
        scores["web-writer"] += 3;
        scores["social-media-manager"] += 2;
        scores["online-secretary"] += 3;
        scores["stock-photo"] += 2; // 最初は少ない
        break;
      case "b": // 3万円〜5万円
        scores["web-writer"] += 4;
        scores["social-media-manager"] += 3;
        scores["online-teacher"] += 2;
        scores["online-secretary"] += 4;
        scores["affiliate-marketing"] += 2;
        break;
      case "c": // 5万円〜10万円
        scores["programming"] += 3;
        scores["web-design"] += 3;
        scores["translation"] += 3;
        scores["illustrator"] += 2;
        scores["online-teacher"] += 3;
        scores["e-commerce"] += 3;
        break;
      case "d": // 10万円以上
        scores["programming"] += 5;
        scores["web-design"] += 4;
        scores["youtuber"] += 4;
        scores["translation"] += 4;
        scores["online-consulting"] += 5;
        scores["e-commerce"] += 5;
        break;
    }

    // 質問15: 興味分野
    switch (answers[15]) {
      case "a": // IT・テクノロジー
        scores["programming"] += 5;
        scores["web-design"] += 4;
        scores["data-entry"] += 2; // IT企業のデータ入力など
        scores["online-secretary"] += 2; // IT系企業のサポート
        break;
      case "b": // クリエイティブ
        scores["illustrator"] += 5;
        scores["web-design"] += 4;
        scores["youtuber"] += 4;
        scores["stock-photo"] += 5;
        scores["web-writer"] += 2; // 表現力
        break;
      case "c": // ビジネス
        scores["affiliate-marketing"] += 5;
        scores["social-media-manager"] += 4;
        scores["web-writer"] += 3; // ビジネス系記事
        scores["online-secretary"] += 4; // ビジネスのサポート
        scores["online-consulting"] += 5; // ビジネス課題解決
        scores["e-commerce"] += 5; // ビジネスそのもの
        scores["programming"] += 2; // ビジネス系システム開発
        scores["web-design"] += 2; // ビジネスサイト制作
        break;
      case "d": // 教育
        scores["online-teacher"] += 5;
        scores["youtuber"] += 2; // 教育系チャンネル
        scores["web-writer"] += 2; // 学習系記事
        scores["online-consulting"] += 3; // コーチングなど
        break;
    }
  }

  // スコアの高い順にソート
  const sortedJobs = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => sideJobs.find((job) => job.id === id))
    .filter(Boolean); // 存在しないIDを除外

  // 上位3つの副業を返す
  return sortedJobs.slice(0, 3);
}
