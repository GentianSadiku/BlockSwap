import { useContext } from "react";
import { BrandCentralContext } from "../context/NFTContext";
import { shortenAddress } from "../utils/shortenThings";
import "./Btn.css";

interface BtnProps {
  className?: string;
}

const Btn: React.FC<BtnProps> = ({ className }) => {
  const { accounts, connectWallet, walletConnected } =
    useContext(BrandCentralContext);

  return (
    <button className={`btn btn--primary ${className}`} onClick={connectWallet}>
      {walletConnected ? shortenAddress(accounts[0]) : "Connect Wallet"}
    </button>
  );
};

export default Btn;
