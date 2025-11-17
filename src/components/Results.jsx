export default function Results() {
  const items = [
    { value: '+40%', label: 'осознанности действий через 1–2 недели' },
    { value: '+60%', label: 'выполнения целей через 3–4 недели' },
    { value: '+45%', label: 'уверенности в себе через 3 месяца' },
    { value: '6 месяцев', label: 'устойчивые привычки роста' },
  ]
  return (
    <section id="results" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Результаты и преимущества</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white text-center">
              <div className="text-4xl font-extrabold">{i.value}</div>
              <div className="text-white/80 mt-2">{i.label}</div>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 text-center text-white/80 max-w-2xl mx-auto">“UNITY — это зеркало, которое показывает, сколько хорошего уже есть в твоей жизни.” — Анна Каримова, основатель UNITY.</blockquote>
      </div>
    </section>
  )
}
