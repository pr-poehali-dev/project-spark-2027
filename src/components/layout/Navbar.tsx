import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Icon from "@/components/ui/icon"

const links = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги" },
  { to: "/about", label: "О нас" },
  { to: "/reviews", label: "Отзывы" },
  { to: "/contacts", label: "Контакты" },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Wrench" size={18} className="text-white" />
          </div>
          <span>МастерФикс</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contacts"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Icon name="Phone" size={15} />
          Вызвать мастера
        </Link>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium mt-1 transition-colors ${
                pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacts"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="Phone" size={15} />
            Вызвать мастера
          </Link>
        </div>
      )}
    </header>
  )
}