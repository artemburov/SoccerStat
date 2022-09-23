import { getMatchesByLeague } from "../API/fetch"

const getMatchesByLeagueCheck = (stringDateFrom, stringDateTo, leagueId) => {
  if (stringDateFrom.length === 10 && stringDateTo.length === 10) {
    return getMatchesByLeague(leagueId, stringDateFrom, stringDateTo)
  } else {
    return getMatchesByLeague(leagueId, "", "")
  }
}

export default getMatchesByLeagueCheck