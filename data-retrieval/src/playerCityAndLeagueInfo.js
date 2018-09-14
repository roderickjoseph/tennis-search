function pull() {
  const puppeteer = require('puppeteer')

  async function run() {
    const browser = await puppeteer.launch({args: ['--shm-size=1gb']})
    const page = await browser.newPage()

    await page.goto('https://tennislink.usta.com/Leagues/Common/Default.aspx')

    const mainInputSelector = '#ctl00_mainContent_UpdatePanel1 > div.DashboardMainColumn.margin-top10 > div > div > div.DashboardActionsInner.center > input:nth-child(3)'
    const mainBtnSelector = '#ctl00_mainContent_UpdatePanel1 > div.DashboardMainColumn.margin-top10 > div > div > div.DashboardActionsInner.center > input.button.float-left'

    await page.type(mainInputSelector, 'Roderick Gauvin')
    await page.click(mainBtnSelector)

    await page.waitForNavigation({waitUntil: ['load']})
    const allFilterSelector = '#ss_div_search_member_name_criteria_year > span.ss-search-member-name-year-btn.all'
    await page.waitForSelector(allFilterSelector, {visible: true})
    await page.click(allFilterSelector)

    const filterResultsBtnSelector = '#ctl00_mainContent_ss_filter_search_member_name'
    await page.waitForSelector(filterResultsBtnSelector, {visible: true})
    await page.click(filterResultsBtnSelector)

    await page.waitFor(1500)
    const nameAndCitySelector = '#ctl00_mainContent_divSearchResulstsByNameForPlayers > div > div > div > table:nth-child(n) > tbody > tr:nth-child(n+2):not(:last-child)'
    await page.waitForSelector(nameAndCitySelector, {visible: true})
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

    return playerAndLeagueInfo
    browser.close()
  }
  return run()
}

module.exports = {
  pullData: pull
}
