import Link from "next/link"
import { BriefcaseBusiness } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
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

