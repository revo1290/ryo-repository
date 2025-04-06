import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseBusiness className="h-6 w-6 text-amber-500" />
          <span className="text-lg font-bold">副業診断アプリ</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            ホーム
          </Link>
          <Link href="/diagnosis/simple" className="text-sm font-medium hover:underline underline-offset-4">
            簡単診断
          </Link>
          <Link href="/diagnosis/detailed" className="text-sm font-medium hover:underline underline-offset-4">
            詳細診断
          </Link>
          <Link href="/dictionary" className="text-sm font-medium hover:underline underline-offset-4">
            副業辞典
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 py-6">
              <Link href="/" className="text-lg font-medium hover:underline underline-offset-4">
                ホーム
              </Link>
              <Link href="/diagnosis/simple" className="text-lg font-medium hover:underline underline-offset-4">
                簡単診断
              </Link>
              <Link href="/diagnosis/detailed" className="text-lg font-medium hover:underline underline-offset-4">
                詳細診断
              </Link>
              <Link href="/dictionary" className="text-lg font-medium hover:underline underline-offset-4">
                副業辞典
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

