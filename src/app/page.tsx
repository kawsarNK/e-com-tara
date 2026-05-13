import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
// import LiveDemo from '../components/LiveDemo';
import Pricing from '../components/Pricing';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      {/* <LiveDemo /> */}
      <Pricing />
      {/* <Footer /> */}
    </main>
  );
}