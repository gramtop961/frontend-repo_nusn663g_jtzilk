import { Brain, Trophy, BarChart3, FileText, Users, WifiOff, MonitorSmartphone, Shield } from 'lucide-react'

const features = [
  { icon: Brain, title: 'AI-карточки и инсайты', text: 'Уважительные короткие тексты: celebrate / reflect / focus / gratitude / progress.' },
  { icon: Trophy, title: 'Раздел “Достижения”', text: 'Лента побед, уровни и мягкая геймификация без давления.' },
  { icon: BarChart3, title: 'Раздел “Отчёты”', text: 'Недельные и месячные отчёты с AI-обзором настроения и сфер жизни.' },
  { icon: FileText, title: 'PDF-книги достижений', text: 'Автоматические месячные, квартальные и годовые истории с фото и цитатами.' },
  { icon: Users, title: 'Семейный режим', text: 'Отдельные главы для каждого и общая книга семьи.' },
  { icon: WifiOff, title: 'Offline-режим (Premium)', text: 'Записывай без интернета — всё синхронизируется позже.' },
  { icon: MonitorSmartphone, title: 'Кроссплатформенность', text: 'Web/PWA, Telegram WebApp, в будущем iOS/Android.' },
  { icon: Shield, title: 'Полная приватность', text: 'Данные не продаются. Без рекламы.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Что внутри</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
