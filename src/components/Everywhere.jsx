import { Telegram, Monitor, Smartphone, RefreshCw } from 'lucide-react'

export default function Everywhere() {
  return (
    <section className="relative py-20" id="everywhere">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">UNITY везде, где ты</h2>
        <div className="grid md:grid-cols-4 gap-6 text-white/90">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-center text-center">
            <Telegram className="h-8 w-8 mb-3" />
            <div className="font-semibold text-white">Telegram WebApp</div>
            <p className="text-white/70 mt-1">Открывай UNITY прямо в Telegram.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-center text-center">
            <Monitor className="h-8 w-8 mb-3" />
            <div className="font-semibold text-white">Web / PWA</div>
            <p className="text-white/70 mt-1">Установи на главный экран и используй как приложение.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-center text-center">
            <Smartphone className="h-8 w-8 mb-3" />
            <div className="font-semibold text-white">Мобильное приложение</div>
            <p className="text-white/70 mt-1">Coming soon — App Store и Google Play.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-center text-center">
            <RefreshCw className="h-8 w-8 mb-3" />
            <div className="font-semibold text-white">Синхронизация</div>
            <p className="text-white/70 mt-1">Одна учётная запись на всех устройствах.</p>
          </div>
        </div>
        <p className="text-center text-white/70 mt-6">Одна учётная запись — все твои записи и книги всегда с тобой.</p>
      </div>
    </section>
  )
}
