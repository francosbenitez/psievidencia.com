import "../styles/global.css";
import type { AppProps } from "next/app";
import ScrollToTop from "../components/global/ScrollToTop";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import es from "../lang/es.json";
import TheSidebar from "../components/global/TheSidebar";
import TheFooter from "../components/home/TheFooter";
import { useState, useEffect } from "react";
import LoadingBar from "../components/home/LoadingBar";

const messages: any = {
  en,
  es,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale }: { locale?: any } = useRouter();
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.events]);

  return (
    <>
      {loading ? <LoadingBar /> : ""}
      <IntlProvider
        locale={locale}
        messages={locale != undefined && messages[locale]}
      >
        <ScrollToTop>
          <TheSidebar />
          <Component {...pageProps} loading={loading} setLoading={setLoading} />
          {showFooter && <TheFooter setShowFooter={setShowFooter} />}
        </ScrollToTop>
      </IntlProvider>
    </>
  );
}

export default MyApp;
