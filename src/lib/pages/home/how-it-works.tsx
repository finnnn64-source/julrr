"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const steps = [
    {
      number: "1",
      title: "URL 입력",
      description: "짧게 줄일 긴 URL을 입력하세요."
    },
    {
      number: "2",
      title: "버튼 클릭",
      description: "'URL 줄이기' 버튼을 누릅니다."
    },
    {
      number: "3",
      title: "URL 복사",
      description: "생성된 단축 URL을 복사해서 사용하세요."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">작동 원리</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4 h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white text-2xl font-bold rounded-full">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
