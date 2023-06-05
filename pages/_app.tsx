import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { GeistProvider, CssBaseline } from '@geist-ui/core'

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <GeistProvider>
      <CssBaseline /> 
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </GeistProvider>
  );
}

export default App;
