export const shortenAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

export const shortenWinningBid = (amount: string) => `${amount.slice(0, 2)}`;
