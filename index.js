const e621 = new (require(`e621-api-wrapper`)).e621("auto-stash", {base_url: "https://e926.net" });
const download = require(`image-downloader`)

getImages = async (tags) => {
  tags = tags.concat(" rating:safe")
  console.log(tags)
  let images = await e621.postsList({tags})

  console.log(images.data.posts)

  for (let i = 0; i < 3; i++) {
    download.image({url: images.data.posts[i].file.url, dest: "./images"})
  }
}
getImages("wolf")