# auto-stash

Simple DeviantArt image downloader.

## Usage
```
index.js [-h/--help] [-d/--clear] [-v/--version] -s/--search SEARCH [-c/--count COUNT] [--sort SORT] [--dir DIR]

optional arguments:
  -h, --help            show this help message and exit
  -d, --clear           delete all the other files in the destination folder
  -v, --version         show program's version number and exit
  -s SEARCH, --search SEARCH
                        search term for deviantart
  -c COUNT, --count COUNT
                        number of photos you want to download
  --sort SORT           sorting method (popular/newest)
  --dir DIR             path to target folder
```

## Example
```
index.js -s "wolf" -c 10 --sort "popular" --dir "./images"
```
