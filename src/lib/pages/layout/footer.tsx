'use client'

import Link from "next/link"
import { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = 'https://ads-partners.coupang.com/g.js'
    script1.async = true
    document.body.appendChild(script1)

    script1.onload = () => {
      const script2 = document.createElement('script')
      script2.innerHTML = `
        new PartnersCoupang.G({
          "id":928471,
          "template":"carousel",
          "trackingCode":"AF8730588",
          "width":"680",
          "height":"140",
          "tsource":""
        });
      `
      document.body.appendChild(script2)
    }

    return () => {
      document.body.removeChild(script1)
    }
  }, [])

  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Julrr</h3>
            <p className="text-gray-600 text-sm">
              간편하고 빠른 URL 줄이기 서비스
            </p>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  URL 줄이기
                </Link>
              </li>
              <li>
                <Link href="/manage" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  URL 관리
                </Link>
              </li>
              <li>
                <Link href="/stats" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  통계
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">고객 지원</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:support@julrr.com" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">회사</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-600 text-sm transition-colors">
                  연락처
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Coupang Partners Banner */}
        <div className="pt-8 border-t">
          <div className="flex justify-center">
            <div id="coupang-banner" className="w-full max-w-[680px] h-[140px]" />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Julrr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
