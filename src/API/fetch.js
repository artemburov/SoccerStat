const urlCompetitions = "https://api.football-data.org/v2/competitions/"
const urlTeams = "https://api.football-data.org/v2/teams/"

export const getLeagues = async () => {
    const response = await fetch(urlCompetitions, {
      headers: {
        "x-auth-token": process.env.REACT_APP_API_KEY
      }
    })
    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      console.error("Ошибка!")
      return null
    }
  }

  export const getTeams = async () => {
    const response = await fetch(urlTeams, {
      headers: {
        "x-auth-token": process.env.REACT_APP_API_KEY
      }
    })
    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      console.error("Ошибка!")
      return null
    }
  }

  export const getMatchesByLeague = async (leagueId, queryDateFrom, queryDateTo) => {
    const response = await fetch(
      `https://api.football-data.org/v2/competitions/${leagueId}/matches?dateFrom=${queryDateFrom}&dateTo=${queryDateTo}`, {
      headers: {
        "x-auth-token": process.env.REACT_APP_API_KEY
      }
    })
    if (response.ok) {
      const json = await response.json()
      return json
      
    } else {
      console.error("Ошибка!")
      return null
    }
  }

  