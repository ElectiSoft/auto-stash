const Furazy = require("furazy")
const Furry = new Furazy()
 
const searchIt = async () => {

  let searchResult = await Furry.searchImage(
    "eevee",      //[String]name (search keywords)
    2,            //[Int]type, 0: e621.net，1: fa, 2: e926.net
    1,            //[Int]page
    1             //[Int]limit
  )
  console.log(searchResult)

}

searchIt()