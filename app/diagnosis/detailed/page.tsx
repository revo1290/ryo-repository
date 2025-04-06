"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// 詳細診断の質問
const questions = [
  {
    id: 1,
    question: "あなたの性格に最も近いものはどれですか？",
    options: [
      { id: "a", text: "コツコツと作業を進めるのが好き" },
      { id: "b", text: "人と話したり、交流するのが好き" },
      { id: "c", text: "新しいことに挑戦するのが好き" },
      { id: "d", text: "計画を立てて物事を進めるのが好き" },
    ],
  },
  {
    id: 2,
    question: "副業に使える時間はどのくらいですか？",
    options: [
      { id: "a", text: "平日の夜1〜2時間程度" },
      { id: "b", text: "週末のみ集中して" },
      { id: "c", text: "不定期だが、まとまった時間が取れる" },
      { id: "d", text: "隙間時間を活用したい" },
    ],
  },
  {
    id: 3,
    question: "副業で重視したいことは何ですか？",
    options: [
      { id: "a", text: "安定した収入" },
      { id: "b", text: "高単価・高収入" },
      { id: "c", text: "スキルアップ・経験" },
      { id: "d", text: "趣味や特技を活かせること" },
    ],
  },
  {
    id: 4,
    question: "以下のスキルのうち、自信があるものはどれですか？",
    options: [
      { id: "a", text: "文章作成・ライティング" },
      { id: "b", text: "デザイン・イラスト" },
      { id: "c", text: "プログラミング・IT関連" },
      { id: "d", text: "特にないが、新しいスキルを身につけたい" },
    ],
  },
  {
    id: 5,
    question: "副業を始める上での不安や障壁は何ですか？",
    options: [
      { id: "a", text: "時間の確保が難しい" },
      { id: "b", text: "必要なスキルや知識がない" },
      { id: "c", text: "始め方がわからない" },
      { id: "d", text: "継続できるか不安" },
    ],
  },
  {
    id: 6,
    question: "あなたの職業タイプに最も近いものはどれですか？",
    options: [
      { id: "a", text: "会社員（デスクワーク中心）" },
      { id: "b", text: "会社員（営業・接客など）" },
      { id: "c", text: "フリーランス・自営業" },
      { id: "d", text: "学生・主婦/主夫" },
    ],
  },
  {
    id: 7,
    question: "副業の目的は何ですか？",
    options: [
      { id: "a", text: "収入アップ" },
      { id: "b", text: "将来の独立・転職の準備" },
      { id: "c", text: "趣味や特技を活かす" },
      { id: "d", text: "新しいスキルの習得" },
    ],
  },
  {
    id: 8,
    question: "どのような働き方が理想ですか？",
    options: [
      { id: "a", text: "完全在宅・リモートワーク" },
      { id: "b", text: "外出して人と関わる仕事" },
      { id: "c", text: "在宅と外出のミックス" },
      { id: "d", text: "場所を問わず、自由に働ける" },
    ],
  },
  {
    id: 9,
    question: "コミュニケーション能力についてどう思いますか？",
    options: [
      { id: "a", text: "人と話すのが得意で楽しい" },
      { id: "b", text: "必要に応じてコミュニケーションは取れる" },
      { id: "c", text: "あまり得意ではない" },
      { id: "d", text: "一人で黙々と作業する方が好き" },
    ],
  },
  {
    id: 10,
    question: "英語力はどの程度ありますか？",
    options: [
      { id: "a", text: "ビジネスレベル以上" },
      { id: "b", text: "日常会話レベル" },
      { id: "c", text: "読み書きはできるが会話は苦手" },
      { id: "d", text: "ほとんどできない" },
    ],
  },
  {
    id: 11,
    question: "パソコンスキルはどの程度ありますか？",
    options: [
      { id: "a", text: "プログラミングやデザインソフトも使える" },
      { id: "b", text: "オフィスソフトを問題なく使える" },
      { id: "c", text: "基本的な操作はできる" },
      { id: "d", text: "あまり得意ではない" },
    ],
  },
  {
    id: 12,
    question: "副業にかけられる初期投資はどのくらいですか？",
    options: [
      { id: "a", text: "ほとんどかけられない" },
      { id: "b", text: "5万円程度まで" },
      { id: "c", text: "10万円程度まで" },
      { id: "d", text: "必要であれば10万円以上も可能" },
    ],
  },
  {
    id: 13,
    question: "副業にどのくらいの期間取り組む予定ですか？",
    options: [
      { id: "a", text: "短期間（数ヶ月程度）" },
      { id: "b", text: "中期的（半年〜1年程度）" },
      { id: "c", text: "長期的（1年以上）" },
      { id: "d", text: "将来的には本業にしたい" },
    ],
  },
  {
    id: 14,
    question: "副業で得たいと思う月収はどのくらいですか？",
    options: [
      { id: "a", text: "3万円未満" },
      { id: "b", text: "3万円〜5万円" },
      { id: "c", text: "5万円〜10万円" },
      { id: "d", text: "10万円以上" },
    ],
  },
  {
    id: 15,
    question: "あなたが最も興味のある分野はどれですか？",
    options: [
      { id: "a", text: "IT・テクノロジー" },
      { id: "b", text: "クリエイティブ・アート" },
      { id: "c", text: "ビジネス・マーケティング" },
      { id: "d", text: "教育・コーチング" },
    ],
  },
]

export default function DetailedDiagnosis() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleNext = () => {
    if (selectedOption) {
      // 回答を保存
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedOption })

      if (currentQuestion < questions.length - 1) {
        // 次の質問へ
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        // 診断完了、結果ページへ
        const newAnswers = { ...answers, [questions[currentQuestion].id]: selectedOption }
        const answersParam = encodeURIComponent(JSON.stringify(newAnswers))
        router.push(`/diagnosis/results?type=detailed&answers=${answersParam}`)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">詳細診断</h1>
              <p className="mt-2 text-gray-500">15の質問に答えて、あなたにぴったりの副業を詳しく診断します</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>
                  質問 {currentQuestion + 1}/{questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  前へ
                </Button>
                <Button onClick={handleNext} disabled={!selectedOption} className="bg-amber-500 hover:bg-amber-600">
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      次へ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "診断結果を見る"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

