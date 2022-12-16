import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/layout/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="site-content-wrapper">
        <Main />
        </div>
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
