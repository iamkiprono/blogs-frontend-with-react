import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Teams from "../Hooks/TeamsData/Teams";

const AddMatches = () => {
  const [hometeam, setHometeam] = useState("");
  const [awayteam, setAwayTeam] = useState("");
  const [homelogo, setHomeLogo] = useState("");
  const [awaylogo, setAwayLogo] = useState("");
  const [matchlink, setMatchLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const match = { hometeam, awayteam, homelogo, awaylogo, matchlink };
      const res = await fetch("https://blog-api-kiprono.onrender.com/live", {
        method: "POST",
        body: JSON.stringify(match),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        setLoading(false);
        const result = await res.json();
        return setStatus(result.error);
      }

      setLoading(false);
      const result = await res.json();
      setStatus(result.message);
      setTimeout(() => {
        navigate("/livematches");
      }, 1500);
    } catch (error) {
      setLoading(false);
      setStatus(error.message);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h3>Add match</h3>
        <form onSubmit={handleSubmit}>
          <label>Home Team</label>
          <select onChange={(e) => setHometeam(e.target.value)}>
            <option value=""></option>
            {Teams.map((team) => {
              return (
                <option key={team.name} value={team.name}>
                  {team.name}
                </option>
              );
            })}
          </select>
          <label>Away Team</label>
          <select onChange={(e) => setAwayTeam(e.target.value)}>
            <option value=""></option>
            {Teams.map((team) => {
              return (
                <option key={team.name} value={team.name}>
                  {team.name}
                </option>
              );
            })}
          </select>
          <label>Home Team logo</label>
          <select onChange={(e) => setHomeLogo(e.target.value)}>
            <option value=""></option>
            {Teams.map((team) => {
              return (
                <option key={team.name} value={team.logo}>
                  {team.name}
                </option>
              );
            })}
          </select>
          <label>Away Team logo</label>
          <select onChange={(e) => setAwayLogo(e.target.value)}>
            <option value=""></option>
            {Teams.map((team) => {
              return (
                <option key={team.name} value={team.logo}>
                  {team.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="">Match Link</label>
          <input onChange={(e) => setMatchLink(e.target.value)} type="text" />

          {!loading ? (
            <button type="submit">Add match</button>
          ) : (
            <button>Adding match...</button>
          )}
          {status && <div className="error"> {status}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddMatches;
