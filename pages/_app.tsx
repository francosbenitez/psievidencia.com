import "../styles/default.css";
import type { AppProps } from "next/app";
import ScrollToTop from "../components/global/ScrollToTop";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import es from "../lang/es.json";
import TheSidebar from "../components/global/TheSidebar";
import TheFooter from "../components/home/TheFooter";
import { useState } from "react";

const messages: any = {
  en,
  es,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale }: { locale?: any } = useRouter();
  const [showFooter, setShowFooter] = useState<boolean>(true);

  return (
    <IntlProvider
      locale={locale}
      messages={locale != undefined && messages[locale]}
    >
      <ScrollToTop>
        <TheSidebar />
        <Component {...pageProps} />
        {showFooter && <TheFooter setShowFooter={setShowFooter} />}
      </ScrollToTop>
    </IntlProvider>
  );
}

export default MyApp;
