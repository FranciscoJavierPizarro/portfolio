import Head from "next/head"

export default function Meta({ title }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Computer Science Engineering student"/>
      <meta name="keywords" content="Computer Science, Developer, Student" />
      <meta property="og:title" content="Francisco Javier Pizarro"/>
      <meta property="og:description" content="Computer Science Engineering student"/>
      <meta property="og:url" content="https://jpizarro.vercel.app"/>
      <meta property="og:type" content="website"/>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Francisco Javier Pizarro",
}