import { useEffect, useState } from 'react'
import { Check, Play, Star, Rocket, Phone, Mail, Clock, Shield, ArrowRight, Users, Quote } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 border-b border-black/5 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 grid place-items-center text-white font-bold shadow-sm">VE</div>
          <div className="font-semibold text-slate-800">VideoEdit School</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#program" className="hover:text-slate-900 transition">Программа</a>
          <a href="#prices" className="hover:text-slate-900 transition">Тарифы</a>
          <a href="#reviews" className="hover:text-slate-900 transition">Отзывы</a>
          <a href="#form" className="hover:text-slate-900 transition">Записаться</a>
        </nav>
        <a href="#form" className="group px-4 py-2 text-sm font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center gap-1">Пробный урок <ArrowRight size={16} className="transition -translate-x-0.5 group-hover:translate-x-0.5"/></a>
      </div>
    </header>
  )
}

function GradientBG() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/40 to-blue-400/40 blur-3xl"/>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-purple-400/30 to-cyan-400/30 blur-3xl"/>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-[40rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),rgba(255,255,255,0))]"/>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <GradientBG/>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-purple-700 text-sm mb-4 border border-purple-200">
            <Rocket size={16}/> Старт за 7 дней
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Освойте монтаж видео от нуля до <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">PRO</span>
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            Практический курс с реальными проектами, кураторской поддержкой и портфолио к выпуску.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#form" className="px-5 py-3 rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition inline-flex items-center gap-2">Записаться на курс <ArrowRight size={18}/></a>
            <a href="#prices" className="px-5 py-3 rounded-xl border border-slate-200/60 bg-white/70 backdrop-blur text-slate-700 hover:bg-white hover:border-slate-300 font-semibold">Смотреть тарифы</a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-slate-600">
            <div className="flex items-center gap-1"><Star className="text-yellow-500" size={18}/> 4.9 рейтинг</div>
            <div className="flex items-center gap-1"><Clock size={18}/> 2–10 недель</div>
            <div className="flex items-center gap-1"><Shield size={18}/> 7 дней гарантия</div>
            <div className="flex items-center gap-1"><Users size={18}/> 1200+ учеников</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-2 shadow-xl border border-white/60 backdrop-blur">
            <div className="w-full h-full rounded-xl bg-slate-900/95 grid place-items-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.2),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_40%)]"/>
              <Play className="opacity-90"/>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-xl shadow p-3 border border-slate-100">
            <div className="text-sm font-medium">Более 1200 учеников</div>
            <div className="text-xs text-slate-500">прошли курс и нашли проекты</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({title, subtitle}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="text-slate-600 mt-2">{subtitle}</p>}
    </div>
  )
}

function Program() {
  const items = [
    {title: 'Монтаж в Premiere Pro', desc: 'Интерфейс, таймлайн, монтаж по музыке, работа со звуком'},
    {title: 'Цветокоррекция', desc: 'Баланс белого, LUTs, стилизация и экспресс-градинг'},
    {title: 'Motion-графика', desc: 'Титры, lower thirds, простая анимация в After Effects'},
    {title: 'Экспорт и форматы', desc: 'Кодеки, пресеты, оптимизация под соцсети'},
  ]
  return (
    <section id="program" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Программа обучения" subtitle="Только практические навыки, которые пригодятся на реальных проектах"/>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-white/80 backdrop-blur shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-600"><Check/></div>
                <div>
                  <div className="font-semibold text-slate-900">{it.title}</div>
                  <div className="text-slate-600 text-sm mt-1">{it.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PriceCard({p, onSelect, featured=false}) {
  return (
    <div className={`${featured ? 'bg-gradient-to-b from-white via-white to-slate-50 border-purple-200' : 'bg-white/80'} p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex flex-col relative` }>
      {featured && (
        <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow">Популярный</div>
      )}
      <div className="text-sm text-slate-500">{p.level}</div>
      <div className="text-xl font-bold text-slate-900 mt-1">{p.title}</div>
      <div className="text-slate-600 mt-2">{p.subtitle}</div>
      <div className="mt-4 space-y-2">
        {p.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-700 text-sm">
            <Check className="text-green-600" size={18}/> {f}
          </div>
        ))}
      </div>
      <div className="mt-6 text-3xl font-extrabold tracking-tight">{Math.round(p.price)}$</div>
      <button onClick={() => onSelect(p)} className={`mt-4 px-4 py-2 rounded-xl font-semibold ${featured ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-95' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>Выбрать тариф</button>
    </div>
  )
}

function Prices({onSelect}) {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/courses`).then(r=>r.json()).then(setPlans).catch(()=>{})
  }, [])
  return (
    <section id="prices" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Тарифы" subtitle="Выберите подходящий формат обучения"/>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map((p, idx) => (
            <PriceCard key={p.id} p={p} onSelect={onSelect} featured={idx === 1}/>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {name: 'Анна', role: 'SMM-специалист', text: 'За 6 недель собрала портфолио из 5 роликов. Первый заказ пришёл в день защиты проекта.'},
    {name: 'Михаил', role: 'Фрилансер', text: 'Понял структуру монтажа и работу со звуком. Теперь беру заказы дороже в 2 раза.'},
    {name: 'Лиза', role: 'Junior монтажёр', text: 'Куратор каждую неделю давал развёрнутую обратную связь — прогресс очевиден.'},
  ]
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Отзывы учеников" subtitle="Реальные результаты после прохождения курса"/>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
              <div className="text-purple-600 mb-3"><Quote/></div>
              <p className="text-slate-700">{it.text}</p>
              <div className="mt-4 text-sm text-slate-500">{it.name} · {it.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeadForm({selected}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', course_id: selected?.id || '' })
  const [status, setStatus] = useState(null)

  useEffect(()=>{
    setForm(f => ({...f, course_id: selected?.id || ''}))
  }, [selected])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Ошибка отправки')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '', course_id: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="form" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle title="Запишитесь на бесплатный урок" subtitle="Свяжемся, уточним цели и поможем выбрать программу"/>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-700">
            <div className="flex items-center gap-2"><Phone size={18}/> Поддержка в чате 24/7</div>
            <div className="flex items-center gap-2"><Mail size={18}/> Доступ к материалам навсегда</div>
            <div className="flex items-center gap-2"><Shield size={18}/> Гарантия 7 дней</div>
            <div className="flex items-center gap-2"><Star size={18} className="text-yellow-500"/> 4.9 рейтинг</div>
          </div>
        </div>
        <form onSubmit={submit} className="relative bg-white/80 backdrop-blur p-6 rounded-2xl border shadow-sm">
          <div className="absolute inset-0 rounded-2xl -z-10"/>
          <div className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required placeholder="Имя" className="w-full px-4 py-3 rounded-xl border outline-none bg-white focus:ring-2 focus:ring-purple-500"/>
              <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border outline-none bg-white focus:ring-2 focus:ring-purple-500"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Телефон" className="w-full px-4 py-3 rounded-xl border outline-none bg-white focus:ring-2 focus:ring-purple-500"/>
              <input value={form.course_id} onChange={e=>setForm({...form, course_id:e.target.value})} placeholder="ID курса (необязательно)" className="w-full px-4 py-3 rounded-xl border outline-none bg-white focus:ring-2 focus:ring-purple-500"/>
            </div>
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Ваши цели" rows="4" className="w-full px-4 py-3 rounded-xl border outline-none bg-white focus:ring-2 focus:ring-purple-500"/>
            <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 text-white font-semibold shadow hover:opacity-95">Отправить</button>
            {status === 'loading' && <p className="text-slate-500">Отправляем...</p>}
            {status === 'success' && <p className="text-green-600">Спасибо! Мы скоро свяжемся с вами.</p>}
            {status === 'error' && <p className="text-red-600">Ошибка. Попробуйте ещё раз.</p>}
          </div>
          <p className="mt-3 text-xs text-slate-500">Отправляя форму, вы соглашаетесь с обработкой персональных данных.</p>
        </form>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    {q: 'Нужен ли опыт?', a: 'Нет, подойдёт новичкам. Стартуем с базовых инструментов и постепенно усложняем задачи.'},
    {q: 'Сколько времени требуется?', a: 'От 3 до 7 часов в неделю. Есть гибкий график и записи всех занятий.'},
    {q: 'Будет ли сертификат?', a: 'Да, после защиты итогового проекта выдаём именной сертификат.'},
  ]
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Частые вопросы"/>
        <div className="mt-8 space-y-3">
          {items.map((it, i) => (
            <details key={i} className="group rounded-xl border bg-white/80 backdrop-blur p-4 open:shadow-sm">
              <summary className="cursor-pointer font-medium text-slate-900 flex items-center justify-between">
                {it.q}
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-2 text-slate-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
        <div>© {new Date().getFullYear()} VideoEdit School</div>
        <div className="flex items-center gap-6">
          <a href="#program" className="hover:text-slate-900">Программа</a>
          <a href="#prices" className="hover:text-slate-900">Тарифы</a>
          <a href="#form" className="hover:text-slate-900">Записаться</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="min-h-screen relative bg-[linear-gradient(120deg,#faf5ff,white_40%,#eff6ff)]">
      <Header/>
      <Hero/>
      <Program/>
      <Prices onSelect={setSelected}/>
      <Testimonials/>
      <LeadForm selected={selected}/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
