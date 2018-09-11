const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch({args: ['--shm-size=1gb']})
  const page = await browser.newPage()

  await page.goto('https://tennislink.usta.com/Leagues/Common/Default.aspx')

  const mainInputSelector = '#ctl00_mainContent_UpdatePanel1 > div.DashboardMainColumn.margin-top10 > div > div > div.DashboardActionsInner.center > input:nth-child(3)'
  const mainBtnSelector = '#ctl00_mainContent_UpdatePanel1 > div.DashboardMainColumn.margin-top10 > div > div > div.DashboardActionsInner.center > input.button.float-left'

  await page.type(mainInputSelector, 'Roderick Gauvin')
  await page.click(mainBtnSelector)

  const allFilterSelector = '#ss_div_search_member_name_criteria_year > span.ss-search-member-name-year-btn.all'
  await page.waitForSelector(allFilterSelector)
  await page.click(allFilterSelector)

  const filterResultsBtnSelector = '#ctl00_mainContent_ss_filter_search_member_name'
  await page.click(filterResultsBtnSelector)

  const headerSelector = '#ctl00_mainContent_divSearchResulstsByNameForPlayers > div > div > div > table > thead > tr > th'
  await page.waitForSelector(headerSelector)
  const yearsAndNumLeagues = await page.evaluate((x) => {
    try {
      let years = []
      let list = Array.from(document.querySelectorAll(x))
      list.forEach(th => years.push(th.innerText.replace(' League Play Records ', '-')))
      return years
    } catch (err) {
      console.log(err)
    }
  }, headerSelector)

  const nameAndCitySelector = '#ctl00_mainContent_divSearchResulstsByNameForPlayers > div > div > div > table > tbody > tr:nth-child(2)'
  const playerAndLeagueInfo = await page.evaluate((x) => {
    try {
      let info = []
      let dataList = Array.from(document.querySelectorAll(x))
      dataList.forEach(tr => info.push(tr.innerText))
      return info
    } catch (err) {
      console.log(err)
    }
  }, nameAndCitySelector)

  console.log(yearsAndNumLeagues)
  console.log('--------------')
  console.log(playerAndLeagueInfo)
  browser.close()

}

run()
