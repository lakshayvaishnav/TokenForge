import { useLocalStorage } from "@solana/wallet-adapter-react";
import { createContext, FC, ReactNode, useContext } from "react";

export interface NetworkConfigurationState {
  networkConfiguration: string;
  setNetworkConfiguration(networkConfiguration: string): void;
}

export const NetworkConfiguratonContext =
  createContext<NetworkConfigurationState>({} as NetworkConfigurationState);

// custom hook for network configuration.
export function useNetworkConfiguration(): NetworkConfigurationState {
  return useContext(NetworkConfiguratonContext);
}

export const NetworkConfigurationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [networkConfiguration, setNetworkConfiguration] = useLocalStorage(
    "network",
    "devnet"
  );

  return (
    <NetworkConfiguratonContext.Provider
      value={{ networkConfiguration, setNetworkConfiguration }}
    >
      {children}
    </NetworkConfiguratonContext.Provider>
  );
};
