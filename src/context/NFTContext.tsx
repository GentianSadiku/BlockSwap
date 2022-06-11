import { useState, createContext } from "react";
// import { ethers } from "ethers";
// import { contractAddress, contractABI } from "../utils/constants";

declare var window: any;

interface NFTContextProps {
  accounts: string[];
  walletConnected: boolean;
  connectWallet: () => Promise<void>;
}

export const BrandCentralContext = createContext({} as NFTContextProps);

interface ChildrenProps {
  children: React.ReactNode;
}

export const NFTContextProvider = ({ children }: ChildrenProps) => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    // MetaMask requires requesting permission to connect users accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccounts(accounts);
    setWalletConnected(accounts.length === 0 ? false : true);
  };

  // When scaling we need to interact with the contract directly...
  // const getEthereumContract = () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const contract = new ethers.Contract(contractAddress, contractABI, signer);
  //   // setContract(contract);
  // };

  return (
    <BrandCentralContext.Provider
      value={{
        accounts,
        walletConnected,
        connectWallet,
      }}
    >
      {children}
    </BrandCentralContext.Provider>
  );
};
