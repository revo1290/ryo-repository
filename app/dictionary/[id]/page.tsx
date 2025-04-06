import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle,
  Clock,
  Coins,
  Facebook,
  Instagram,
  Lightbulb,
  Share2,
  Twitter,
  Wrench,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { sideJobs } from "@/lib/diagnosis-logic"

export async function generateStaticParams() {
  return sideJobs.map((job) => ({
    id: job.id,
  }))
}

export default async function DictionaryDetail({ params }: { params: { id: string } }) {
  const job = sideJobs.find((job) => job.id === params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6">
              <Link href="/dictionary">
                <Button variant="ghost" className="pl-0 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  副業辞典に戻る
                </Button>
              </Link>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl">{job.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">{job.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-amber-500 border-amber-500">
                    {job.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold flex items-center mb-3">
                    <Coins className="h-5 w-5 mr-2 text-amber-500" />
                    単価相場
                  </h3>
                  <p className="text-xl font-bold text-amber-500">{job.price}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center mb-3">
                    <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                    特徴・メリット
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold flex items-center mb-3">
                    <BriefcaseBusiness className="h-5 w-5 mr-2 text-amber-500" />
                    始め方
                  </h3>
                  <ol className="space-y-3 list-decimal list-inside">
                    {job.howToStart.map((step, i) => (
                      <li key={i} className="pl-2">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center mb-3">
                    <Wrench className="h-5 w-5 mr-2 text-amber-500" />
                    必要なツール
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-2 text-amber-500" />
                    こんな人におすすめ
                  </h3>
                  <ul className="space-y-3">
                    {job.suitableFor.map((trait, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold flex items-center mb-3">
                    <Share2 className="h-5 w-5 mr-2 text-amber-500" />
                    シェアする
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">関連する副業</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sideJobs
                  .filter((relatedJob) => relatedJob.id !== job.id)
                  .slice(0, 3)
                  .map((relatedJob) => (
                    <Card key={relatedJob.id}>
                      <CardHeader className="pb-2 h-[160px]">
                        <CardTitle className="text-base">{relatedJob.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-[140px]">
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedJob.description}</p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Link href={`/dictionary/${relatedJob.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-amber-500 text-amber-500 hover:bg-amber-50"
                          >
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            <div className="mt-12 bg-amber-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">副業を成功させるためのポイント</h2>
              <div className="space-y-4">
                <p>
                  副業を始めるのは簡単ですが、継続して収入を得るには工夫が必要です。
                  以下のポイントを意識して取り組みましょう。
                </p>
                <h3 className="font-semibold">1. 小さく始めて徐々に拡大する</h3>
                <p>
                  最初から大きな収入を期待せず、小さな案件から始めて実績を積み上げていきましょう。
                  経験を積むことで単価アップや案件獲得が容易になります。
                </p>
                <h3 className="font-semibold">2. 継続的な学習を怠らない</h3>
                <p>
                  どんな副業も市場やトレンドは変化します。常に新しい情報をキャッチアップし、
                  スキルアップを続けることが長期的な成功につながります。
                </p>
                <h3 className="font-semibold">3. 本業とのバランスを大切に</h3>
                <p>
                  副業に熱中するあまり本業に支障が出ないよう、時間管理を徹底しましょう。
                  健康を損なわないペース配分も重要です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

