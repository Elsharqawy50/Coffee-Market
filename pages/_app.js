import Head from "next/head";
import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Coffee Market</title>
        </Head>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
