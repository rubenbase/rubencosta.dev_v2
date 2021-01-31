import { AnimateSharedLayout } from 'framer-motion'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
