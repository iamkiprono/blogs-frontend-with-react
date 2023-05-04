import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMatches = () => {
  const [hometeam, setHometeam] = useState("");
  const [awayteam, setAwayTeam] = useState("");
  const [homelogo, setHomeLogo] = useState("");
  const [awaylogo, setAwayLogo] = useState("");
  const [matchlink, setMatchLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

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

    if (!res.ok) {
      setLoading(false);
      const result = await res.json();
      setStatus(result.message);
      return;
    }

    setLoading(false);
    const result = await res.json();
    setStatus(result.message);
    console.log(result);
    setTimeout(() => {
      navigate("/livematches");
    }, 1500);
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
            <option value="Brighton Hove Albion">Brighton Hove Albion</option>
            <option value="Manchester City">Manchester City</option>
            <option value="Afc Bournemouth">Afc Bournemouth</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <label>Away Team</label>
          <select onChange={(e) => setAwayTeam(e.target.value)}>
            <option value=""></option>
            <option value="Arsenal">Arsenal</option>
            <option value="Afc Bournemouth">Afc Bournemouth</option>
            <option value="Fulham">Fulham</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Tottenham Hotspur">Tottenham Hotspur</option>
            <option value="Chelsea">Chelsea</option>
            <option value="West Ham United">West Ham United</option>
          </select>
          <label>Home Team logo</label>
          <select onChange={(e) => setHomeLogo(e.target.value)}>
            <option value=""></option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164577419697.png?v=1">Arsenal</option>
            <option value="Afc Bournemouth">Afc Bournemouth</option>
             <option value="https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png">Brighton Hove Albion</option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164577478031.png?v=1">Manchester City</option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164577447430.png?v=1">
              Liverpool
            </option>
          </select>
          <label>Away Team logo</label>
          <select onChange={(e) => setAwayLogo(e.target.value)}>
            <option value=""></option>
            <option value="Arsenal">Arsenal</option>
           
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164577409120.png?v=1">Chelsea</option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/16486909637.png?v=1">Fulham</option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164609952917.png?v=1">
              Tottenham Hotspur
            </option>
            <option value="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png">
            Manchester United
            </option>
            <option value="https://cfcdn.livesportstv.cc/zqwin007/Image/team/images/164577453830.png?v=1">
              West Ham United
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
