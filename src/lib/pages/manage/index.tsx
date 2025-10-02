"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Trash2, ExternalLink, Copy, Check } from "lucide-react"

interface ShortUrl {
  id: string
  originalUrl: string
  shortCode: string
  createdAt: string
  clicks: number
}

export default function ManagePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // 임시 데이터
  const [urls] = useState<ShortUrl[]>([
    {
      id: "1",
      originalUrl: "https://www.example.com/very/long/url/path/that/needs/shortening",
      shortCode: "abc123",
      createdAt: "2024-10-01",
      clicks: 145
    },
    {
      id: "2",
      originalUrl: "https://www.another-example.com/some/other/long/path",
      shortCode: "xyz789",
      createdAt: "2024-10-02",
      clicks: 87
    },
    {
      id: "3",
      originalUrl: "https://www.test-website.com/product/category/item",
      shortCode: "def456",
      createdAt: "2024-10-02",
      clicks: 23
    }
  ])

  const handleCopy = (shortCode: string, id: string) => {
    navigator.clipboard.writeText(`julrr.com/${shortCode}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">URL 관리</h1>
            <p className="text-gray-600">만든 단축 URL 목록을 확인하고 관리하세요</p>
          </div>

          {/* Stats Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 text-sm mb-1">전체 URL</p>
              <p className="text-3xl font-bold text-orange-600">{urls.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 text-sm mb-1">총 클릭 수</p>
              <p className="text-3xl font-bold text-orange-600">
                {urls.reduce((sum, url) => sum + url.clicks, 0)}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 text-sm mb-1">평균 클릭 수</p>
              <p className="text-3xl font-bold text-orange-600">
                {Math.round(urls.reduce((sum, url) => sum + url.clicks, 0) / urls.length)}
              </p>
            </div>
          </div>

          {/* URL List */}
          <div className="space-y-4">
            {urls.map((url, index) => (
              <motion.div
                key={url.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-lg font-semibold text-orange-600">
                        julrr.com/{url.shortCode}
                      </p>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                        {url.clicks} 클릭
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm truncate mb-2">{url.originalUrl}</p>
                    <p className="text-gray-400 text-xs">생성일: {url.createdAt}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(url.shortCode, url.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="복사"
                    >
                      {copiedId === url.id ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    <a
                      href={url.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="원본 URL 열기"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600" />
                    </a>
                    <button
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="삭제"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {urls.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">아직 만든 URL이 없습니다</p>
              <p className="text-gray-400 mt-2">메인 페이지에서 URL을 줄여보세요!</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
