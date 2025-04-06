import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseBusiness, Clock, Coins, Lightbulb, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  あなたにぴったりの<span className="text-amber-500">副業</span>を見つけよう
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  簡単な質問に答えるだけで、あなたの性格やスキルに合った副業を診断します。
                  今すぐ始めて、新しい収入源を見つけましょう。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/diagnosis/simple">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                    <Sparkles className="mr-2 h-4 w-4" />
                    簡単診断（5問）
                  </Button>
                </Link>
                <Link href="/diagnosis/detailed">
                  <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    詳細診断（15問）
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">副業診断の特徴</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  あなたの性格、スキル、ライフスタイルに合わせた最適な副業を提案します
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <Coins className="h-12 w-12 text-amber-500 mx-auto mb-2" />
                    <CardTitle>単価相場がわかる</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">おすすめの副業の単価相場を表示。収入の目安がわかります。</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <BriefcaseBusiness className="h-12 w-12 text-amber-500 mx-auto mb-2" />
                    <CardTitle>始め方がわかる</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">副業を始めるための具体的なステップやリソースを紹介します。</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="h-12 w-12 text-amber-500 mx-auto mb-2" />
                    <CardTitle>すぐに診断できる</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">簡単診断なら5問、詳細診断でも15問。数分で結果がわかります。</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">人気の副業ランキング</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  今注目されている副業をチェックしてみましょう
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {[
                  {
                    rank: 1,
                    id: "web-writer",
                    title: "Webライター",
                    description: "文章を書くのが好きな人におすすめ。在宅で柔軟に働けます。",
                    price: "1文字0.5円〜3円",
                  },
                  {
                    rank: 2,
                    id: "programming",
                    title: "プログラミング",
                    description: "技術力を活かして高単価案件を獲得できます。",
                    price: "時給3,000円〜10,000円",
                  },
                  {
                    rank: 3,
                    id: "youtuber",
                    title: "YouTuber",
                    description: "趣味や特技を活かした動画制作で収益化できます。",
                    price: "再生数に応じて変動",
                  },
                  {
                    rank: 4,
                    id: "illustrator",
                    title: "イラストレーター",
                    description: "絵を描くのが好きな人に。SNSで作品を発信しましょう。",
                    price: "1点5,000円〜50,000円",
                  },
                  {
                    rank: 5,
                    id: "online-teacher",
                    title: "オンライン講師",
                    description: "得意分野を教えることで収入を得られます。",
                    price: "時給2,000円〜5,000円",
                  },
                  {
                    rank: 6,
                    id: "data-entry",
                    title: "データ入力",
                    description: "特別なスキルがなくても始められる副業です。",
                    price: "時給1,000円〜2,000円",
                  },
                ].map((job) => (
                  <Card key={job.rank}>
                    <CardHeader className="h-[160px]">
                      <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto mb-2">
                        {job.rank}
                      </div>
                      <CardTitle>{job.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col h-[150px]">
                      <p className="text-gray-500 mb-4">{job.description}</p>
                      <p className="font-semibold text-amber-600 mt-auto">相場: {job.price}</p>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Link href={`/dictionary/${job.id}`} className="w-full">
                        <Button variant="outline" className="w-full border-amber-500 text-amber-500 hover:bg-amber-50">
                          詳細を見る
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <Link href="/dictionary" className="mt-8">
                <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50">
                  副業辞典をもっと見る
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

