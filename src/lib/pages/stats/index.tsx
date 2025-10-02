"use client"

import { motion } from "motion/react"
import { TrendingUp, MousePointerClick, Calendar, BarChart3 } from "lucide-react"

export default function StatsPage() {
  // 임시 데이터
  const stats = {
    totalClicks: 255,
    todayClicks: 42,
    averageClicks: 85,
    topUrls: [
      { shortCode: "abc123", clicks: 145, url: "example.com/very/long/url" },
      { shortCode: "xyz789", clicks: 87, url: "another-example.com/path" },
      { shortCode: "def456", clicks: 23, url: "test-website.com/product" }
    ],
    clicksByDate: [
      { date: "10/01", clicks: 45 },
      { date: "10/02", clicks: 67 },
      { date: "10/03", clicks: 89 },
      { date: "10/04", clicks: 54 }
    ]
  }

  const maxClicks = Math.max(...stats.clicksByDate.map(d => d.clicks))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">통계</h1>
            <p className="text-gray-600">URL 클릭 통계를 확인하세요</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <MousePointerClick className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-gray-600 text-sm">총 클릭 수</p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.totalClicks}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-600 text-sm">오늘 클릭</p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.todayClicks}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-600 text-sm">평균 클릭</p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.averageClicks}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-gray-600 text-sm">인기 URL</p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.topUrls.length}</p>
            </motion.div>
          </div>

          {/* Chart Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Click Chart */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">날짜별 클릭 수</h2>
              <div className="space-y-4">
                {stats.clicksByDate.map((data, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{data.date}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {data.clicks} 클릭
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-orange-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(data.clicks / maxClicks) * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top URLs */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">인기 URL</h2>
              <div className="space-y-4">
                {stats.topUrls.map((url, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-orange-600 mb-1">
                        julrr.com/{url.shortCode}
                      </p>
                      <p className="text-sm text-gray-500 truncate">{url.url}</p>
                    </div>
                    <span className="ml-4 px-3 py-1 bg-orange-100 text-orange-700 font-semibold rounded-full text-sm">
                      {url.clicks}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
