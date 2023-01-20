import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "/styles/globals.css";
import useSmoothScroll from "/library/hooks/useSmoothScroll";

export default function App({ Component, pageProps }: AppProps) {
  useSmoothScroll();
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

