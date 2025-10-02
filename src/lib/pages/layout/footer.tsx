'use client'

import Link from "next/link"
import { useEffect } from 'react'

declare global {
  interface Window {
    PartnersCoupang?: {
      G: new (config: {
        id: number;
        template: string;
        trackingCode: string;
        width: string;
        height: string;
        tsource: string;
      }) => void;
    };
  }
}

export default function Footer() {
  useEffect(() => {
    const container = document.getElementById('coupang-banner')
    if (!container) return

    // Create iframe wrapper to contain the banner
    const wrapper = document.createElement('div')
    wrapper.style.width = '100%'
    wrapper.style.display = 'flex'
    wrapper.style.justifyContent = 'center'
    wrapper.style.overflow = 'hidden'

    // Load Coupang Partners script
    const script1 = document.createElement('script')
    script1.src = 'https://ads-partners.coupang.com/g.js'
    script1.async = true

    script1.onload = () => {
      setTimeout(() => {
        if (window.PartnersCoupang) {
          // Insert into wrapper first
          container.appendChild(wrapper)

          // Create a target div inside wrapper
          const target = document.createElement('div')
          target.id = 'coupang-target'
          wrapper.appendChild(target)

          // Initialize banner - it will append to body, so we need to move it
          new window.PartnersCoupang.G({
            id: 928471,
            template: "carousel",
            trackingCode: "AF8730588",
            width: "680",
            height: "140",
            tsource: ""
          })

          // Find and move the inserted banner
          setTimeout(() => {
            const banner = document.querySelector('iframe[src*="ads-partners.coupang.com"]')
            if (banner && banner.parentElement) {
              target.appendChild(banner)
            }
          }, 200)
        }
      }, 100)
    }

    document.head.appendChild(script1)

    return () => {
      if (document.head.contains(script1)) {
        document.head.removeChild(script1)
      }
      if (container) {
        container.innerHTML = ''
      }
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
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 w-full max-w-[720px]">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">🎁</span>
                <p className="text-sm text-gray-600">
                  파트너스 활동으로 일정액의 수수료를 제공받을 수 있습니다
                </p>
              </div>
              <div className="flex justify-center">
                <div id="coupang-banner" className="w-full max-w-[680px] min-h-[140px]" />
              </div>
            </div>
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
