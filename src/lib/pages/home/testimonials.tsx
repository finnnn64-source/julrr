export default function Testimonials() {
  const testimonials = [
    {
      text: "julrr.com 덕분에 프로필 링크 관리가 훨씬 쉬워졌어요!",
      author: "김유저"
    },
    {
      text: "복사 한 번으로 끝나는 게 정말 편리합니다.",
      author: "이사용"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">사용자 후기</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
            >
              <p className="text-lg text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="text-orange-600 font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
