import { Routes, Route } from "react-router-dom"
import Leagues from "../pages/Leagues"
import Teams from "../pages/Teams"

function Routing({ leagues }) {
  return (
    <Routes>
      <Route path="/SoccerStat" element={<Leagues leagues={leagues} />} />
      <Route path="/teams" element={<Teams teams={teams} />} />
    </Routes>
  )
}

export default Routing