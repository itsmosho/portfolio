import '../styles/globals.css'
import Navbar from '../components/navbar.js'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
</>
}
