import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface NewsItem {
  title: string
  description: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  source: string
}

interface API_Response {
  data: NewsItem[]
}

const MarqueePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news")
  const data: API_Response = await res.json()
  const headline = data.data

  return (
    <div className="flex items-center bg-[#C10007] text-white overflow-hidden">

      <div className="bg-[#8B0000] px-5 py-2 font-bold text-[18px] whitespace-nowrap z-10 flex items-center shrink-0 ml-15">
        সর্বশেষ
      </div>


      <div className="flex-1 overflow-hidden font-light text-[18px] flex items-center max-w-[85%]">
        <MarqueeText 
        direction="right" 
        duration={13}>
          {headline.map((h, index) => (
            <span key={index} className="inline-flex items-center">
              <span>{h.title}</span>
              <span className="mx-3">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  )
}

export default MarqueePage