export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur p-10 md:p-14 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">Готов начать замечать свой прогресс?</h2>
          <p className="text-white/80 mt-3">UNITY бесплатно на старте. Никаких карт, никаких обязательств — только практика осознанности.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#" className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90">Начать бесплатно</a>
            <a href="#" className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15">Открыть UNITY в Telegram</a>
          </div>
          <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Введите email" className="w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">Получить доступ</button>
          </form>
        </div>
      </div>
    </section>
  )
}
