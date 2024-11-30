import Layout from "@/Layout";
// import "@";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import '../styles/App.css';
export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
