import './App.css';
import { Route, Routes } from "react-router-dom"
import * as React from 'react';
import Navigation from "./components/Navigation/Navigation"
import Leagues from "./pages/Leagues/Leagues"
import Teams from "./pages/Teams/Teams"
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from '@mui/system';

function App() {

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
