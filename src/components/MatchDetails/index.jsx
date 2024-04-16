import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigationbar from "../NavBar";
import Footer16 from "../Home/footer";
function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    async function fetchMatch() {
      try {
        const response = await fetch(
          `http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMatch(data);
      } catch (error) {
        // handle error
      }
    }
    fetchMatch();
  }, [id]);

  if (!match) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navigationbar />
      <div className="flex flex-col mt-16 min-h-[75vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch justify-center">
        <div className="text-center text-5xl font-sans">
          <p>Match Details</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-col items-center border">
          
          
          
          

          <div class="max-w-xs p-4 bg-white rounded-lg shadow-lg w-72 dark:bg-gray-800">
            <p class="pt-4 text-2xl font-bold leading-normal text-center text-black dark:text-white">
            {match?.team1} vs {match?.team2}
            </p>
            <p class="text-sm font-bold leading-tight text-center text-black opacity-50 font-inter dark:text-white">
              Date: {match?.date && new Date(match.date).toLocaleDateString()}
            </p>
            <ul className="flex flex-row items-center justify-center space-x-20 rounded-xl px-8 py-2 w-1/2">
              {match?.scores?.map((score, index) => (
                <div key={index} className=" ">
                  <li class="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    <div className="pb-4 text-4xl font-bold leading-normal text-center text-black font-inter dark:text-white">{score.player}</div>
                    <div className="text-xl">
                      Jersey Number: {score.jerseyNumber}
                    </div>
                    <div className="text-xl">Goals: {score.goals?.length}</div>
                    <div className="text-xl">
                      Goal Timings:{" "}
                      {score.goals?.map((goal, index) => (
                        <div key={index}>
                          <p>{goal.timing} min</p>
                        </div>
                      ))}
                    </div>
                    <div className="text-xl">Offsides: {score.offsides}</div>
                    <div className="text-xl">Free Kicks: {score.freeKicks}</div>
                    <div className="text-xl">Penalties: {score.penalties}</div>
                  </li>
                </div>
              ))}
            </ul>
            <div class="py-4 text-center">
              <div className="flex flex-row items-center justify-center space-x-20 border border-gray-500 rounded-2xl px-8 py-2  text-white bg-gray-900 hover:text-gray-900 hover:bg-black">
                <Link to={`/matchforum/${id}`}>Go to Match Forum</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer16 />
    </div>
  );
}

export default MatchDetails;
