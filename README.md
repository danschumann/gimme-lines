gimme-lines
===========

Get line numbers for files in a directory


### Installation
```
  npm install -g gimme-lines
```

### Usage

#### Commands

* `gimmelines`
* `gimmelines paths`
* `gimmelines filenames`
* `gimmelines verbose`

#### --Options

* `gimmelines --exclude=dir1,dir2,node_modules`  Skips directories
* `gimmelines --with_images` images extensions are skipped by default, this re-enables them (jpg, png, gif, bmp)
* `gimmelines --show_skips` shows files that were skipped due to extension
* `gimmelines --exclude_extensions=html,coffee` skips these extensions

![Alt text](https://raw.githubusercontent.com/danschumann/gimme-lines/master/example.png "Optional Title")
######_The `Total Lines` is wrong in this image because I edited this image in `mspaint`_
