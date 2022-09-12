import './App.css';
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react';
import * as React from 'react';
import Navigation from "./components/Navigation/Navigation"
import Leagues from "./pages/Leagues/Leagues"
import Teams from "./pages/Teams/Teams"
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from '@mui/system';
import { getLeagues } from "./API/fetch"

function App() {
  const [leagues, setLeagues] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const json = await getLeagues()
      console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ leagues", leagues)
      if (!json) return
      setLeagues(json.competitions)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navigation />
      <SearchBar />
      <Container>
        <Routes>
          <Route path="/SoccerStat" element={<Leagues />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="*" element={<Leagues />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
