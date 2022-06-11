import Btn from "./Btn";
import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <nav className="container nav">
      <h4>BlockSwap</h4>
      <Btn />
    </nav>
  );
};

export default Nav;
