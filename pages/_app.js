import { useRouter } from "next/router";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/globals.css";
import "../styles/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
