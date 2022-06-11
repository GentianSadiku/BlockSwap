import { useState, useEffect } from "react";
import Card from "./Card";
import Information from "./Infomation";
import { query } from "../utils/constants";
import Artifacts from "../utils/Artifacts";
import "./Content.css";

const Content: React.FC = () => {
  const [artifacts, setArtifacts] = useState<Artifacts[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.thegraph.com/subgraphs/name/vince0656/brand-central",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      }
    );

    const data = await response.json();
    setArtifacts(data.data.tickers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Information />
      <div className="container block content">
        <div className="content__grid">
          {artifacts.map((artifact) => (
            <Card
              key={artifact.id}
              id={artifact.id}
              numberOfBidsReceived={artifact.numberOfBidsReceived}
              shbBid={artifact.shbBid}
              bidder={artifact.bidder}
              biddingEnd={artifact.biddingEnd}
            />
          ))}
        </div>
      </div>
      <a
        className="content__link"
        rel="noreferrer"
        href="https://etherscan.io/address/0x4ea67aebb61f7ff6e15e237c8b79d29c41f750fd"
        target="_blank"
      >
        Contract
      </a>
    </div>
  );
};

export default Content;
