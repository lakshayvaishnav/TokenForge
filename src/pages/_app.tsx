import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProviderWallet } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import Footer from "../components/Footer";
import Notifications from "../components/Notification";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="bg-default-900">
      <Head>
        <title>Solana token creator</title>
      </Head>
      <ContextProviderWallet>
        <Notifications />
        <AppBar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ContextProviderWallet>

      {/* script */}
      <script src="assets/lib/preline/preline.js"></script>
      <script src="assets/lib/swiper/swiper-bundle.min.js"></script>
      <script src="assets/lib/gumshoejs/gumshoe.polyfills.min.js"></script>
      <script src="assets/lib/lucide/lucide.min.js"></script>
      <script src="assets/lib/aos/aos.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/theme.js"></script>
    </div>
  );
};

export default App;
