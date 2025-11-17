import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight"
            >
              UNITY — твой AI-дневник достижений и осознанности ✨
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl"
            >
              Замечай свой прогресс, получай мудрые AI-инсайты и создавай красивые PDF-книги о своём пути и пути семьи.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 space-y-3 text-white/80"
            >
              {[
                '30 секунд на запись — всю аналитику сделает AI',
                'Видимый прогресс в графиках и карточках',
                'Автоматические книги достижений каждый месяц и год',
                'Работает в браузере, как PWA и через Telegram',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#cta" className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow hover:bg-white/90">
                Начать бесплатно
              </a>
              <a href="#how" className="px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/15">
                Посмотреть, как это работает
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
