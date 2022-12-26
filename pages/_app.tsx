import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Navbar } from '../Components/Navbar'
import '../styles/globals.css'

type NextPropsWithLayout = NextPage & {
  getLayout?: ( page:ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPropsWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
