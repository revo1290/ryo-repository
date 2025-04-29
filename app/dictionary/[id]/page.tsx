import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sideJobs } from "@/lib/data/sideJobs";

export async function generateStaticParams() {
  return sideJobs.map((job) => ({ id: job.id }));
}

export default async function DictionaryDetail({
  params,
}: {
  params: { id: string };
}) {
  const job = sideJobs.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <Link href="/dictionary">
                <Button
                  variant="ghost"
                  className="pl-0 flex items-center gap-2 text-muted-foreground hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                  副業辞典に戻る
                </Button>
              </Link>
            </div>

            <Card className="shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base leading-relaxed">
                      {job.description}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-amber-500 border-amber-500 text-sm px-3 py-1"
                  >
                    {job.difficulty}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-10">
                <section>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
                    <Coins className="h-5 w-5 mr-2 text-amber-500" />
                    単価相場
                  </h3>
                  <p className="text-2xl font-bold text-amber-600">
                    {job.price}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
                    <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                    特徴・メリット
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <Separator />

                <section>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
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
                </section>

                {job.affiliateLink && (
                  <section>
                    <h3 className="text-xl font-semibold flex items-center mb-3">
                      <ExternalLink className="h-5 w-5 mr-2 text-amber-500" />
                      始めるのにおすすめのサービス
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {job.affiliateLink.map((url: string, i: number) => (
                        <Link
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="default"
                            size="lg"
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                          >
                            {job.affiliateName[i]}で始める
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
                    <Wrench className="h-5 w-5 mr-2 text-amber-500" />
                    必要なツール
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-2 text-amber-500" />
                    こんな人におすすめ
                  </h3>
                  <ul className="space-y-3">
                    {job.suitableFor.map((trait, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </section>
              </CardContent>
            </Card>

            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">関連する副業</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sideJobs
                  .filter((relatedJob) => relatedJob.id !== job.id)
                  .slice(0, 3)
                  .map((relatedJob) => (
                    <Card key={relatedJob.id} className="shadow">
                      <CardHeader className="pb-2 h-[160px]">
                        <CardTitle className="text-base">
                          {relatedJob.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-[140px]">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedJob.description}
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Link href={`/dictionary/${relatedJob.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-amber-500 text-amber-500 hover:bg-amber-100"
                          >
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
              </div>
            </section>

            <section className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">
                副業を成功させるためのポイント
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  副業を始めるのは簡単ですが、継続して収入を得るには工夫が必要です。以下のポイントを意識して取り組みましょう。
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    1. 小さく始めて徐々に拡大する
                  </h3>
                  <p>
                    最初は小さな案件からスタートし、実績を積み重ねることで信頼と収益を伸ばしていきましょう。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    2. 継続的な学習を怠らない
                  </h3>
                  <p>
                    市場やニーズは日々変化しています。トレンドをキャッチし、スキルアップを図ることが成功への近道です。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    3. 本業とのバランスを大切に
                  </h3>
                  <p>
                    副業に没頭しすぎず、健康や本業との両立も大切にしましょう。長く続けるためのペース配分が鍵です。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
