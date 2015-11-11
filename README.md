gimme-lines
===========

Get line numbers for files in a directory


### Installation
```
  npm install -g gimme-lines
```

### Usage

#### Commands

* `gimme-lines`
* `gimme-lines paths`
* `gimme-lines filenames`
* `gimme-lines verbose`

#### --Options

* `gimme-lines --exclude=dir1,dir2,node_modules`  Skips directories
* `gimme-lines --with_images` images extensions are skipped by default, this re-enables them (jpg, png, gif, bmp)
* `gimme-lines --show_skips` shows files that were skipped due to extension
* `gimme-lines --exclude_extensions=html,coffee` skips these extensions


#### NOTE: Skipping Files
don't include the extension.  this is currently a limitation with the `black_list` functionality in `loaddir`.
