import Hero from "../components/Home/Hero";
import VideoSection from "../components/Home/VideoSection";
import Footer from "../components/layout/Footer";
import MoreInfo from "../components/Home/MoreInfo";
import Directory from "../components/Home/Directory";


function Home() {

  return (
    <div>
      <Hero />
      <VideoSection />
      <MoreInfo />
      <Directory />
      <Footer />
    </div>
  )
}


export default Home;