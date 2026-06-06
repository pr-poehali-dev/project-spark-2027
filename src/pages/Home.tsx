import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  { icon: "WashingMachine", label: "Стиральные машины", desc: "Не крутит, течёт, шумит, не греет воду" },
  { icon: "Refrigerator", label: "Холодильники", desc: "Не морозит, течёт, шумит, не включается" },
  { icon: "Utensils", label: "Посудомоечные машины", desc: "Не моет, течёт, не сливает воду" },
  { icon: "Flame", label: "Варочные панели", desc: "Не включается, искрит, не регулирует" },
  { icon: "Wind", label: "Сушильные машины", desc: "Не сушит, перегревается, шумит" },
  { icon: "Coffee", label: "Кофемашины", desc: "Не варит, течёт, не включается" },
]

const brands = ["Bosch", "Samsung", "LG", "Siemens", "Indesit", "Whirlpool", "Electrolux", "Haier"]

const advantages = [
  { icon: "Clock", title: "Выезд в день обращения", desc: "Мастер приедет в удобное для вас время" },
  { icon: "ShieldCheck", title: "Гарантия 12 месяцев", desc: "На все виды выполненных работ" },
  { icon: "Banknote", title: "Бесплатная диагностика", desc: "При условии выполнения ремонта" },
  { icon: "Package", title: "Оригинальные запчасти", desc: "Только сертифицированные детали" },
]

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useReveal(0.15)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  )
}

const BRAND_LIST = [
  "Bosch","Samsung","LG","Siemens","Whirlpool","Electrolux","Indesit","Haier",
  "Miele","AEG","Ariston","Beko","Candy","Gorenje","Hisense","Hotpoint",
  "Panasonic","Philips","Zanussi","Neff","Smeg","Liebherr","Sharp","Teka",
  "Bosch","Samsung","LG","Siemens","Whirlpool","Electrolux","Indesit","Haier",
  "Miele","AEG","Ariston","Beko","Candy","Gorenje","Hisense","Hotpoint",
  "Panasonic","Philips","Zanussi","Neff","Smeg","Liebherr","Sharp","Teka",
  "Bosch","Samsung","LG","Siemens","Whirlpool","Electrolux","Indesit","Haier",
  "Miele","AEG","Ariston","Beko","Candy","Gorenje","Hisense","Hotpoint",
]


export default function Home() {
  return (
    <div className="relative">
      <Helmet>
        <title>МастерФикс — Ремонт бытовой техники в Москве</title>
        <meta name="description" content="Профессиональный ремонт стиральных машин, холодильников, посудомоечных машин и другой техники. Выезд в день обращения. Бесплатная диагностика. Гарантия 12 месяцев." />
        <meta name="keywords" content="ремонт бытовой техники Москва, ремонт стиральных машин, ремонт холодильников, ремонт посудомоечных машин, вызов мастера" />
        <link rel="canonical" href="https://masterfix.ru/" />
        <meta property="og:title" content="МастерФикс — Ремонт бытовой техники в Москве" />
        <meta property="og:description" content="Профессиональный ремонт бытовой техники. Выезд мастера в день обращения. Гарантия 12 месяцев." />
        <meta property="og:url" content="https://masterfix.ru/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "МастерФикс",
          "description": "Профессиональный ремонт бытовой техники в Москве",
          "url": "https://masterfix.ru",
          "telephone": "+7-800-000-00-00",
          "email": "info@masterfix.ru",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "openingHours": "Mo-Su 08:00-22:00",
          "priceRange": "₽₽",
          "areaServed": "Москва и область",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5000"
          }
        })}</script>
      </Helmet>
      {/* Единый фон из марок на всю страницу */}
      <div className="fixed inset-0 select-none pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {BRAND_LIST.map((brand, i) => (
          <span
            key={i}
            className="absolute font-black uppercase tracking-widest text-foreground/[0.035] whitespace-nowrap"
            style={{
              fontSize: `${1.1 + (i % 5) * 0.45}rem`,
              top: `${(i * 137 + 11) % 100}%`,
              left: `${(i * 61 + 7) % 105 - 5}%`,
              transform: `rotate(${(i % 3 === 0 ? -12 : i % 3 === 1 ? 9 : -5)}deg)`,
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <Icon name="Star" size={14} />
              Более 5000 довольных клиентов
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Ремонт бытовой техники{" "}
              <span className="text-primary">любых брендов</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Профессиональный ремонт стиральных машин, холодильников, посудомоечных машин и другой бытовой техники. Выезд мастера в день обращения по Москве и области.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-base"
              >
                <Icon name="Phone" size={18} />
                Вызвать мастера
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground font-semibold px-6 py-3 rounded-xl hover:bg-muted transition-colors text-base"
              >
                Наши услуги
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Почему выбирают нас</h2>
              <p className="text-muted-foreground">Работаем честно и профессионально с 2014 года</p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <RevealSection key={i}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={a.icon} size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Что мы ремонтируем</h2>
                <p className="text-muted-foreground">Полный спектр ремонта бытовой техники</p>
              </div>
              <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-primary font-medium hover:underline text-sm">
                Все услуги <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <RevealSection key={i}>
                <Link
                  to="/services"
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all block"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={s.icon} size={20} className="text-primary" fallback="Settings" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Link>
              </RevealSection>
            ))}
          </div>
          <div className="mt-6 md:hidden text-center">
            <Link to="/services" className="inline-flex items-center gap-1 text-primary font-medium text-sm">
              Все услуги <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="relative py-16 border-y border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
              Ремонтируем технику брендов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((b) => (
                <span
                  key={b}
                  className="bg-muted text-foreground/70 font-semibold text-sm px-5 py-2.5 rounded-xl"
                >
                  {b}
                </span>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Техника сломалась? Позвоните прямо сейчас!
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Мастер приедет в течение 2 часов. Диагностика бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-7 py-3 rounded-xl hover:bg-white/90 transition-colors text-base"
              >
                <Icon name="Phone" size={18} />
                Оставить заявку
              </Link>
              <Link
                to="/reviews"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 rounded-xl hover:bg-white/10 transition-colors text-base"
              >
                Читать отзывы
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}