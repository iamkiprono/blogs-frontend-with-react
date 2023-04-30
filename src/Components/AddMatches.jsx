import { useState } from "react";

const AddMatches = () => {
  const [hometeam, setHometeam] = useState("");
  const [awayteam, setAwayTeam] = useState("");
  const [homelogo, setHomeLogo] = useState("");
  const [awaylogo, setAwayLogo] = useState("");
  const [matchlink, setMatchLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const match = { hometeam, awayteam, homelogo, awaylogo, matchlink };
    const res = await fetch("https://blog-api-kiprono.onrender.com/live", {
      method: "POST",
      body: JSON.stringify(match),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    const result = await res.json();
    setStatus(result.message);
    console.log(result);
  };

  return (
    <div>
      <div className="wrapper">
        <h3>Add match</h3>
        <form onSubmit={handleSubmit}>
          <label>Home Team</label>
          <select onChange={(e) => setHometeam(e.target.value)}>
            <option value=""></option>
            <option value="Arsenal">Arsenal</option>
            <option value="Afc Bournemouth">Afc Bournemouth</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <label>Away Team</label>
          <select onChange={(e) => setAwayTeam(e.target.value)}>
            <option value=""></option>
            <option value="Arsenal">Arsenal</option>
            <option value="Afc Bournemouth">Afc Bournemouth</option>
            <option value="Tottenham Hotspur">Tottenham Hotspur</option>
          </select>
          <label>Home Team logo</label>
          <select onChange={(e) => setHomeLogo(e.target.value)}>
            <option value=""></option>
            <option value="Arsenal">Arsenal</option>
            <option value="Afc Bournemouth">Afc Bournemouth</option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164577447430.png?v=1">
              Liverpool
            </option>
          </select>
          <label>Away Team logo</label>
          <select onChange={(e) => setAwayLogo(e.target.value)}>
            <option value=""></option>
            <option value="Arsenal">Arsenal</option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164609952917.png?v=1">
              Tottenham Hotspur
            </option>
          </select>
          <label htmlFor="">Match Link</label>
          <input onChange={(e) => setMatchLink(e.target.value)} type="text" />

          {!loading ? (
            <button type="submit">Add match</button>
          ) : (
            <button>Adding match...</button>
          )}
          {status}
        </form>
      </div>
    </div>
  );
};

export default AddMatches;
