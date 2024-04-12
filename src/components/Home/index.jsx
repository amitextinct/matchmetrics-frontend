import { Link } from "react-router-dom";
import AccordionCustomIcon from "./accordian";
const Main = () => {
  return (
    <div>
      <div className="text-7xl text-center text-blue-400">MATCHMETRICS</div>
      <Link to="/login">
        <button type="button">Login in</button>
      </Link>
      <div className="mx-14 px-8 rounded shadow">
      <AccordionCustomIcon />
      </div>
    </div>
  );
};

export default Main;
