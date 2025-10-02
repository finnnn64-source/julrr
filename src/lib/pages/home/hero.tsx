"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { motion } from "motion/react"

export default function Hero() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [copied, setCopied] = useState(false)

  const handleShorten = () => {
    if (!url) return
    // 임시로 랜덤 코드 생성
    const randomCode = Math.random().toString(36).substring(2, 8)
    setShortUrl(`julrr.com/${randomCode}`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            간편한 URL 줄이기, <span className="text-orange-600">Julrr</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            긴 링크를 짧고 간편하게 만들어보세요
          </motion.p>

          {/* URL Input Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="space-y-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="긴 URL을 입력하세요"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-lg"
              />
              <button
                onClick={handleShorten}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl transition-colors"
              >
                URL 줄이기
              </button>
            </div>

            {shortUrl && (
              <div className="mt-6 p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-medium text-gray-900">{shortUrl}</p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        복사됨
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        복사
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
