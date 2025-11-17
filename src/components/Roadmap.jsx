export default function Roadmap() {
  const items = [
    { time: 'Сейчас', text: 'PWA + AI-аналитика + первые PDF-книги' },
    { time: 'Q1–Q2 2026', text: 'Полноценные мобильные приложения' },
    { time: 'Q3 2026', text: 'AI-коучинг, глубокая персонализация' },
    { time: '2026+', text: 'UNITY Life OS — экосистема роста, комьюнити, курсы, коучинг' },
  ]
  return (
    <section id="roadmap" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">План развития</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.time} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90">
              <div className="text-sm uppercase tracking-wide text-white/60">{i.time}</div>
              <div className="text-white mt-2 font-medium">{i.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
