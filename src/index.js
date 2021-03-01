require('dotenv').config()
const download = require(`image-downloader`)
const fs = require('fs')
const path = require('path')
const deviantart = require('deviantart.ts')

async function getAPI() {
  const deviantApp = await deviantart.default.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
  const deviation = await deviantApp.rss.search("furry wolf", 1, "popular")
  console.log(deviation[0].content[0].url)
}

getAPI()