// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Basic from "./ls";

const Login = () => {
	// const [data, setData] = useState({ email: "", password: "" });
	// const [error, setError] = useState("");

	// const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/api/auth";
	// 		const { data: res } = await axios.post(url, data);
	// 		localStorage.setItem("token", res.data.token);
	// 		localStorage.setItem("username", res.data.firstName + ' ' + res.data.lastName);
	// 		localStorage.setItem("email", res.data.email);
	// 		window.location = "/";
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.message);
	// 		}
	// 	}
	// };

	return (
		<div>
			<Basic />
			{/* <div>
				<div>
					<form onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
						/>
						{error && <div >{error}</div>}
						<button type="submit" >
							Sing In
						</button>
					</form>
				</div>
				<div>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button">
							Sing Up
						</button>
					</Link>
				</div>
			</div> */}
		</div>
	);
};

export default Login;