import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <>
  {//El script es para google analitycs
  }
  {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_KEY}"/>
  <Script id="google analytics"strategy="afterInteractive">
    {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_KEY}');
    `}
  </Script> */}
  {getLayout(<Component {...pageProps} />)}
  </>
}

export default MyApp