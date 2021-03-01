require('dotenv').config()
const e621 = new (require(`e621-api-wrapper`)).e621("auto-stash", {base_url: "https://e926.net" })
const download = require(`image-downloader`)
const fs = require('fs')
const path = require('path')
const deviantart = require('deviantart.ts')

async function getAPI() {
  const deviantApp = await deviantart.default.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
  const deviation = await deviantApp.rss.get('https://www.deviantart.com/akreon/art/Yordles-868586083')
  console.log(deviation.content[0].url)
}

getAPI()