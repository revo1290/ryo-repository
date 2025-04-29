"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sideJobs } from "@/lib/data/sideJobs";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = sideJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                副業辞典
              </h1>
              <p className="mt-2 text-gray-500 text-lg">
                様々な副業の特徴や始め方、単価相場などを詳しく解説しています
              </p>
            </div>

            {/* 検索バー */}
            <div className="relative mb-10">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="副業を検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>

            {/* 検索結果 */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <CardHeader className="pb-3 h-[190px]">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge
                          variant="outline"
                          className="text-amber-500 border-amber-500 text-xs"
                        >
                          {job.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="mt-2 text-sm">
                        {job.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col h-[160px]">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-600">
                            単価相場
                          </span>
                          <span className="font-bold text-amber-500">
                            {job.price}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.features.slice(0, 3).map((feature, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs px-2 py-1"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {job.features.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-1"
                            >
                              +{job.features.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Link href={`/dictionary/${job.id}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-amber-500 text-amber-500 hover:bg-amber-50"
                        >
                          詳細を見る
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-20">
                <p className="text-lg">該当する副業が見つかりませんでした。</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
