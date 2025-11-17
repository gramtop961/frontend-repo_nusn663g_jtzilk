import { motion } from 'framer-motion'

const steps = [
  {
    icon: '📝',
    title: 'Фиксация (30 секунд)',
    text: 'Запиши мысль, маленькую победу или момент благодарности текстом, голосом или фото.'
  },
  {
    icon: '🤖',
    title: 'AI-анализ',
    text: 'AI видит эмоции, темы, паттерны поведения, помечает достижения.'
  },
  {
    icon: '📊',
    title: 'Визуализация',
    text: 'Карточки, графики, отчёты, прогресс — всё в одном экране.'
  },
  {
    icon: '💎',
    title: 'Привычка роста',
    text: 'Через 3–6 месяцев ты начинаешь естественно рефлексировать и принимать осознанные решения.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Вот как UNITY меняет всё</h2>
          <p className="text-white/70 mt-3">UNITY — не блокнот, а система осознанного роста.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-white/80">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
