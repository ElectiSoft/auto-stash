# auto-stash

Simple DeviantArt image downloader.

## Install

```sh
git clone https://github.com/ElectiSoft/auto-stash
cd auto-stash
yarn # or npm install (install dependencies)
```

## Usage

```
yarn start [optional arguments] -s/--search SEARCH

required arguments:
  -s SEARCH, --search SEARCH
                        search term for deviantart

optional arguments:
  -h, --help            show this help message and exit
  -d, --clear           delete all the other files in the destination folder
  -v, --version         show program's version number and exit
  -c COUNT, --count COUNT
                        number of photos you want to download
  --sort SORT           sorting method (popular/newest)
  --dir DIR             path to target folder
```

## Example

```
yarn start -s "wolf" -c 10 --sort "popular" --dir "./images"
```
