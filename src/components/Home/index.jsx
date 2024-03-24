import { Link } from "react-router-dom";
import Navigationbar from "../NavBar";
const Main = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <div className="text-7xl text-center text-blue-400">MATCHMETRICS</div>
      <Link to="/login">
        <button type="button">
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Main;