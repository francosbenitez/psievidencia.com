import "../styles/default.css";
import type { AppProps } from "next/app";
import ScrollToTop from "../components/global/ScrollToTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollToTop>
      <Component {...pageProps} />
    </ScrollToTop>
  );
}

export default MyApp;
