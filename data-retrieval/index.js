const pullPlayerCityAndLeagueInfo = require('./src/playerCityAndLeagueInfo')

const data = pullPlayerCityAndLeagueInfo.pullData()
  .then((rows) => {
    rows.forEach((row) => {
      let splitRow = row.split('\t', 3)
      let name = splitRow[0]
      let city = splitRow[1].split(',')[0]
      let state = splitRow[1].split(',')[1]
      let league = splitRow[2]
      console.log(`Name: ${name} ${city} ${state}\nLeague: ${league}`)
    })
  })
