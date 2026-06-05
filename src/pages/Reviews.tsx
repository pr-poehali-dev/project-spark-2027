import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const reviews = [
  {
    name: "Елена Соколова",
    tech: "Стиральная машина Bosch",
    rating: 5,
    date: "15 мая 2024",
    text: "Очень довольна работой мастера! Приехал в течение 2 часов после звонка, быстро определил причину поломки — лопнул барабан. Заменили на оригинальную деталь, дали гарантию 12 месяцев. Цена оказалась ниже, чем я ожидала. Рекомендую!",
  },
  {
    name: "Андрей Николаев",
    tech: "Холодильник Samsung",
    rating: 5,
    date: "28 апреля 2024",
    text: "Холодильник перестал морозить. Мастер Дмитрий приехал на следующий день утром, сразу поставил диагноз — потёк фреон. Заправили, проверили всю систему. Работает уже 3 месяца без проблем. Спасибо за оперативность!",
  },
  {
    name: "Ольга Михайлова",
    tech: "Посудомоечная машина Siemens",
    rating: 5,
    date: "10 апреля 2024",
    text: "Посудомойка начала течь. Мастер приехал вечером того же дня, нашёл трещину в шланге. Заменил деталь прямо на месте — у него всё было с собой. Очень профессиональный подход, всё объяснил и показал. Отличный сервис!",
  },
  {
    name: "Михаил Карпов",
    tech: "Варочная панель LG",
    rating: 5,
    date: "2 апреля 2024",
    text: "Перестала работать одна конфорка. Мастер Алексей приехал быстро, заменил нагревательный элемент. Работает как новая. Цена адекватная, никаких лишних работ не навязывали. Буду обращаться снова!",
  },
  {
    name: "Наталья Фёдорова",
    tech: "Стиральная машина LG",
    rating: 5,
    date: "20 марта 2024",
    text: "Машинка не отжимала, бельё выходило мокрым. Иван быстро нашёл причину — износился подшипник. Заменили в тот же день. Теперь всё работает тихо и исправно. Очень довольна качеством и ценой!",
  },
  {
    name: "Игорь Лебедев",
    tech: "Кофемашина DeLonghi",
    rating: 4,
    date: "5 марта 2024",
    text: "Кофемашина стала плохо варить кофе и потекла. Мастер приехал быстро, провёл чистку и заменил прокладку помпы. Теперь кофе снова вкусный! Единственный минус — пришлось немного подождать запчасть. В целом доволен.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Icon
          key={s}
          name="Star"
          size={14}
          className={s <= rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  )
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useReveal(0.1)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  )
}

export default function Reviews() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-14 md:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Отзывы клиентов</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Более 5 000 довольных клиентов доверяют нам ремонт своей бытовой техники
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-10 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground">4.9</div>
              <StarRating rating={5} />
              <p className="text-sm text-muted-foreground mt-1">средняя оценка</p>
            </div>
            <div className="flex-1 space-y-2 w-full max-w-sm">
              {[
                { stars: 5, count: 412, pct: 90 },
                { stars: 4, count: 38, pct: 8 },
                { stars: 3, count: 9, pct: 2 },
              ].map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-8">{r.stars} ★</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-amber-400 h-2 rounded-full transition-all"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{r.count}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-6 text-center">
              {[
                { icon: "Users", value: "459+", label: "Отзывов" },
                { icon: "ThumbsUp", value: "98%", label: "Довольны" },
              ].map((s, i) => (
                <div key={i}>
                  <Icon name={s.icon} size={22} className="text-primary mx-auto mb-1" fallback="Star" />
                  <div className="text-xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <RevealSection key={i}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-sm transition-shadow h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon name="User" size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.tech}</p>
                      </div>
                    </div>
                    <StarRating rating={r.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.text}</p>
                  <p className="text-xs text-muted-foreground/60 mt-4">{r.date}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Станьте нашим довольным клиентом
          </h2>
          <p className="text-white/80 mb-6">Оставьте заявку — мастер приедет сегодня</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            <Icon name="Phone" size={18} />
            Вызвать мастера
          </Link>
        </div>
      </section>
    </div>
  )
}
