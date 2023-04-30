import { useEffect, useState } from "react";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  const getLiveMatches = async () => {
    const res = await fetch("https://blog-api-kiprono.onrender.com/live");
    const results = await res.json();
    setMatches(results);
    console.log(results);
  };

  useEffect(() => {
    getLiveMatches();
  }, []);
  return <div>
    {matches.map((match) => {
        return(
            <div key={match.id}>
                <p>{match.hometeam}</p>
            </div>
        )
    })}
  </div>;
};

export default Matches;
