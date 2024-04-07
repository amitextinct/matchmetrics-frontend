// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>fakebook</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default Main;

import React, { useState, useEffect } from "react";
import Navigationbar from "../NavBar";

function Main() {
  const [matches, setMatches] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("token", "username", "email");
    window.location.reload();
  };
  const useremail = localStorage.getItem("email");
  const username = localStorage.getItem("username");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/matches");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMatches(data);
        // Store matches in local storage
        localStorage.setItem("matches", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleViewDetails = (id) => {
    window.location = `/matchedetails/${id}`;
  };
  // return (
  //   <div>
  //     <Navigationbar />
  //     <h2>User token: {user}</h2>
  //     <nav>
  //       <button onClick={handleLogout}>
  //         Logout
  //       </button>
  //     </nav>
  //     <h1>Matches</h1>
  //     <h2>User name: {username}</h2>
  //     {matches.length === 0 ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <pre>{JSON.stringify(matches, null, 2)}</pre>
  //     )}
  //   </div>
  // );
  return (
    <div>
      <Navigationbar />
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <h1>Matches</h1>
      <h2>User name: {username}</h2>
      <h2>email : {useremail}</h2>
      {matches.length === 0 ? (
        <p>Loading...</p>
      ) : (
        matches.map((match, index) => (
          <div key={index}>
            <p>Team 1: {match.team1}</p>
            <p>Team 2: {match.team2}</p>
            <h5>{match._id}</h5>
            <button onClick={() => handleViewDetails(match._id)}>
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Main;
