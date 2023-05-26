import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuthContext();
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
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!res.ok) {
        const result = await res.json();
        alert(result.error);
      }
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
    <div className=" max-w-7xl m-auto  p-6">
      {!matches.length
        ? "Loading..."
        : matches.map((match) => {
            return (
              <div
                className="text-sm shadow-2xl w-full  items-center my-2 p-4  "
                key={match._id}
              >
                <div className="flex items-center my-2">
                  <img className="w-6" src={match.homelogo} alt="" />
                  <p className="ml-2">{match.hometeam}</p>
                </div>
                <div className="flex items-center my-2">
                  <img className="w-6  " src={match.awaylogo} alt="" />
                  <p className="ml-2">{match.awayteam}</p>
                </div>

                <Link
                  className="text-purple-950"
                  target="_blank"
                  to={match.matchlink}
                >
                  Watch
                </Link>

                {user && user.admin && (
                  <button
                    className="p-2 border-2"
                    onClick={() => deleteMatch(match._id)}
                  >
                    delete
                  </button>
                )}
              </div>
            );
          })}
    </div>
  );
};

export default Matches;
