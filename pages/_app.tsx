import type { AppProps } from "next/app";
import "typeface-dm-sans";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
