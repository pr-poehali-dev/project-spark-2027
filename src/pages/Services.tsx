import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const categories = [
  {
    icon: "WashingMachine",
    title: "Стиральные машины",
    desc: "Ремонт стиральных машин всех марок и типов",
    services: [
      { name: "Замена подшипника", price: "от 1 500 ₽" },
      { name: "Замена манжеты барабана", price: "от 800 ₽" },
      { name: "Ремонт нагревательного элемента", price: "от 600 ₽" },
      { name: "Замена насоса", price: "от 700 ₽" },
      { name: "Устранение протечки", price: "от 500 ₽" },
      { name: "Диагностика", price: "Бесплатно" },
    ],
  },
  {
    icon: "Refrigerator",
    title: "Холодильники",
    desc: "Ремонт холодильников No Frost, двухкамерных и Side-by-Side",
    services: [
      { name: "Заправка фреона", price: "от 1 200 ₽" },
      { name: "Замена компрессора", price: "от 2 500 ₽" },
      { name: "Ремонт системы No Frost", price: "от 1 000 ₽" },
      { name: "Замена термостата", price: "от 600 ₽" },
      { name: "Ремонт дверного уплотнителя", price: "от 400 ₽" },
      { name: "Диагностика", price: "Бесплатно" },
    ],
  },
  {
    icon: "Utensils",
    title: "Посудомоечные машины",
    desc: "Устраним любую неисправность посудомоечной машины",
    services: [
      { name: "Ремонт насоса", price: "от 900 ₽" },
      { name: "Замена нагревательного элемента", price: "от 800 ₽" },
      { name: "Устранение протечки", price: "от 600 ₽" },
      { name: "Ремонт дозатора", price: "от 500 ₽" },
      { name: "Чистка фильтров", price: "от 300 ₽" },
      { name: "Диагностика", price: "Бесплатно" },
    ],
  },
  {
    icon: "Flame",
    title: "Варочные панели и духовки",
    desc: "Ремонт встраиваемой техники всех производителей",
    services: [
      { name: "Замена конфорки", price: "от 700 ₽" },
      { name: "Ремонт терморегулятора", price: "от 600 ₽" },
      { name: "Замена переключателя", price: "от 400 ₽" },
      { name: "Ремонт электронного модуля", price: "от 1 500 ₽" },
      { name: "Замена нагревательного элемента", price: "от 800 ₽" },
      { name: "Диагностика", price: "Бесплатно" },
    ],
  },
  {
    icon: "Wind",
    title: "Сушильные машины",
    desc: "Ремонт конденсационных и тепловых сушилок",
    services: [
      { name: "Замена нагревательного элемента", price: "от 1 000 ₽" },
      { name: "Ремонт термостата", price: "от 700 ₽" },
      { name: "Замена приводного ремня", price: "от 600 ₽" },
      { name: "Ремонт двигателя", price: "от 1 500 ₽" },
      { name: "Чистка конденсатора", price: "от 400 ₽" },
      { name: "Диагностика", price: "Бесплатно" },
    ],
  },
  {
    icon: "Coffee",
    title: "Кофемашины",
    desc: "Обслуживание и ремонт кофемашин всех типов",
    services: [
      { name: "Замена помпы", price: "от 900 ₽" },
      { name: "Чистка и descaling", price: "от 500 ₽" },
      { name: "Ремонт капучинатора", price: "от 700 ₽" },
      { name: "Замена нагревательного элемента", price: "от 800 ₽" },
      { name: "Ремонт клапана", price: "от 600 ₽" },
      { name: "Диагностика", price: "Бесплатно" },
    ],
  },
]

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

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Услуги по ремонту бытовой техники — МастерФикс Москва</title>
        <meta name="description" content="Ремонт стиральных машин, холодильников, посудомоечных машин, варочных панелей, кофемашин. Выезд мастера в день обращения по Москве и области." />
        <meta name="keywords" content="услуги ремонта техники, ремонт стиральных машин Москва, ремонт холодильников, ремонт посудомоечных машин, ремонт кофемашин" />
        <link rel="canonical" href="https://masterfix.ru/services" />
        <meta property="og:title" content="Услуги по ремонту бытовой техники — МастерФикс" />
        <meta property="og:description" content="Полный спектр ремонта бытовой техники любых брендов. Выезд в день обращения." />
        <meta property="og:url" content="https://masterfix.ru/services" />
      </Helmet>
      {/* Header */}
      <section className="bg-gradient-to-br from-background to-background py-14 md:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Наши услуги</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Ремонтируем бытовую технику всех популярных брендов. Цены фиксированные — никаких скрытых доплат.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {categories.map((cat, i) => (
            <RevealSection key={i}>
              <div className="border border-border rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-4 p-6 bg-secondary/50 border-b border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={cat.icon} size={22} className="text-primary" fallback="Settings" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  {cat.services.map((s, j) => (
                    <div key={j} className="flex items-center justify-between px-6 py-4 hover:bg-secondary/40 transition-colors">
                      <span className="text-sm text-foreground">{s.name}</span>
                      <span className={`text-sm font-semibold ml-4 shrink-0 ${s.price === "Бесплатно" ? "text-accent" : "text-primary"}`}>
                        {s.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Не нашли нужную услугу?
          </h2>
          <p className="text-white/80 mb-6">Позвоните нам — мы ремонтируем любую бытовую технику</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            <Icon name="Phone" size={18} />
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  )
}