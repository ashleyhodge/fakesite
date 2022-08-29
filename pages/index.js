import Hero from "../components/Home/Hero";
import VideoSection from "../components/Home/VideoSection";
import Footer from "../components/layout/Footer";
import MoreInfo from "../components/Home/MoreInfo";
import Directory from "../components/Home/Directory";



function Home({ results }) {
  console.log(results)
  return (
    <div>
      <Hero />
      <VideoSection />
      <MoreInfo />
      <Directory />
    </div>
  )
}



export async function getServerSideProps(){
  let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo("5fb9cfdda4599501003805025c6a03808577076b", "d8rhLRqeTI+Ok6GnzhMNFRerIlHJGhgVMJEs9KirURkoIREj4AOTKzsCpXu5Z1MJWsKEoNaA8B5AeSEyVSSG7XNHYyyAgeUeHcfoX4koKK/3SSry6LWga0ovPD8uTM5U", "c49677cab97d8a9a16e3153bb60a1fd7");

  client.request ({
    method: 'GET',
    path: '/videos/533757272'
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  })

  const data = await client.request.json();
  return {
    props: {
      results: data
    }
  }
}

export default Home;