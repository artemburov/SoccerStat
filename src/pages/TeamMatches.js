import { Breadcrumbs, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import DateMatchesPicker from "../components/DateMatchesPicker"
import fixDateNumber from "../usefulFunctions/fixDateNumber"
import DataGridMatches from "../components/DataGridMatches"
import getMatchesByTeamCheck from "../usefulFunctions/getMatchesByTeamCheck"

function TeamMatches({ team }) {
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [teamMatches, setTeamMatches] = useState([])
  const [dateFromString, setDateFromString] = useState("")
  const [dateToString, setDateToString] = useState("")

  useEffect(() => {
    const fetchDataTeamMatches = async () => {
      const jsonTeamMatches = await getMatchesByTeamCheck(
        dateFromString,
        dateToString,
        team.id
      )
      if (!jsonTeamMatches) return
      setTeamMatches(jsonTeamMatches.matches)
    }
    fetchDataTeamMatches()
  }, [dateFromString, dateToString])

  const updateDateFrom = (newDate) => {
    setDateFrom(newDate)

    if (newDate !== null) {
      setDateFromString(
        `${newDate.$y}-${fixDateNumber(newDate.$M + 1)}-${fixDateNumber(
          newDate.$D
        )}`
      )
    }
  }

  const updateDateTo = (newDate) => {
    setDateTo(newDate)

    if (newDate !== null) {
      setDateToString(
        `${newDate.$y}-${fixDateNumber(newDate.$M + 1)}-${fixDateNumber(
          newDate.$D
        )}`
      )
    }
  }

  const updateTeamMatches = (newLeagueMatches) => {
    setTeamMatches(newLeagueMatches)
  }

  return (
    <Box sx={{mt:2, ml: 10, mr:10, height: "70vh" }}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link to="/teams">
          <Typography variant="h6">Команды</Typography>
        </Link>
        <Typography variant="h6">{team.name}</Typography>
      </Breadcrumbs>
      <Typography variant="h4" sx={{ mt: 3, mb: 1 }}>
        Матчи
      </Typography>
      <DateMatchesPicker
        label="с"
        date={dateFrom}
        updateDate={updateDateFrom}
        maxDate={dateTo}
      />
      <DateMatchesPicker
        label="по"
        date={dateTo}
        updateDate={updateDateTo}
        minDate={dateFrom}
      />
      <DataGridMatches
        matches={teamMatches}
        updateMatches={updateTeamMatches}
      />
    </Box>
  )
}

export default TeamMatches