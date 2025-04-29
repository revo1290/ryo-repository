import Link from "next/link"
import { BriefcaseBusiness } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: '#444' }}>
          営業に興味がある方におすすめのサービスをピックアップしてみました。
        </p>
        <a
          href="https://px.a8.net/svt/ejp?a8mat=453G7N+1JYYL6+41RS+5Z6WX"
          rel="nofollow"
          target="_blank"
          style={{ display: 'inline-block', marginTop: '1rem' }}
        >
          <img
            src="https://www24.a8.net/svt/bgt?aid=250423763094&wid=010&eno=01&mid=s00000018892001004000&mc=1"
            alt="副業支援サービスのバナー"
            style={{ maxWidth: '100%', height: 'auto', border: 0 }}
          />
        </a>

        {/* トラッキング用 */}
        <img
          src="https://www17.a8.net/0.gif?a8mat=453G7N+1JYYL6+41RS+5Z6WX"
          alt=""
          style={{ display: 'none' }}
        />
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="h-6 w-6 text-amber-500" />
          <span className="text-lg font-bold">副業診断アプリ</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link href="/" className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4">
            ホーム
          </Link>
          <Link
            href="/diagnosis/simple"
            className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4"
          >
            簡単診断
          </Link>
          <Link
            href="/diagnosis/detailed"
            className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4"
          >
            詳細診断
          </Link>
          <Link href="/dictionary" className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4">
            副業辞典
          </Link>
          <Link href="/privacy" className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4">
            プライバシーポリシー
          </Link>
        </nav>
        <div className="text-xs md:text-sm text-gray-500">© 2025 副業診断アプリ. All rights reserved.</div>
      </div>
    </footer>
  )
}

