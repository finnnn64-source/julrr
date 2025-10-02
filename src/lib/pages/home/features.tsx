"use client"

import { Zap, Shield, Gift } from "lucide-react"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const features = [
    {
      icon: Zap,
      title: "빠른 속도",
      description: "한 번의 클릭으로 긴 URL을 짧게 변환"
    },
    {
      icon: Shield,
      title: "안전한 서비스",
      description: "보안을 중시한 URL 관리 시스템"
    },
    {
      icon: Gift,
      title: "무료 이용",
      description: "별도의 회원가입 없이 무료로 이용"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4 p-8 rounded-2xl hover:bg-orange-50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
                <feature.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
