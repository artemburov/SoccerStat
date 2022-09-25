import { Grid } from "@mui/material"
import LeagueCardItem from "../components/LeagueCardItem"

function Leagues({leaguesPagination }) {
  if (!leaguesPagination) return null

  return (
    <Grid container spacing={4} >
      {leaguesPagination.map((league) => (
        <LeagueCardItem 
          key={league.id}
          leagueId={league.id}
          name={league.name}
          country={league.area.name}
          areaFlag={league.area.ensignUrl}
        />
      ))}
    </Grid>
  )
}

export default Leagues