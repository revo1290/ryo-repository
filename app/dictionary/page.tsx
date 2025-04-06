import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { sideJobs } from "@/lib/diagnosis-logic"

export default function Dictionary() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">副業辞典</h1>
              <p className="mt-2 text-gray-500">様々な副業の特徴や始め方、単価相場などを詳しく解説しています</p>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="副業を検索..." className="pl-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sideJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden">
                  <CardHeader className="pb-3 h-[170px]">
                    <div className="flex justify-between items-start">
                      <CardTitle className="h-[60px]">{job.title}</CardTitle>
                      <Badge variant="outline" className="text-amber-500 border-amber-500">
                        {job.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="mt-2">{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col h-[150px]">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">単価相場:</span>
                        <span className="text-sm font-bold text-amber-500">{job.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.features.slice(0, 2).map((feature, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {job.features.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{job.features.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Link href={`/dictionary/${job.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-amber-500 text-amber-500 hover:bg-amber-50">
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

