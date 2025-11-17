import { AlertTriangle, EyeOff, Frown, BatteryLow, Waves, CalendarX2 } from 'lucide-react'

const items = [
  { icon: AlertTriangle, title: 'Информационная перегрузка', text: 'Слишком много сигналов, сложно сфокусироваться.' },
  { icon: EyeOff, title: 'Не замечаешь прогресс', text: 'Результаты есть, но они теряются в рутине.' },
  { icon: Frown, title: 'Низкая самооценка', text: 'Кажется, что «я ничего не достигаю».', },
  { icon: BatteryLow, title: 'Нет мотивации продолжать', text: 'Сложно держать темп без видимых результатов.' },
  { icon: Waves, title: 'Эмоциональные качели', text: 'Настроение скачет — непонятно почему.' },
  { icon: CalendarX2, title: 'Нет системы и привычки', text: 'Не получается регулярно фиксировать важное.' },
]

export default function Problems() {
  return (
    <section className="relative py-20" id="problems">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Узнаёшь себя?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90 shadow-[0_2px_30px_rgba(0,0,0,0.35)]">
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
