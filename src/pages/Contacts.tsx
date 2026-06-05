import { useState, type FormEvent } from "react"
import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const contacts = [
  { icon: "Phone", label: "Телефон", value: "+7 (800) 000-00-00", href: "tel:+78000000000" },
  { icon: "Mail", label: "Email", value: "info@masterfix.ru", href: "mailto:info@masterfix.ru" },
  { icon: "MapPin", label: "Адрес", value: "Москва и Московская область", href: null },
  { icon: "Clock", label: "Режим работы", value: "Ежедневно 8:00 — 22:00", href: null },
]

const faqs = [
  {
    q: "Сколько стоит диагностика?",
    a: "Диагностика бесплатна при условии выполнения ремонта. Если вы решите не делать ремонт — диагностика стоит 300 ₽.",
  },
  {
    q: "Как быстро приедет мастер?",
    a: "В большинстве случаев мастер приезжает в день обращения, в удобное для вас время. Среднее время ожидания — 2 часа.",
  },
  {
    q: "Какая гарантия на ремонт?",
    a: "Мы даём гарантию 12 месяцев на все виды выполненных работ и используемые запчасти.",
  },
  {
    q: "Вы используете оригинальные запчасти?",
    a: "Да, мы работаем только с оригинальными и сертифицированными запчастями от проверенных поставщиков.",
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

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", tech: "", problem: "" })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSuccess(true)
    setForm({ name: "", phone: "", tech: "", problem: "" })
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-14 md:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Контакты</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Оставьте заявку — мастер перезвонит в течение 15 минут и согласует удобное время
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <RevealSection>
              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-1">Оставить заявку</h2>
                <p className="text-muted-foreground text-sm mb-6">Мастер перезвонит в течение 15 минут</p>

                {success ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="CheckCircle" size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Заявка отправлена!</h3>
                    <p className="text-muted-foreground text-sm">
                      Мастер позвонит вам в течение 15 минут и согласует удобное время визита.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Ваше имя *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Телефон *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Тип техники</label>
                      <select
                        value={form.tech}
                        onChange={(e) => setForm({ ...form, tech: e.target.value })}
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                      >
                        <option value="">Выберите технику</option>
                        <option>Стиральная машина</option>
                        <option>Холодильник</option>
                        <option>Посудомоечная машина</option>
                        <option>Варочная панель / духовка</option>
                        <option>Сушильная машина</option>
                        <option>Кофемашина</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Опишите проблему</label>
                      <textarea
                        rows={3}
                        value={form.problem}
                        onChange={(e) => setForm({ ...form, problem: e.target.value })}
                        placeholder="Расскажите, что случилось с техникой..."
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Icon name="Loader2" size={18} className="animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={18} />
                          Отправить заявку
                        </>
                      )}
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                )}
              </div>
            </RevealSection>

            {/* Info */}
            <div className="space-y-6">
              <RevealSection>
                <div className="space-y-4">
                  {contacts.map((c, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name={c.icon} size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection>
                <div className="border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon name="HelpCircle" size={18} className="text-primary" />
                    Частые вопросы
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((f, i) => (
                      <div key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <p className="font-medium text-foreground text-sm mb-1">{f.q}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
