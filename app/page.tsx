import Header from "@/components/Header";
import VentureStudio from "@/components/VentureStudio";
import ServicesEvents from "@/components/ServicesEvents";
import Strategy from "@/components/Strategy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center">
      <Header />
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 space-y-8">
        <VentureStudio />
        <ServicesEvents />
        <Strategy />
      </div>

      <Footer />
    </main>
  );
}
