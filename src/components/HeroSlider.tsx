import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const slides = [
  {
    url: "https://cdn.poehali.dev/projects/927a3f93-1090-4936-b37b-8df65cb84b66/files/3d7b8f60-3941-43ef-8213-4b45bf0eb5bf.jpg",
    label: "Ремонт стиральных машин",
  },
  {
    url: "https://cdn.poehali.dev/projects/927a3f93-1090-4936-b37b-8df65cb84b66/files/c97aec2b-218a-4ae6-b596-418d9c904fa4.jpg",
    label: "Ремонт холодильников",
  },
  {
    url: "https://cdn.poehali.dev/projects/927a3f93-1090-4936-b37b-8df65cb84b66/files/aefff535-76b0-43ec-915a-51301bb83c8b.jpg",
    label: "Ремонт посудомоечных машин",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-muted select-none">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.url}
          alt={slide.label}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
        <p className="text-white font-medium text-sm">{slides[current].label}</p>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
      >
        <Icon name="ChevronLeft" size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
      >
        <Icon name="ChevronRight" size={18} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white w-5" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}