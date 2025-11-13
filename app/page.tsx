import Header from '@/components/Header'
import VentureStudio from '@/components/VentureStudio'
import ServicesEvents from '@/components/ServicesEvents'
import Strategy from '@/components/Strategy'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <section className="min-h-screen snap-start snap-always flex flex-col">
        <Header />
      </section>
      
      <section id="studio" className="min-h-screen snap-start snap-always flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-8">
          <VentureStudio />
        </div>
      </section>

      <section id="events" className="min-h-screen snap-start snap-always flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-8">
          <ServicesEvents />
        </div>
      </section>

      <section id="invest" className="min-h-screen snap-start snap-always flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-8">
          <Strategy />
        </div>
      </section>

      <section className="snap-start snap-always w-full">
        <Footer />
      </section>
    </main>
  )
}