const charToAsciiCode = (arr) => {
    return arr.map(char => char.charCodeAt())
  }
  
  const asciiCodeToChar = (arr) => {
    return arr.map(code => String.fromCharCode(code))
  }
  
  const caesarCipher = (str, key) => {
    const charArr = str.split('')
    const charCode = charToAsciiCode(charArr)
  
    const encryptedCode = charCode.map(code => {
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        for (let i = 0; i < key; i++) {
          code++
          if (code > 90 && code < 97) {
            code = 65
          } else if (code > 122) {
            code = 97
          }
        }
      }
      return code
    })
  
    const encryptedArr = asciiCodeToChar(encryptedCode)
  
    return encryptedArr.join('')
  }
  
  export { caesarCipher }