import './App.css'
import * as React from "react"
import Navigation from "./components/Navigation/Navigation"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { getLeagues, getTeams} from "./API/fetch"
import PaginationLeagues from "./pages/PaginationLeagues"
import PaginationTeams from "./pages/PaginationTeams"
import { Typography } from "@mui/material"
import LeagueMatches from "./pages/LeagueMatches"
import TeamMatches from './pages/TeamMatches'

function App() {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
      const fetchDataLeagues = async () => {
          const jsonLeagues = await getLeagues()
          if (!jsonLeagues) return
          console.log(jsonLeagues)
          setLeagues(jsonLeagues.competitions)
      }
      fetchDataLeagues()
  }, [])

  useEffect(() => {
      const fetchDataTeams = async () => {
          const jsonTeams = await getTeams()
          if (!jsonTeams) return
          console.log(jsonTeams)
          setTeams(jsonTeams.teams)
      }
      fetchDataTeams()
  }, [])

  const linkLeagueMatches = leagues.map((league) => (
      <Route
      path={`/leagues/${league.id}/matches`}
      element={<LeagueMatches league={league} />}
      key={league.id}
      />
    ))

    const linkTeamMatches = teams.map((team) => (
      <Route
        path={`/teams/${team.id}/matches`}
        element={<TeamMatches team={team} />}
        key={team.id}
      />
    ))

    if ((!leagues.length) || (!teams.length)) return (
      <Typography align="center" variant="h5">
          Выполняется загрузка страницы, подождите
      </Typography>)

  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path="/SoccerStat" element={<PaginationLeagues leagues={leagues} />} />
          <Route path="/Teams" element={<PaginationTeams teams={teams} />} />
          {linkLeagueMatches}
          {linkTeamMatches}
        </Routes>
    </div>
  );
}

export default App;
