import { Layout } from "../Context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import "../custom.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
