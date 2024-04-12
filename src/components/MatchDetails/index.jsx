import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    async function fetchMatch() {
      try {
        const response = await fetch(`http://matchmetrics-env.eba-k8icnpjn.ap-south-1.elasticbeanstalk.com/matches/${id}`);
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
      <h1>Match Details</h1>
      <p>Team 1: {match?.team1}</p>
      <p>Team 2: {match?.team2}</p>
      <p>Date: {match?.date && new Date(match.date).toLocaleDateString()}</p>
      {match?.scores?.map((score, index) => (
        <div key={index}>
          <h2>Player: {score.player}</h2>
          <p>Jersey Number: {score.jerseyNumber}</p>
          <p>Goals: {score.goals?.length}</p>
          <p>Goal Timings: {score.goals?.map((goal, index) => (
            <div key={index}>
              <p>Timing: {goal.timing}</p>
            </div>
          ))}</p>
          <p>Offsides: {score.offsides}</p>
          <p>Free Kicks: {score.freeKicks}</p>
          <p>Penalties: {score.penalties}</p>
        </div>
      ))}
      <div>
        <Link to={`/matchforum/${id}`}>Go to Match Forum</Link>
      </div>
    </div>
  );
}

export default MatchDetails;