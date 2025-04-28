import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BriefcaseBusiness,
  Clock,
  Coins,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { motion } from "framer-motion";

export default function Home() {
  // 特徴データ
  const features = [
    {
      icon: Coins,
      title: "単価相場がわかる",
      description: "おすすめの副業の単価相場を表示。収入の目安がわかります。",
    },
    {
      icon: BriefcaseBusiness,
      title: "始め方がわかる",
      description: "副業を始めるための具体的なステップやリソースを紹介します。",
    },
    {
      icon: Clock,
      title: "すぐに診断できる",
      description: "簡単診断なら5問、詳細診断でも15問。数分で結果がわかります。",
    },
  ];

  // ランキングデータ
  const jobs = [
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
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-1">
        {/* ─── ヒーローセクション ───────────────────────────── */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-white overflow-hidden">
          {/* 背景装飾 */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-amber-50 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tr from-white to-amber-50 rounded-tl-full" />
          </div>

          <div className="relative container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
                あなたにぴったりの
                <span className="text-amber-600">副業</span>を見つけよう
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-gray-600">
                簡単な質問に答えるだけで、あなたの性格やスキルに合った
                副業を診断します。今すぐ始めて、新しい収入源を見つけましょう。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/diagnosis/simple" passHref>
                    <Button className="bg-amber-600 hover:bg-amber-700 transform transition">
                      <Sparkles className="mr-2 h-5 w-5" />
                      簡単診断（5問）
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/diagnosis/detailed" passHref>
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-100 transform transition"
                    >
                      <Lightbulb className="mr-2 h-5 w-5" />
                      詳細診断（15問）
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 特徴セクション ───────────────────────────── */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                副業診断の特徴
              </h2>
              <p className="max-w-2xl text-lg text-gray-600">
                あなたの性格、スキル、ライフスタイルに合わせた最適な
                副業を提案します
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ translateY: -5 }}
                    className="rounded-lg bg-white shadow-lg transition-shadow"
                  >
                    <Card>
                      <CardHeader className="pt-6">
                        <feature.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── ランキングセクション ───────────────────────────── */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-amber-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                人気の副業ランキング
              </h2>
              <p className="max-w-2xl text-lg text-gray-600">
                今注目されている副業をチェックしてみましょう
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {jobs.map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-lg bg-white shadow-md transition-shadow"
                  >
                    <Card>
                      <CardHeader className="relative h-28 bg-amber-100 rounded-t-lg text-center">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                          {job.rank}
                        </div>
                        <CardTitle className="mt-6">
                          {job.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-36 p-6">
                        <p className="text-gray-600 mb-4 flex-grow">
                          {job.description}
                        </p>
                        <p className="font-semibold text-amber-700">
                          相場: {job.price}
                        </p>
                      </CardContent>
                      <CardFooter className="p-6 pt-4">
                        <Link href={`/dictionary/${job.id}`} passHref>
                          <Button
                            variant="outline"
                            className="w-full border-amber-600 text-amber-600 hover:bg-amber-100 transform transition"
                          >
                            詳細を見る
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ translateY: -3 }}>
                <Link href="/dictionary" passHref>
                  <Button
                    variant="outline"
                    className="mt-8 border-amber-600 text-amber-600 hover:bg-amber-100 transform transition"
                  >
                    副業辞典をもっと見る
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
);
}
