import { useEffect, useState } from 'react'
import { Check, Play, Star, Rocket, Phone, Mail, Clock, Shield } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white font-bold">VE</div>
          <div className="font-semibold text-slate-800">VideoEdit School</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#program" className="hover:text-slate-900 transition">Программа</a>
          <a href="#prices" className="hover:text-slate-900 transition">Тарифы</a>
          <a href="#reviews" className="hover:text-slate-900 transition">Отзывы</a>
          <a href="#form" className="hover:text-slate-900 transition">Записаться</a>
        </nav>
        <a href="#form" className="px-4 py-2 text-sm font-medium rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Пробный урок</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm mb-4">
            <Rocket size={16}/> Старт за 7 дней
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Курсы по монтажу видео c нуля до PRO
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            Освойте востребованную профессию видеомонтажера, собирайте проекты для портфолио и начинайте зарабатывать на фрилансе.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#form" className="px-5 py-3 rounded-md bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold shadow hover:shadow-md transition">Записаться на курс</a>
            <a href="#prices" className="px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold">Смотреть тарифы</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-600">
            <div className="flex items-center gap-1"><Star className="text-yellow-500" size={18}/> 4.9 рейтинг</div>
            <div className="flex items-center gap-1"><Clock size={18}/> 2–10 недель</div>
            <div className="flex items-center gap-1"><Shield size={18}/> Гарантия возврата 7 дней</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-200 to-blue-200 p-2 shadow-lg">
            <div className="w-full h-full rounded-lg bg-black/90 grid place-items-center text-white">
              <Play className="opacity-80"/>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow p-3 border border-slate-100">
            <div className="text-sm font-medium">Более 1200 учеников</div>
            <div className="text-xs text-slate-500">сделали первые проекты</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Program() {
  const items = [
    {title: 'Монтаж в Premiere Pro', desc: 'Интерфейс, таймлайн, монтаж по музыке, работа со звуком'},
    {title: 'Цветокоррекция', desc: 'Баланс белого, LUTs, базовые приёмы и стилизация'},
    {title: 'Motion-графика', desc: 'Титры, lower thirds, простая анимация в After Effects'},
    {title: 'Экспорт и форматы', desc: 'Кодеки, пресеты, оптимизация под соцсети'},
  ]
  return (
    <section id="program" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900">Программа обучения</h2>
        <p className="text-slate-600 mt-2">Только практические навыки, которые пригодятся на реальных проектах</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white shadow-sm hover:shadow transition">
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

function PriceCard({p, onSelect}) {
  return (
    <div className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition flex flex-col">
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
      <div className="mt-6 text-3xl font-extrabold">{Math.round(p.price)}$</div>
      <button onClick={() => onSelect(p)} className="mt-4 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Выбрать тариф</button>
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
        <h2 className="text-3xl font-bold text-slate-900">Тарифы</h2>
        <p className="text-slate-600 mt-2">Выберите подходящий формат обучения</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map(p => (
            <PriceCard key={p.id} p={p} onSelect={onSelect}/>
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
    <section id="form" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Запишитесь на бесплатный урок</h2>
          <p className="text-slate-600 mt-2">Мы свяжемся с вами, уточним цели и поможем выбрать программу</p>
          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex items-center gap-2"><Phone size={18}/> Поддержка в чате 24/7</div>
            <div className="flex items-center gap-2"><Mail size={18}/> Доступ к материалам навсегда</div>
            <div className="flex items-center gap-2"><Shield size={18}/> Гарантия возврата средств 7 дней</div>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="grid gap-4">
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required placeholder="Имя" className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-purple-500"/>
            <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-purple-500"/>
            <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Телефон" className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-purple-500"/>
            <input value={form.course_id} onChange={e=>setForm({...form, course_id:e.target.value})} placeholder="ID курса (необязательно)" className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-purple-500"/>
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Ваши цели" rows="4" className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-purple-500"/>
            <button className="px-4 py-3 rounded-md bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold">Отправить</button>
            {status === 'loading' && <p className="text-slate-500">Отправляем...</p>}
            {status === 'success' && <p className="text-green-600">Спасибо! Мы скоро свяжемся с вами.</p>}
            {status === 'error' && <p className="text-red-600">Ошибка. Попробуйте ещё раз.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header/>
      <Hero/>
      <Program/>
      <Prices onSelect={setSelected}/>
      <LeadForm selected={selected}/>
      <Footer/>
    </div>
  )
}

export default App
