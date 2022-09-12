const urlCompetitions = "http://api.football-data.org/v2/competitions/"

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