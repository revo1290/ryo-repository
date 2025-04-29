"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle,
  Clock,
  Coins,
  Facebook,
  Instagram,
  Lightbulb,
  RefreshCw,
  Share2,
  Twitter,
  Wrench,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { analyzeDiagnosis } from "@/lib/diagnosis-logic";

export default function DiagnosisResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const type = searchParams.get("type") || "simple";
  const answersParam = searchParams.get("answers");

  useEffect(() => {
    if (!answersParam) {
      router.push("/");
      return;
    }

    try {
      const answers = JSON.parse(decodeURIComponent(answersParam));
      const diagnosisResults = analyzeDiagnosis(type, answers);
      setResults(diagnosisResults);
      setLoading(false);
    } catch (error) {
      console.error("Error parsing answers:", error);
      router.push("/");
    }
  }, [answersParam, router, type]);

  const handleRediagnosis = () => {
    router.push(`/diagnosis/${type}`);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `私の副業診断結果: ${results[0]?.title}！あなたも副業診断してみませんか？`;

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "instagram":
        // Instagramは直接シェアできないので、クリップボードにコピー
        navigator.clipboard.writeText(`${text} ${url}`);
        alert(
          "テキストをクリップボードにコピーしました。Instagramに貼り付けてください。"
        );
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center h-[50vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
              <p className="mt-4 text-lg">診断結果を分析中...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                あなたにぴったりの副業
              </h1>
              <p className="mt-2 text-gray-500">
                {type === "simple" ? "簡単診断" : "詳細診断"}
                の結果、あなたに最適な副業を見つけました
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                variant="outline"
                onClick={handleRediagnosis}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                再診断する
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("twitter")}
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4" />
                Twitterでシェア
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("facebook")}
                className="flex items-center gap-2"
              >
                <Facebook className="h-4 w-4" />
                Facebookでシェア
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("instagram")}
                className="flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Instagramでシェア
              </Button>
            </div>

            <Tabs defaultValue="job1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="job1" className="text-sm sm:text-base">
                  <Award className="mr-2 h-4 w-full" />
                  <div className="w-full text-center">
                    1位: {results[0]?.title}
                  </div>
                </TabsTrigger>
              </TabsList>

              {results.map((job, index) => (
                <TabsContent key={job.id} value={`job${index + 1}`}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {job.description}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-amber-500 border-amber-500"
                        >
                          {job.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                          <Coins className="h-5 w-5 mr-2 text-amber-500" />
                          単価相場
                        </h3>
                        <p className="text-xl font-bold text-amber-500">
                          {job.price}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                          <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                          特徴・メリット
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {job.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                          <BriefcaseBusiness className="h-5 w-5 mr-2 text-amber-500" />
                          始め方
                        </h3>
                        <ol className="space-y-2 list-decimal list-inside">
                          {job.howToStart.map((step: string, i: number) => (
                            <li key={i} className="pl-2">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

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

                      <div>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                          <Wrench className="h-5 w-5 mr-2 text-amber-500" />
                          必要なツール
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {job.tools.map((tool: string, i: number) => (
                            <Badge key={i} variant="secondary">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                          <Clock className="h-5 w-5 mr-2 text-amber-500" />
                          こんな人におすすめ
                        </h3>
                        <ul className="space-y-2">
                          {job.suitableFor.map((trait: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                              <span>{trait}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/dictionary/${job.id}`} className="w-full">
                        <Button className="w-full bg-amber-500 hover:bg-amber-600">
                          <Share2 className="h-4 w-4 mr-2" />
                          もっと詳しく見る
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 bg-amber-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">
                副業を始める前に知っておきたいこと
              </h2>
              <div className="space-y-4">
                <p>
                  副業を始める際は、本業との兼ね合いや税金の問題など、いくつか注意点があります。
                  まずは小さく始めて、徐々に拡大していくことをおすすめします。
                </p>
                <h3 className="font-semibold">会社員の方へ</h3>
                <p>
                  会社の就業規則で副業が禁止されていないか確認しましょう。
                  また、年間の副業収入が20万円を超える場合は確定申告が必要です。
                </p>
                <h3 className="font-semibold">時間管理のコツ</h3>
                <p>
                  副業は本業に支障が出ない範囲で行うことが大切です。
                  無理なスケジュールを組まず、自分のペースで続けられる範囲から始めましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
