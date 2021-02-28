const e621 = new (require(`e621-api-wrapper`)).e621("auto-stash", {base_url: "https://e926.net" });
const download = require(`image-downloader`)
const fs = require('fs');
const path = require('path');

const dir = "images";

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(dir, file), err => {
      if (err) throw err;
    });
  }
});

getImages = async (tags, count) => {
  tags = tags.concat(" rating:safe -presenting -topless -meme -text -<3 -spooning -pregnant -vore -octopus -naked -bulge -poppy's69 -diaper ") //Advanced safe-search. Don't even ask. We hurt our eyes so you don't have to. 90% effective-ish maybe.
  let images = await e621.postsList({tags, limit: count})
  for (let i = 0; i < count; i++) {
    if(images.data.posts[i].file.url){
      download.image({url: images.data.posts[i].file.url, dest: "./images"});
    }
  }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('Input your tags: ', query => {
    readline.question('How many pictures would you like? ', number => {
        console.log(`${number} images with tags: ${query}\nare downloading!`);
    getImages(query, number);
    readline.close();
    });
});