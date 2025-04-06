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
    tools: ["Visual Studio Code", "GitHub", "Stack Overflow"],
    suitableFor: ["IT・技術が好きな人", "論理的思考が得意な人", "新しい技術を学ぶのが好きな人"],
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
  },
]

// 診断ロジック
export function analyzeDiagnosis(type: string, answers: Record<number, string>) {
  // 各副業の適性スコアを計算
  const scores: Record<string, number> = {}

  // 初期化
  sideJobs.forEach((job) => {
    scores[job.id] = 0
  })

  // 簡単診断の場合
  if (type === "simple") {
    // 質問1: 性格
    if (answers[1] === "a") {
      // コツコツ作業
      scores["web-writer"] += 3
      scores["data-entry"] += 3
      scores["programming"] += 2
      scores["illustrator"] += 2
    } else if (answers[1] === "b") {
      // 人と話す
      scores["online-teacher"] += 3
      scores["youtuber"] += 3
      scores["social-media-manager"] += 2
    } else if (answers[1] === "c") {
      // 新しいこと
      scores["youtuber"] += 3
      scores["affiliate-marketing"] += 2
      scores["programming"] += 2
    } else if (answers[1] === "d") {
      // 計画的
      scores["web-design"] += 2
      scores["programming"] += 2
      scores["translation"] += 2
    }

    // 質問2: 時間
    if (answers[2] === "a") {
      // 平日夜
      scores["web-writer"] += 2
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
    } else if (answers[2] === "b") {
      // 週末
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["illustrator"] += 2
    } else if (answers[2] === "c") {
      // まとまった時間
      scores["youtuber"] += 3
      scores["programming"] += 2
      scores["online-teacher"] += 2
    } else if (answers[2] === "d") {
      // 隙間時間
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
      scores["web-writer"] += 2
    }

    // 質問3: 重視すること
    if (answers[3] === "a") {
      // 安定収入
      scores["web-writer"] += 2
      scores["data-entry"] += 3
      scores["online-teacher"] += 2
    } else if (answers[3] === "b") {
      // 高収入
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["translation"] += 2
    } else if (answers[3] === "c") {
      // スキルアップ
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["youtuber"] += 2
    } else if (answers[3] === "d") {
      // 趣味特技
      scores["illustrator"] += 3
      scores["youtuber"] += 3
      scores["online-teacher"] += 2
    }

    // 質問4: スキル
    if (answers[4] === "a") {
      // 文章
      scores["web-writer"] += 3
      scores["translation"] += 2
      scores["affiliate-marketing"] += 2
    } else if (answers[4] === "b") {
      // デザイン
      scores["illustrator"] += 3
      scores["web-design"] += 3
      scores["youtuber"] += 1
    } else if (answers[4] === "c") {
      // プログラミング
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["data-entry"] += 1
    } else if (answers[4] === "d") {
      // 特になし
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
      scores["affiliate-marketing"] += 1
    }

    // 質問5: 不安
    if (answers[5] === "a") {
      // 時間確保
      scores["data-entry"] += 3
      scores["web-writer"] += 2
      scores["social-media-manager"] += 2
    } else if (answers[5] === "b") {
      // スキル知識
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
      scores["affiliate-marketing"] += 1
    } else if (answers[5] === "c") {
      // 始め方
      scores["data-entry"] += 2
      scores["web-writer"] += 2
      scores["online-teacher"] += 1
    } else if (answers[5] === "d") {
      // 継続
      scores["web-writer"] += 2
      scores["data-entry"] += 2
      scores["social-media-manager"] += 2
    }
  } else if (type === "detailed") {
    // 簡単診断と同じロジック（質問1-5）
    // 質問1: 性格
    if (answers[1] === "a") {
      // コツコツ作業
      scores["web-writer"] += 3
      scores["data-entry"] += 3
      scores["programming"] += 2
      scores["illustrator"] += 2
    } else if (answers[1] === "b") {
      // 人と話す
      scores["online-teacher"] += 3
      scores["youtuber"] += 3
      scores["social-media-manager"] += 2
    } else if (answers[1] === "c") {
      // 新しいこと
      scores["youtuber"] += 3
      scores["affiliate-marketing"] += 2
      scores["programming"] += 2
    } else if (answers[1] === "d") {
      // 計画的
      scores["web-design"] += 2
      scores["programming"] += 2
      scores["translation"] += 2
    }

    // 質問2: 時間
    if (answers[2] === "a") {
      // 平日夜
      scores["web-writer"] += 2
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
    } else if (answers[2] === "b") {
      // 週末
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["illustrator"] += 2
    } else if (answers[2] === "c") {
      // まとまった時間
      scores["youtuber"] += 3
      scores["programming"] += 2
      scores["online-teacher"] += 2
    } else if (answers[2] === "d") {
      // 隙間時間
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
      scores["web-writer"] += 2
    }

    // 質問3: 重視すること
    if (answers[3] === "a") {
      // 安定収入
      scores["web-writer"] += 2
      scores["data-entry"] += 3
      scores["online-teacher"] += 2
    } else if (answers[3] === "b") {
      // 高収入
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["translation"] += 2
    } else if (answers[3] === "c") {
      // スキルアップ
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["youtuber"] += 2
    } else if (answers[3] === "d") {
      // 趣味特技
      scores["illustrator"] += 3
      scores["youtuber"] += 3
      scores["online-teacher"] += 2
    }

    // 質問4: スキル
    if (answers[4] === "a") {
      // 文章
      scores["web-writer"] += 3
      scores["translation"] += 2
      scores["affiliate-marketing"] += 2
    } else if (answers[4] === "b") {
      // デザイン
      scores["illustrator"] += 3
      scores["web-design"] += 3
      scores["youtuber"] += 1
    } else if (answers[4] === "c") {
      // プログラミング
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["data-entry"] += 1
    } else if (answers[4] === "d") {
      // 特になし
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
      scores["affiliate-marketing"] += 1
    }

    // 質問5: 不安
    if (answers[5] === "a") {
      // 時間確保
      scores["data-entry"] += 3
      scores["web-writer"] += 2
      scores["social-media-manager"] += 2
    } else if (answers[5] === "b") {
      // スキル知識
      scores["data-entry"] += 3
      scores["social-media-manager"] += 2
      scores["affiliate-marketing"] += 1
    } else if (answers[5] === "c") {
      // 始め方
      scores["data-entry"] += 2
      scores["web-writer"] += 2
      scores["online-teacher"] += 1
    } else if (answers[5] === "d") {
      // 継続
      scores["web-writer"] += 2
      scores["data-entry"] += 2
      scores["social-media-manager"] += 2
    }

    // 詳細診断の追加質問（6-15）
    // 質問6: 職業タイプ
    if (answers[6] === "a") {
      // デスクワーク
      scores["programming"] += 2
      scores["web-writer"] += 2
      scores["web-design"] += 2
    } else if (answers[6] === "b") {
      // 営業・接客
      scores["online-teacher"] += 2
      scores["youtuber"] += 2
      scores["social-media-manager"] += 2
    } else if (answers[6] === "c") {
      // フリーランス
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["affiliate-marketing"] += 2
    } else if (answers[6] === "d") {
      // 学生・主婦
      scores["data-entry"] += 2
      scores["web-writer"] += 2
      scores["social-media-manager"] += 2
    }

    // 質問7: 目的
    if (answers[7] === "a") {
      // 収入アップ
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["translation"] += 2
    } else if (answers[7] === "b") {
      // 独立・転職
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["youtuber"] += 2
    } else if (answers[7] === "c") {
      // 趣味特技
      scores["illustrator"] += 3
      scores["youtuber"] += 2
      scores["online-teacher"] += 2
    } else if (answers[7] === "d") {
      // 新しいスキル
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["affiliate-marketing"] += 2
    }

    // 質問8: 働き方
    if (answers[8] === "a") {
      // 完全在宅
      scores["web-writer"] += 3
      scores["programming"] += 2
      scores["data-entry"] += 2
    } else if (answers[8] === "b") {
      // 外出して人と関わる
      scores["online-teacher"] += 3
      scores["youtuber"] += 2
      scores["social-media-manager"] += 2
    } else if (answers[8] === "c") {
      // ミックス
      scores["web-design"] += 2
      scores["translation"] += 2
      scores["illustrator"] += 2
    } else if (answers[8] === "d") {
      // 自由に
      scores["youtuber"] += 3
      scores["affiliate-marketing"] += 3
      scores["social-media-manager"] += 2
    }

    // 質問9: コミュニケーション
    if (answers[9] === "a") {
      // 得意
      scores["online-teacher"] += 3
      scores["youtuber"] += 3
      scores["social-media-manager"] += 2
    } else if (answers[9] === "b") {
      // 必要に応じて
      scores["web-design"] += 2
      scores["translation"] += 2
      scores["programming"] += 2
    } else if (answers[9] === "c") {
      // 得意ではない
      scores["web-writer"] += 2
      scores["data-entry"] += 3
      scores["illustrator"] += 2
    } else if (answers[9] === "d") {
      // 一人で黙々
      scores["data-entry"] += 3
      scores["web-writer"] += 3
      scores["programming"] += 2
    }

    // 質問10: 英語力
    if (answers[10] === "a") {
      // ビジネスレベル
      scores["translation"] += 3
      scores["online-teacher"] += 2
      scores["programming"] += 2
    } else if (answers[10] === "b") {
      // 日常会話
      scores["translation"] += 2
      scores["online-teacher"] += 2
      scores["social-media-manager"] += 1
    } else if (answers[10] === "c") {
      // 読み書き
      scores["web-writer"] += 1
      scores["programming"] += 2
      scores["data-entry"] += 1
    } else if (answers[10] === "d") {
      // ほとんどできない
      scores["illustrator"] += 1
      scores["data-entry"] += 2
      scores["youtuber"] += 1
    }

    // 質問11: パソコンスキル
    if (answers[11] === "a") {
      // プログラミング・デザイン
      scores["programming"] += 3
      scores["web-design"] += 3
      scores["illustrator"] += 2
    } else if (answers[11] === "b") {
      // オフィスソフト
      scores["web-writer"] += 2
      scores["data-entry"] += 2
      scores["social-media-manager"] += 2
    } else if (answers[11] === "c") {
      // 基本操作
      scores["data-entry"] += 3
      scores["web-writer"] += 2
      scores["affiliate-marketing"] += 1
    } else if (answers[11] === "d") {
      // 得意ではない
      scores["youtuber"] += 1
      scores["online-teacher"] += 1
      scores["data-entry"] += 1
    }

    // 質問12: 初期投資
    if (answers[12] === "a") {
      // ほとんどかけられない
      scores["data-entry"] += 3
      scores["web-writer"] += 3
      scores["social-media-manager"] += 2
    } else if (answers[12] === "b") {
      // 5万円程度
      scores["affiliate-marketing"] += 2
      scores["web-writer"] += 2
      scores["online-teacher"] += 2
    } else if (answers[12] === "c") {
      // 10万円程度
      scores["illustrator"] += 2
      scores["web-design"] += 2
      scores["youtuber"] += 2
    } else if (answers[12] === "d") {
      // 10万円以上
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["youtuber"] += 3
    }

    // 質問13: 期間
    if (answers[13] === "a") {
      // 短期間
      scores["data-entry"] += 3
      scores["web-writer"] += 2
      scores["translation"] += 2
    } else if (answers[13] === "b") {
      // 中期的
      scores["web-writer"] += 2
      scores["social-media-manager"] += 2
      scores["online-teacher"] += 2
    } else if (answers[13] === "c") {
      // 長期的
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["affiliate-marketing"] += 2
    } else if (answers[13] === "d") {
      // 本業に
      scores["programming"] += 3
      scores["youtuber"] += 3
      scores["web-design"] += 2
    }

    // 質問14: 月収
    if (answers[14] === "a") {
      // 3万円未満
      scores["data-entry"] += 3
      scores["web-writer"] += 2
      scores["social-media-manager"] += 1
    } else if (answers[14] === "b") {
      // 3万円〜5万円
      scores["web-writer"] += 3
      scores["social-media-manager"] += 2
      scores["affiliate-marketing"] += 1
    } else if (answers[14] === "c") {
      // 5万円〜10万円
      scores["programming"] += 2
      scores["web-design"] += 2
      scores["translation"] += 2
    } else if (answers[14] === "d") {
      // 10万円以上
      scores["programming"] += 3
      scores["youtuber"] += 3
      scores["web-design"] += 2
    }

    // 質問15: 興味分野
    if (answers[15] === "a") {
      // IT・テクノロジー
      scores["programming"] += 3
      scores["web-design"] += 2
      scores["data-entry"] += 1
    } else if (answers[15] === "b") {
      // クリエイティブ
      scores["illustrator"] += 3
      scores["web-design"] += 2
      scores["youtuber"] += 2
    } else if (answers[15] === "c") {
      // ビジネス
      scores["affiliate-marketing"] += 3
      scores["social-media-manager"] += 2
      scores["web-writer"] += 1
    } else if (answers[15] === "d") {
      // 教育
      scores["online-teacher"] += 3
      scores["youtuber"] += 1
      scores["web-writer"] += 1
    }
  }

  // スコアの高い順にソート
  const sortedJobs = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => sideJobs.find((job) => job.id === id))
    .filter(Boolean)

  // 上位3つの副業を返す
  return sortedJobs.slice(0, 3)
}

