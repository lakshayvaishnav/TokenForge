// import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";

// import { WalletModalProvider as ReactUIWalletModalProvider } from "@solana/wallet-adapter-react-ui";

// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
//   SolletExtensionWalletAdapter,
//   SolletWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets";

// import { Cluster, clusterApiUrl } from "@solana/web3.js";

// import { FC, ReactNode, useCallback, useMemo } from "react";

// import { AutoConnectProvider } from "./AutoConnectProvider";
// import { useAutoConnect } from "./AutoConnectProvider";

// import { notify } from "../utils/notifications";

// import {
//   NetworkConfigurationProvider,
//   useNetworkConfiguration,
// } from "./NetworkConfigurationProvider";

// const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const autoconnect = useAutoConnect();
//   const { networkConfiguration } = useNetworkConfiguration();
//   const network = networkConfiguration as WalletAdapterNetwork;

//   const originalEndPoint = useMemo(() => clusterApiUrl(network), [network]);

//   let endpoint;

//   if (network === "mainnet-beta") {
//     endpoint = "URL";
//   } else if (network == "devnet") {
//     endpoint = originalEndPoint;
//   } else {
//     endpoint = originalEndPoint;
//   }

//   const wallets = useMemo(
//     () => [
//       new PhantomWalletAdapter(),
//       new SolletWalletAdapter(),
//       new SolflareWalletAdapter(),
//       new SolletExtensionWalletAdapter(),
//       new TorusWalletAdapter(),
//     ],
//     [network]
//   );

//   const onError = useCallback((error: WalletError) => {
//     // @ts-ignore
//     notify({
//       type: "error",
//       message: error.message ? `${error.name} : ${error.message}` : error.name,
//     });
//     console.error(error);
//   }, []);

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} onError={onError} autoConnect>
//         <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// export const ContextProviderWallet: FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   return (
//     <>
//       <NetworkConfigurationProvider>
//         <AutoConnectProvider>
//           <WalletContextProvider>{children}</WalletContextProvider>
//         </AutoConnectProvider>
//       </NetworkConfigurationProvider>
//     </>
//   );
// };

// components/ContextProviderWallet.tsx

import { FC, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = clusterApiUrl("devnet");

  const wallets = [
    new PhantomWalletAdapter(),
    new SolletWalletAdapter(),
    new SolflareWalletAdapter(),
    new SolletExtensionWalletAdapter(),
    new TorusWalletAdapter(),
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProviderWallet: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <WalletContextProvider>{children}</WalletContextProvider>;
};
