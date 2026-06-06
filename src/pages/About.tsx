import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const stats = [
  { value: "10+", label: "Лет на рынке" },
  { value: "5 000+", label: "Выполненных ремонтов" },
  { value: "12 мес", label: "Гарантия на работы" },
  { value: "2 часа", label: "Время выезда мастера" },
]

const team = [
  { name: "Алексей Смирнов", role: "Старший инженер", exp: "8 лет опыта", icon: "User" },
  { name: "Дмитрий Козлов", role: "Специалист по холодильникам", exp: "6 лет опыта", icon: "User" },
  { name: "Иван Петров", role: "Специалист по стиральным машинам", exp: "5 лет опыта", icon: "User" },
  { name: "Сергей Волков", role: "Мастер встраиваемой техники", exp: "7 лет опыта", icon: "User" },
]

const values = [
  { icon: "Shield", title: "Честность", desc: "Называем стоимость до начала ремонта. Никаких скрытых платежей." },
  { icon: "Zap", title: "Скорость", desc: "Выезжаем в день обращения, большинство ремонтов — за один визит." },
  { icon: "Award", title: "Качество", desc: "Используем только оригинальные и сертифицированные запчасти." },
  { icon: "HeartHandshake", title: "Забота", desc: "Объясняем причину поломки и даём советы по уходу за техникой." },
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

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-background to-background py-14 md:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О нас</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              МастерФикс — команда опытных инженеров по ремонту бытовой техники. С 2014 года мы помогаем жителям Москвы и области вернуть технику к жизни быстро и без лишних затрат.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Наша история</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Компания МастерФикс основана в 2014 году группой инженеров с многолетним опытом в сфере ремонта бытовой техники. Мы начинали с небольшой мастерской, а сегодня — это команда из 12 специалистов, которые ежедневно выезжают по всей Москве и области.
                </p>
                <p>
                  За эти годы мы отремонтировали более 5 000 единиц техники различных брендов: от простых стиральных машин до сложных встраиваемых систем. Каждый наш мастер проходит регулярное обучение и сертификацию.
                </p>
                <p>
                  Мы гордимся тем, что 70% клиентов возвращаются к нам повторно и рекомендуют нас своим знакомым. Это лучший показатель качества нашей работы.
                </p>
              </div>
            </RevealSection>
            <RevealSection>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "CheckCircle", text: "Сертифицированные специалисты" },
                  { icon: "CheckCircle", text: "Оригинальные запчасти" },
                  { icon: "CheckCircle", text: "Официальная гарантия" },
                  { icon: "CheckCircle", text: "Выезд по Москве и МО" },
                  { icon: "CheckCircle", text: "Ремонт на дому" },
                  { icon: "CheckCircle", text: "Работаем без выходных" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-secondary/50 rounded-xl p-4">
                    <Icon name={item.icon} size={18} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Наши принципы</h2>
              <p className="text-muted-foreground">То, на чём строится наша работа каждый день</p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealSection key={i}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={v.icon} size={20} className="text-primary" fallback="Star" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Наша команда</h2>
              <p className="text-muted-foreground">Опытные мастера с многолетней практикой</p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <RevealSection key={i}>
                <div className="text-center border border-border rounded-2xl p-6 hover:shadow-sm transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{m.name}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{m.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.exp}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Доверьте ремонт профессионалам</h2>
          <p className="text-white/80 mb-6">Выезд мастера сегодня, оплата после ремонта</p>
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