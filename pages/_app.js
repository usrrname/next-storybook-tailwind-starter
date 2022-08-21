import '../styles/globals.css'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const { router } = useRouter()
  // example of router-specific logic
  if (router?.pathname === '/') {
    router.replace('/home')
  }

  return <Component {...pageProps} />
}

export default App
