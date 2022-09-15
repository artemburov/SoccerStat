const filterData = (query, data) => {
    if (!query) {
      return data
    } else {
      return data.filter(
        (word) =>
          word.name.toLowerCase().includes(query.toLowerCase()) ||
          word.area.name.toLowerCase().includes(query.toLowerCase())
      )
    }
  }
  
  export default filterData