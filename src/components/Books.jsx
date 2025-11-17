export default function Books() {
  const items = [
    'Месячные книги',
    'Квартальные обзоры',
    'Годовые сборники',
    'Семейные книги',
    'Выбор стиля (минималистичный, тёплый семейный, мотивационный)',
    'Редактирование текста и обложки, добавление фото',
  ]
  return (
    <section id="books" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-500/10 border border-white/10 p-10 md:p-14 text-white shadow-[0_10px_60px_rgba(59,130,246,0.15)]">
          <h2 className="text-3xl sm:text-4xl font-bold">📚 Твоя AI-книга достижений</h2>
          <p className="text-white/80 mt-3 text-lg">Каждый месяц UNITY собирает твой путь в красивую PDF-историю.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {items.map((t) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-4">{t}</div>
            ))}
          </div>
          <a href="#" className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90">Посмотреть пример книги</a>
        </div>
      </div>
    </section>
  )
}
