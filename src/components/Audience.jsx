export default function Audience() {
  const cards = [
    { title: 'Целеориентированные люди 25–45', text: 'Кто хочет видеть реальные шаги и держать фокус на важном.' },
    { title: 'Профессионалы и предприниматели', text: 'Кто измеряет прогресс и строит устойчивые привычки.' },
    { title: 'Осознанность и ментальное здоровье', text: 'Кто практикует рефлексию и заботится о себе.' },
    { title: 'Родители и семьи', text: 'Отслеживайте развитие детей и создавайте общие воспоминания.' },
  ]
  return (
    <section id="audience" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Для кого создан UNITY</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90">
              <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-white/80">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/70 mt-6">На самом деле UNITY — для любого, кто хочет видеть свой прогресс.</p>
      </div>
    </section>
  )
}
