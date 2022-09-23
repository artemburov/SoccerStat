import { Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import checkScore from "./checkScore"
import dictionaryStatus from "./dictionaryStatus"

function DataGridMatches({ matches, updateMatches }) {
  if (!matches.length)
    return (
      <Typography variant="body1" sx={{ mt: "1rem" }}>
        Данных пока нет..
      </Typography>
    )

  const rows = matches.map((match) => ({
    id: match.id,
    date: new Date(match.utcDate).toLocaleDateString(),
    time: new Date(match.utcDate).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }),
    status: dictionaryStatus[match.status],
    homeTeam: match.homeTeam.name,
    guestTeam: match.awayTeam.name,
    scoreMain: `${checkScore(match.score.fullTime.homeTeam)} : ${checkScore(
      match.score.fullTime.awayTeam
    )}`,
    scoreExtra: `${checkScore(match.score.extraTime.homeTeam)} : ${checkScore(
      match.score.extraTime.awayTeam
    )}`,
    scorePenalty: `${checkScore(match.score.penalties.homeTeam)} : ${checkScore(
      match.score.penalties.awayTeam
    )}`
  }))

  const columns = [
    { field: "date", headerName: "Дата", minWidth: 150, flex: 1 },
    { field: "time", headerName: "Время", minWidth: 150, flex: 1 },
    { field: "status", headerName: "Статус", minWidth: 150 },
    {
      field: "homeTeam",
      headerName: "Хозяин",
      align: "right",
      headerAlign: "right",
      minWidth: 220,
      flex: 1
    },
    { field: "guestTeam", headerName: "Гость", minWidth: 220, flex: 1 },
    {
      field: "scoreMain",
      headerName: "Счёт",
      align: "center",
      headerAlign: "center",
      minWidth: 50,
      flex: 1
    },
    {
      field: "scoreExtra",
      headerName: "Доп. время",
      align: "center",
      headerAlign: "center",
      minWidth: 50,
      flex: 1
    },
    {
      field: "scorePenalty",
      headerName: "Пенальти",
      align: "center",
      headerAlign: "center",
      minWidth: 50,
      flex: 1
    }
  ]

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      onChange={updateMatches}
      autoPageSize
      sx={{ mt: "1rem" }}
    />
  )
}

export default DataGridMatches