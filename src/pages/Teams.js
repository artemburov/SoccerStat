import { Grid } from "@mui/material"
import TeamCardItem from "../components/TeamCardItem"

function Teams({ teams }) {
  if (!teams.length) return null

  return (
    <Grid container spacing={4} justifyContent="center">
      {teams.map((team) => (
        <TeamCardItem
          key={team.id}
          name={team.name}
          teamFlag={team.crestUrl}
        />
      ))}
    </Grid>
  )
}

export default Teams