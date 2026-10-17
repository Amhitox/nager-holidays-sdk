// Run after `cd ts && npm install && npm run build`.
const { NagerHolidaysSDK } = require('../ts/dist/NagerHolidaysSDK')

async function main() {
  const client = new NagerHolidaysSDK()
  const holidays = await client.PublicHolidayV4Dto().list({
    country_code: 'AT',
    year: 2026,
  })

  console.log(`${holidays.length} Austrian holidays in 2026`)
  console.log(holidays[0]?.data())
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
