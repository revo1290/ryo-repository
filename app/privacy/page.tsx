"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
          <p className="mb-4">
            本サイトでは、個人情報の保護を重視し、以下のとおりプライバシーポリシーを定めます。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. 個人情報の取得について</h2>
          <p className="mb-4">
            本サイトでは、お問い合わせや診断結果の保存などの際に、必要に応じて名前やメールアドレスなどの個人情報を取得することがあります。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. 個人情報の利用目的</h2>
          <p className="mb-4">
            取得した個人情報は、お問い合わせ対応、診断機能の改善、お知らせの配信などに利用します。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. 個人情報の第三者提供について</h2>
          <p className="mb-4">
            取得した個人情報は、法令に基づく場合を除き、第三者に提供することはありません。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookieについて</h2>
          <p className="mb-4">
            利便性向上やアクセス解析のため、Cookieを使用する場合があります。ブラウザの設定により拒否することも可能です。
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. 改定について</h2>
          <p className="mb-4">
            本ポリシーは必要に応じて予告なく改定することがあります。変更後の内容は本ページにて掲載いたします。
          </p>

          <p className="mt-8 text-sm text-gray-500">最終更新日: 2025年4月23日</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
