import Hero from "../components/Home/Hero";
import VideoSection from "../components/Home/VideoSection";
import Footer from "../components/layout/Footer";
import Head from 'next/head'

function Home() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <Footer />
    </div>
  )
}


export default Home;