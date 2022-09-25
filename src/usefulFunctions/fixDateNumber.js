const fixDateNumber = (number) => {
    if (Math.floor(number / 10) === 0) {
      return `0${number}`
    } else {
      return number
    }
  }
  
  export default fixDateNumber