// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'

]
function findMatching(drivers, string) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase() })
  }
  function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
  }
  function matchName(drivers, string) {
    return drivers.filter(function (driver) { return driver.name === string })
  }