// 副業の種類と詳細情報を別ファイルからインポート
import { sideJobs } from "@/lib/data/sideJobs";

// 診断ロジック
export function analyzeDiagnosis(
  type: string,
  answers: Record<number, string>
) {
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
      scores["content-creator"] += 3; // 計画的なコンテンツ制作に適している
      scores["web-writer"] += 4;
      scores["data-entry"] += 5; // データ入力はコツコツ度が高い
      scores["programming"] += 2;
      scores["illustrator"] += 3;
      scores["online-secretary"] += 3; // 事務作業はコツコツ
      scores["stock-photo"] += 2; // 写真選定・加工はコツコツ
      scores["e-commerce"] += 3; // 在庫管理や発送はコツコツ
      scores["affiliate-marketing"] += 2;
      break;
    case "b": // 人と話す
      scores["content-creator"] += 4; // 人との交流を活かしたコンテンツ制作
      scores["online-teacher"] += 5; // 直接的な対話が多い
      scores["youtuber"] += 4; // コミュニケーション能力が重要
      scores["social-media-manager"] += 3; // クライアントとのやり取り
      scores["online-consulting"] += 5; // コミュニケーションが中心
      scores["e-commerce"] += 2; // 顧客対応
      break;
    case "c": // 新しいこと
      scores["content-creator"] += 5; // 新しいテーマやトレンドを取り入れる
      scores["youtuber"] += 4; // トレンドを追う
      scores["affiliate-marketing"] += 3; // 新しい手法を学ぶ
      scores["programming"] += 4; // 技術の進化が早い
      scores["web-design"] += 3; // デザインの流行
      scores["stock-photo"] += 2; // 新しい撮影技術やテーマ
      scores["e-commerce"] += 3; // 新しい商品や販路
      break;
    case "d": // 計画的
      scores["content-creator"] += 4; // 計画的なコンテンツ制作
      scores["web-design"] += 3; // 構成やスケジュール
      scores["programming"] += 3; // 設計やタスク管理
      scores["translation"] += 3; // スケジュール管理
      scores["online-secretary"] += 4; // スケジュール管理やタスク遂行
      scores["online-consulting"] += 3; // セッション計画
      scores["e-commerce"] += 4; // 販売計画、在庫計画
      scores["affiliate-marketing"] += 4;
      break;
  }

  // 質問2: 時間
  switch (answers[2]) {
    case "a": // 平日夜
      scores["web-writer"] += 3;
      scores["data-entry"] += 4; // 短時間でできる案件が多い
      scores["social-media-manager"] += 3;
      scores["online-secretary"] += 3; // 隙間時間も活用しやすい
      scores["affiliate-marketing"] += 1;
      break;
    case "b": // 週末
      scores["programming"] += 3; // まとまった時間が必要な場合も
      scores["web-design"] += 3;
      scores["illustrator"] += 3;
      scores["youtuber"] += 2; // 撮影や編集に時間がかかる
      scores["stock-photo"] += 3; // 撮影に出かけるなど
      scores["affiliate-marketing"] += 1;
      break;
    case "c": // まとまった時間
      scores["youtuber"] += 4; // 企画、撮影、編集
      scores["content-creator"] += 4;
      scores["programming"] += 4; // 開発作業
      scores["online-teacher"] += 3; // レッスン時間
      scores["web-design"] += 3; // デザイン作業
      scores["online-consulting"] += 4; // セッション時間、準備
      scores["e-commerce"] += 3; // 仕入れ、梱包、発送作業
      scores["affiliate-marketing"] += 2;
      break;
    case "d": // 隙間時間
      scores["data-entry"] += 5; // 細かいタスクが多い
      scores["social-media-manager"] += 3; // 投稿予約など
      scores["web-writer"] += 3; // 短文案件やリサーチ
      scores["online-secretary"] += 4; // メール対応など
      scores["stock-photo"] += 2; // 写真の整理やアップロード
      scores["affiliate-marketing"] += 2; // 短時間の記事修正など
      scores["affiliate-marketing"] += 2;
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
      scores["affiliate-marketing"] += 3;
      break;
    case "b": // 高収入
      scores["programming"] += 5; // スキルが高ければ高単価
      scores["web-design"] += 4;
      scores["translation"] += 4; // 専門性があれば高単価
      scores["online-consulting"] += 5; // 専門性や実績で高単価
      scores["e-commerce"] += 4; // 軌道に乗れば大きな収入になる可能性がある
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
      scores["affiliate-marketing"] += 2; // 知識は後からでも
      scores["online-secretary"] += 3; // 基本的なPC操作から
      scores["stock-photo"] += 2; // スマホでも始められる
      break;
  }

  // 質問5: 不安
  // 不安要素が少ない副業、または不安解消のための情報が多い副業にスコアを加算
  switch (answers[5]) {
    case "a": // 時間確保
      scores["content-creator"] += 3;
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
      scores["affiliate-marketing"] += 2;
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
        scores["content-creator"] += 4;
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
        scores["content-creator"] += 2;
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
        scores["content-creator"] += 2;
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
        scores["content-creator"] += 4;
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
