import Head from "next/head";
import "../styles/globals.scss";
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Coffee Market</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
