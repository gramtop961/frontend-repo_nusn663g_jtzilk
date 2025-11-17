export default function Footer() {
  return (
    <footer className="relative py-10 mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400" />
            <span className="text-white font-semibold">UNITY</span>
          </div>
          <div className="text-sm">© 2025 UNITY Team</div>
          <div className="text-sm flex items-center gap-4">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Контакты</a>
          </div>
        </div>
        <div className="text-center text-sm mt-4">Сделано с ❤ для людей, которые хотят замечать свой прогресс</div>
      </div>
    </footer>
  )
}
