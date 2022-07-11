import "../styles/default.css";
import type { AppProps } from "next/app";
import ScrollToTop from "../components/global/ScrollToTop";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import es from "../lang/es.json";

const messages = {
  en,
  es,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ScrollToTop>
        <Component {...pageProps} />
      </ScrollToTop>
    </IntlProvider>
  );
}

export default MyApp;
