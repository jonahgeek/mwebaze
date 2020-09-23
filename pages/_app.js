import Head from "next/head";

import "../styles/base.css";

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          property="og:title"
          content={title || `Jonahgeek, code & design`}
        />
        <meta property="og:site_name" content="Jonahgeek, code & design" />
        <meta
          property="og:description"
          content={
            og ? og.description : `Writing about random hopefully useful stuff`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jonahgeek" />
        <meta
          property="og:image"
          content={og ? og.image : `https://mwebaze.me/og/default.png`}
        />
        <meta name="monetization" content="$ilp.uphold.com/iRX2HpJ4FRQ3" />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

        <title>{title || `Jonahgeek, code & design`}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossorigin="anonymous"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
