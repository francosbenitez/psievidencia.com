import { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const location = router;

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

export default ScrollToTop;
