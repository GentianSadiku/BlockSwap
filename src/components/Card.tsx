import { shortenAddress, shortenWinningBid } from "../utils/shortenThings";
import Artifacts from "../utils/Artifacts";
import "./Card.css";

const Card: React.FC<Artifacts> = ({
  id,
  numberOfBidsReceived,
  shbBid,
  bidder,
  biddingEnd,
}) => {
  return (
    <div className="card card--primary">
      <h1 className="card__id">{id}</h1>
      <p className="card__info">
        Bid count: <b>{numberOfBidsReceived}</b>
      </p>
      <p className="card__info">
        Winning Bid: <b>{shortenWinningBid(shbBid)} SHB</b>
      </p>
      <p className="card__info">
        End Block <b>{biddingEnd}</b>
      </p>
      <p className="card__info">
        Winner: <b>{shortenAddress(bidder)}</b>
      </p>
    </div>
  );
};

export default Card;
