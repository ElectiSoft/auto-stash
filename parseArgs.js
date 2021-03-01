const { ArgumentParser } = require('argparse')
const { version } = require('../package.json')
 
const parser = new ArgumentParser({})

parser.add_argument('-v', '--version', { action: 'version', version })
parser.add_argument('-s', '--search', { help: 'search term for deviantart', required: true})
parser.add_argument('-c', '--count', { help: 'number of photos you want to download', default: 1 })
parser.add_argument('--sort', { help: 'sorting method (popular/newest)', default: 'popular' })
parser.add_argument('--dir', { help: 'path to target folder', default: './' })

module.exports = parser