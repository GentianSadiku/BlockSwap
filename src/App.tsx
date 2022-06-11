import { useContext } from "react";

import Nav from "./components/Nav";
import Content from "./components/Content";

import { BrandCentralContext } from "./context/NFTContext";

import "./App.css";
import Btn from "./components/Btn";

function App() {
  const { walletConnected } = useContext(BrandCentralContext);

  return (
    <div className="App">
      <Nav />
      {walletConnected ? <Content /> : <Btn className="btn--center" />}
      <div className="background"></div>
    </div>
  );
}

export default App;
