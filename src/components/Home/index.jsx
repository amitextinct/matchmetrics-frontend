import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div className="text-7xl text-center text-blue-400">MATCHMETRICS</div>
      <Link to="/login">
        <button type="button">Login in</button>
      </Link>
    </div>
  );
};

export default Main;
