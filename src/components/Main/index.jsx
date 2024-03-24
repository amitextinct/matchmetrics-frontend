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

function Main() {
  const [matches, setMatches] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/matches");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <nav>
        <h1>fakebook</h1>
        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <h1>Matches</h1>
      {matches.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(matches, null, 2)}</pre>
      )}
    </div>
  );
}

export default Main;
