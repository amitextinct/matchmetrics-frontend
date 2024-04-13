import React, { useState, useEffect } from "react";
import Navigationbar from "../NavBar";
import Footer16 from "../Home/footer";

function Main() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches"
        );
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

  return (
    <div>
      <Navigationbar />
      <div className="grid mt-16 min-h-[75vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat ">
        <div className="flex items-center justify-center">
          {matches.length === 0 ? (
            <p>Loading...</p>
          ) : (
            matches.map((match, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-center space-x-20 border border-gray-500 rounded-xl px-8 py-2"
              >
                <p className="text-3xl">{match.team1}</p>
                <p className="text-xl">vs</p>
                <p className="text-3xl">{match.team2}</p>
                <button onClick={() => handleViewDetails(match._id)}>
                  <div className="ml-30 items-center gap-4 lg:flex border border-gray-500 text-white bg-gray-900 rounded-xl px-8 py-3 hover:text-gray-500 hover:bg-white">
                    View Details
                  </div>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer16 />
    </div>
  );
}

export default Main;
