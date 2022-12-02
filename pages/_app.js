import Header from '../components/header'
import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return <>
        <Head>
        <title>Blockchain Master - Next Gen Technology</title>
        <meta name="description" content="Blockchain Master - Next Gen Technology" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css" />
      </Head>
      <Script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></Script>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
