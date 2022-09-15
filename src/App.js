import './App.css';
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react';
import * as React from 'react';
import Navigation from "./components/Navigation/Navigation"
import Leagues from './pages/Leagues';
import Teams from './pages/Teams';
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from '@mui/system';
import { getLeagues, getTeams } from "./API/fetch"
import PaginationLeagues from './pages/PaginationLeagues';

function App({}) {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])
 
  useEffect(() => {
    const fetchDataLeagues = async () => {
      const jsonLeagues = await getLeagues()
      if (!jsonLeagues) return
      console.log("🚀 ~ file: App.js ~ line 20 ~ fetchDataLeagues ~ jsonLeagues", jsonLeagues) 
      setLeagues(jsonLeagues.competitions)
    }
    fetchDataLeagues()
  }, [])

  useEffect(() => {
    const fetchDataTeams = async () => {
      const jsonTeams = await getTeams()
      if (!jsonTeams) return
      console.log("🚀 ~ file: App.js ~ line 30 ~ fetchDataTeams ~ json", jsonTeams)
      setTeams(jsonTeams.teams)
    }
    fetchDataTeams()
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/SoccerStat" element={<PaginationLeagues leagues={leagues} />} />
          <Route path="/Teams" element={<Teams teams={teams} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
