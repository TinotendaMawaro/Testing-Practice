const capitalize = (str) => {
    if (str === undefined) return
    if (!isNaN(str)) return 'string does not contain any alphabet'
  
    const firstChar = str.search(/[A-Za-z]/)
    if (firstChar === -1) return 'string does not contain any alphabet'
  
    return str.substring(0, firstChar) + str[firstChar].toUpperCase() + str.substring(firstChar + 1)
  }
  
  export { capitalize }