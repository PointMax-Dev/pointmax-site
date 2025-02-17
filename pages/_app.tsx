import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";  // ✅ Import Head for favicon
import { Assistant } from "next/font/google";

// ✅ Correctly Import Google Font
const assistant = Assistant({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={assistant.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
