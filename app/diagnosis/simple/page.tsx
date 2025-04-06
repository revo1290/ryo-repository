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

// 簡単診断の質問
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
]

export default function SimpleDiagnosis() {
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
        router.push(`/diagnosis/results?type=simple&answers=${answersParam}`)
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">簡単診断</h1>
              <p className="mt-2 text-gray-500">5つの質問に答えて、あなたにぴったりの副業を見つけましょう</p>
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

