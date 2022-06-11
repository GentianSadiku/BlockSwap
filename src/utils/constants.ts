import abi from "./BrandCentralClaimAuction.json";

// Needed informations
export const contractAddress: string =
  "0x4EA67AeBb61f7Ff6E15E237C8b79D29C41F750fd";
export const contractABI = abi;

export const query = `
{
  tickers(first: 50, orderBy: biddingEnd, orderDirection: desc) {
    id
    shbBid
    bidder
    biddingEnd
    numberOfBidsReceived
    nftClaimed
    tokenURI
    name
    imageURI
    description
    __typename
  }
  auctionDays(first: 100) {
    id
    numberOfTickersLeft
    __typename
  }
}  
`;
