"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Julrr
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
              홈
            </Link>
            <Link href="/stats" className="text-gray-600 hover:text-orange-600 transition-colors">
              통계
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
