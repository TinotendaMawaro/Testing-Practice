const reverseString = (str) => {
    if (str === undefined || str === null) return null
  
    const reverse = str.split('').reverse().join('')
    return reverse
  }
  
  export { reverseString }