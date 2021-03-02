const downloadImages = require('./deviant.js')
const parser = require('./parseArgs.js')
const args = parser.parse_args()

downloadImages(args.search, args.count, args.sort, args.dir)

