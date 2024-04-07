import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import MatchDetails from "./components/MatchDetails";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/home" exact element={<Home />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/matchedetails/:id" element={<MatchDetails />} />
			<Route path="/" element={<Navigate replace to="/Home" />} />
		</Routes>
	);
}

export default App;