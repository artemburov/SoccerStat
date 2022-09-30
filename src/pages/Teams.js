import { Grid } from "@mui/material"
import TeamCardItem from "../components/TeamCardItem"

function Teams({ teamsPagination }) {
  if (!teamsPagination) return null

  return (
    <Grid container spacing={4}>
      {teamsPagination.map((team) => (
        <TeamCardItem
          key={team.id}
          teamId={team.id}
          name={team.name}
          teamFlag={team.crestUrl}
        />
      ))}
    </Grid>
  )
}

export default Teams