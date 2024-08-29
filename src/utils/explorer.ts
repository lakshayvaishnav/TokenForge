import { PublicKey, Transaction } from "@solana/web3.js";

export function getExplorerUrl(
  endpoint: String,
  viewTypeOrItemAddress: "inspector" | PublicKey | String,
  itemType = "address"
) {
  const getClusterUrlParam = () => {
    let cluster = "";
    if (endpoint === "localnet") {
      // ! might give error
      cluster = `custome&customeUrl=${encodeURIComponent(
        "http://127.0.0.1:8899"
      )}`;
    } else if (endpoint == "https://api.devnet.solana.com") {
      cluster = "devnet";
    }

    return cluster ? `?cluster=${cluster}` : "";
  };

  return `https://explorer.solana.com/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`;
}
