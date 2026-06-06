import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="text-white mt-auto" style={{ background: "hsl(215 55% 10%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Wrench" size={15} className="text-white" />
              </div>
              МастерФикс
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Профессиональный ремонт бытовой техники. Выезд мастера в день обращения.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3 text-white/90">Навигация</p>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Главная" },
                { to: "/services", label: "Услуги" },
                { to: "/about", label: "О нас" },
                { to: "/reviews", label: "Отзывы" },
                { to: "/contacts", label: "Контакты" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3 text-white/90">Контакты</p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Icon name="Phone" size={14} className="text-primary shrink-0" />
                +7 (800) 000-00-00
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Icon name="Mail" size={14} className="text-primary shrink-0" />
                info@masterfix.ru
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Icon name="MapPin" size={14} className="text-primary shrink-0" />
                Москва, выезд по всему городу
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Icon name="Clock" size={14} className="text-primary shrink-0" />
                Ежедневно 8:00 — 22:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-white/40">© 2024 МастерФикс. Все права защищены.</p>
          <p className="text-sm text-white/40">Гарантия на все работы 12 месяцев</p>
        </div>
      </div>
    </footer>
  )
}