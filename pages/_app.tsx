import "../styles/global.css";
import type { AppProps } from "next/app";
import ScrollToTop from "../components/global/ScrollToTop";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
// import en from "../lang/en.json";
import es from "../lang/es.json";
// import TheSidebar from "../components/global/TheSidebar";
import TheFooter from "../components/global/TheFooter";
import { useState, useEffect, useRef } from "react";
import LoadingBar from "../components/home/LoadingBar";
import TheNavbar from "../components/global/TheNavbar";
import { wrapper } from "../store";

const messages: any = {
  es,
  // en,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale }: { locale?: any } = useRouter();
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

  const loginRef = useRef();
  const registerRef = useRef();
  const resetRef = useRef();

  const showLogin = () => {
    console.log("showLogin");
    const flag = loginRef.current as unknown as any;
    flag.getAlert();
  };

  const showRegister = () => {
    console.log("showRegister");
    const flag = registerRef.current as unknown as any;
    flag.getAlert();
  };

  const showReset = () => {
    console.log("showReset");
    const flag = resetRef.current as unknown as any;
    flag.getAlert();
  };

  return (
    <>
      {loading ? <LoadingBar /> : ""}
      <IntlProvider
        locale={locale}
        messages={locale != undefined && messages[locale]}
      >
        <ScrollToTop>
          <TheNavbar
            loginRef={loginRef}
            showLogin={showLogin}
            registerRef={registerRef}
            showRegister={showRegister}
            resetRef={resetRef}
            showReset={showReset}
          />
          <Component
            {...pageProps}
            loading={loading}
            setLoading={setLoading}
            loginRef={loginRef}
            showLogin={showLogin}
          />
          <TheFooter showLogin={showLogin} />
        </ScrollToTop>
      </IntlProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
