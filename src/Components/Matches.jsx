import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  const getLiveMatches = async () => {
    const res = await fetch("https://blog-api-kiprono.onrender.com/live");
    const results = await res.json();
    setMatches(results);
    console.log(results);
  };

  const deleteMatch = async (id) => {
    try {
      const res = await fetch(
        `https://blog-api-kiprono.onrender.com/live/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();
      alert(result.message);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLiveMatches();
  }, []);
  return (
    <div>
      {!matches.length
        ? "Loading..."
        : matches.map((match) => {
            return (
              <div className="livematch-card" key={match.id}>
                <img src={match.homelogo} alt="" />
                <p>{match.hometeam}</p>
                <h1>vs</h1>
                <img src={match.awaylogo} alt="" />
                <p>{match.awayteam}</p>
                <Link target="_blank" to={match.matchlink}>
                  Watch
                </Link>
                <button onClick={() => deleteMatch(match.id)}>delete</button>
              </div>
            );
          })}
    </div>
  );
};

export default Matches;
