import create, { State } from "zustand";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

interface UserSolBalanceStore extends State {
  balance: number;
  getUserSolBalance: (publickey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UserSolBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSolBalance: async (publickKey, connection) => {
    let balance = 0;
    try {
      balance = await connection.getBalance(publickKey, "confirmed");
      balance = balance / LAMPORTS_PER_SOL;
    } catch (error) {
      console.log(error);
    }
    set((s) => {
      s.balance = balance;
      console.log("balance is : ", balance);
    });
  },
}));
export default UserSolBalanceStore;
