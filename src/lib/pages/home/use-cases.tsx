import { Share2, QrCode, FileText, Megaphone } from "lucide-react"

export default function UseCases() {
  const cases = [
    {
      icon: Share2,
      title: "SNS 프로필 링크"
    },
    {
      icon: QrCode,
      title: "QR 코드 삽입"
    },
    {
      icon: FileText,
      title: "블로그 포스팅"
    },
    {
      icon: Megaphone,
      title: "오프라인 홍보"
    }
  ]

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">활용 사례</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-100 text-center space-y-3 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{useCase.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
