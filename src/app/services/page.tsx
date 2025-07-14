

'use client';

import Link from 'next/link';

export default function Services() {
  // ?��? ?�이??- ?�중???�제 ?��?지?� ?�용?�로 교체 가??
  const cases = [
    {
      id: 1,
      title: "?�찰�??�기 ?�해 ?�복 ?��?",
      category: "?�찰�?,
      description: "공공기�? ?�찰 관???�기 ?�해�??�액 ?�수 ?�공",
      image: "/images/buil.jpg",
      result: "?�해�?100% ?�수"
    },
    {
      id: 2,
      title: "골프 ?�원�??�불 ?�공 ?��?",
      category: "?�원�?,
      description: "골프???�업?�로 ?�한 ?�원�??�불 ?�송 ?�소",
      image: "/images/buil.jpg",
      result: "?�액 ?�불 ?�공"
    },
    {
      id: 3,
      title: "가?�화???�자?�기 구제 ?��?",
      category: "?�자?�기",
      description: "가?�화???�자?�기�??�한 ?�해�??�수",
      image: "/images/buil.jpg",
      result: "?�해�?95% ?�수"
    },
    {
      id: 4,
      title: "보이?�피???�해 ?�복 ?��?",
      category: "보이?�피??,
      description: "?�화금융?�기 ?�해�??�속 ?�수",
      image: "/images/buil.jpg",
      result: "?�해�?90% ?�수"
    },
    {
      id: 5,
      title: "?��??�기 집단?�송 ?��?",
      category: "?�자?�기",
      description: "?�규모 ?��??�기 집단?�송 ?�소",
      image: "/images/buil.jpg",
      result: "집단?�송 ?�소"
    },
    {
      id: 6,
      title: "콘도 ?�원�?분쟁 ?�결 ?��?",
      category: "?�원�?,
      description: "콘도 ?�원�?계약 분쟁 ?�만 ?�결",
      image: "/images/buil.jpg",
      result: "?�의 ?�공"
    },
    {
      id: 7,
      title: "메신?� ?�싱 ?�기 구제 ?��?",
      category: "보이?�피??,
      description: "메신?��??�한 금융?�기 ?�해 ?�복",
      image: "/images/buil.jpg",
      result: "?�해�?85% ?�수"
    },
    {
      id: 8,
      title: "?�찰 ?�격 배제 구제 ?��?",
      category: "?�찰�?,
      description: "부?�한 ?�찰 ?�격 배제 처분 취소",
      image: "/images/buil.jpg",
      result: "처분 취소 ?�공"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">?�공 ?��?</h1>
          <p className="text-xl text-gray-200">15?�간 축적???�문?�으�??�루?�낸 ?�제 ?�과??/p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-2xl font-bold text-center text-gray-800 mb-16">고객???�제 ?�?�내?�과 ?�께 ?�인?�는 ?�공 ?�토�?/p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="bg-white rounded-lg shadow border border-gray-200">
                {/* ?��?지 ?�역 - 카톡 ?�크린샷???�어�?�?*/}
                <div className="aspect-[3/4] bg-gray-200 relative">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // ?��?지 로드 ?�패??placeholder ?�시
                      e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="%23f3f4f6"/><text x="50%" y="45%" text-anchor="middle" fill="%236b7280" font-size="16">카톡 ?�???��?지</text><text x="50%" y="55%" text-anchor="middle" fill="%236b7280" font-size="14">준�?�?/text></svg>';
                    }}
                  />
                  
                  {/* 카테고리 뱃�? */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                      {caseItem.category}
                    </span>
                  </div>
                </div>

                {/* ?�용 ?�역 */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {caseItem.description}
                  </p>
                  
                  {/* 결과 */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">결과</span>
                    <span className="text-sm font-semibold text-green-600">
                      {caseItem.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">?�적 ?�과</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">900+</div>
              <div className="text-lg font-medium text-gray-700">?�공 ?��?</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">91%</div>
              <div className="text-lg font-medium text-gray-700">?�소??/div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">190??/div>
              <div className="text-lg font-medium text-gray-700">?�해�??�수??/div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4개월</div>
              <div className="text-lg font-medium text-gray-700">?�균 ?�결기간</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">비슷???�해�??�하?�나??</h2>
          <p className="text-lg mb-8">
            ?��? 같�? ?�공 ?��??�처?? 귀?�의 ?�해??반드???�복?????�습?�다.<br />
            지�?바로 무료 ?�담???�청?�여 ?�문가???��???받아보세??
          </p>
          <Link href="/contact" className="bg-white text-slate-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors block text-center">
            무료 ?�담 ?�청?�기
          </Link>
        </div>
      </section>
    </div>
  );
} 
