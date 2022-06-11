import "./Information.css";

const Information: React.FC = () => {
  return (
    <section className="information">
      <div className="container block ">
        <h1 className="information__heading">Brand Central Auction</h1>
        <div className="grid grid--1x2">
          <div>
            <ul>
              <li>
                Blockswap is giving the first opportunity to claim a StakeHouse
                name on mainnet to SHB holders.
              </li>
              <li>The auction will run for 5 days.</li>
              <li>
                Each day 10 StakeHouse names can be proposed on a first come
                first serve basis.
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                In the last 200 blocks (approx 50 minutes) each additional bid
                will increase the time remaining by 100 blocks (approx 25
                minutes) until someone loses the battle.
              </li>
              <li>Minimum Bid increase is 2 SHB.</li>
              <li>Additional details on the auction here. Read FAQ here.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
