export default function DayFlow() {
  const steps = [
    { title: 'Утро', text: '2 минуты: планы и мотивационная карточка.' },
    { title: 'День', text: '30 секунд на маленькую запись.' },
    { title: 'Вечер', text: '5–7 минут рефлексии и просмотр инсайтов.' },
    { title: 'Конец месяца', text: 'Автоматическая AI-книга достижений.' },
  ]
  return (
    <section className="relative py-20" id="day">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Как UNITY используется в течение дня</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90">
              <div className="text-2xl font-semibold text-white">{s.title}</div>
              <p className="text-white/80 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
