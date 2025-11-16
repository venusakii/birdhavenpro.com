import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 text-balance">
                О BirdHavenPro
              </h1>
              <p className="text-xl text-foreground/70 text-pretty">
                Ваш гид в мире звуков для идеального сна
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-3xl font-serif text-primary mb-4">Наша история</h2>
                <p className="text-foreground/80 leading-relaxed">
                  BirdHavenPro родился из простой идеи: каждый заслуживает спокойный, качественный сон. Мы начали своё путешествие в 2020 году, когда поняли, что правильные звуки могут изменить жизнь к лучшему.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="text-2xl font-serif text-primary mb-3">Наша миссия 🎯</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Помогать людям по всему миру обрести спокойствие и качественный отдых через силу правильно подобранных звуков.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="text-2xl font-serif text-secondary mb-3">Наши ценности ⭐</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Честность в обзорах, качество рекомендаций и искренняя забота о каждом пользователе нашего сайта.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-3xl font-serif text-primary mb-4">Что мы делаем</h2>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Тестируем и оцениваем звуковые машины для сна</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Создаём честные и подробные обзоры</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Помогаем выбрать идеальное устройство для ваших нужд</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Делимся научными исследованиями о пользе белого шума</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
