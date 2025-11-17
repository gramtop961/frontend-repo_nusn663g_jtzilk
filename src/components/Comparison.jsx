export default function Comparison() {
  const headers = ['Обычный дневник', 'Трекер привычек', 'UNITY']
  const rows = [
    ['AI-анализ записей', '—', '—', '✓'],
    ['Персональные инсайты', '—', '△', '✓'],
    ['Автоматические PDF-книги', '—', '—', '✓'],
    ['Анализ эмоций', '—', '—', '✓'],
    ['Визуальные графики', '△', '✓', '✓'],
    ['Семейный режим', '—', '—', '✓'],
    ['Offline', '—', '△', '✓'],
    ['Telegram', '—', '—', '✓'],
  ]
  return (
    <section className="relative py-20" id="comparison">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">Почему UNITY лучше</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="min-w-full text-left text-white/90">
            <thead className="text-white/70">
              <tr>
                <th className="px-6 py-4">Функция</th>
                {headers.map((h) => (
                  <th key={h} className="px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c]) => (
                <tr key={label} className="border-t border-white/10">
                  <td className="px-6 py-4 text-white">{label}</td>
                  <td className="px-6 py-4">{a}</td>
                  <td className="px-6 py-4">{b}</td>
                  <td className="px-6 py-4 font-semibold text-white">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-white/70 mt-4">Только UNITY объединяет AI + книги + семейный режим.</p>
      </div>
    </section>
  )
}
