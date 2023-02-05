const calculator = {
    sum: function (a, b) {
      if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) return null
      return parseFloat(a) + parseFloat(b)
    },
    subtract: function (a, b) {
      if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) return null
      return parseFloat(a) - parseFloat(b)
    },
    divide: function (a, b) {
      if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) return null
      return parseFloat(a) / parseFloat(b)
    },
    multiply: function (a, b) {
      if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) return null
      return parseFloat(a) * parseFloat(b)
    }
  }
  
  export { calculator }