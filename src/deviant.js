require('dotenv').config()
const download = require(`image-downloader`)
const fs = require('fs')
const path = require('path')
const deviantart = require('deviantart.ts')
const { count } = require('console')

function getAPI() {
  return deviantart.default.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
}

function searchImages(api, query, count, sort){
  return api.rss.search(query, count, sort)
}

async function downloadImages(searchResults, dir){
  const downloads = []
  for(i = 0; i < searchResults.length; i++){
    downloads.push(download.image({url: searchResults[i].content[0].url, dest: dir}))
  }
  await Promise.all(downloads)
}

function downloadDeviantart(query, count, sort, dir){
  getAPI()
  .then(api => searchImages(api, query, count, sort)
  .then(results => downloadImages(results, dir)))
}

module.exports = downloadDeviantart