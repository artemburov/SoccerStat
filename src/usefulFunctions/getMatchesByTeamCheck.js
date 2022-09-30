import { getMatchesByTeam } from "../API/fetch"

const getMatchesByTeamCheck = (stringDateFrom, stringDateTo, teamId) => {
  if (stringDateFrom.length === 10 && stringDateTo.length === 10) {
    return getMatchesByTeam(teamId, stringDateFrom, stringDateTo)
  } else {
    return getMatchesByTeam(teamId, "", "")
  }
}

export default getMatchesByTeamCheck