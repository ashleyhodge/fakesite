import '../styles/globals.css'
import Layout from '../components/layout/Layout'
// Wrap component in Layout tag so that Nav and Footer render on every page
function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
