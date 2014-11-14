#!/usr/bin/env node

var loaddir = require('loaddir');
var _ = require('underscore');

require('colors');

var
  commands = ['verbose', 'filenames', 'paths', 'version', 'v'],
  fixArgs = require('./lib/fix_args'),
  argv = require('optimist').argv,
  command,
  _excludeExtensions = (argv.exclude_extensions || '').split(','),
  excludeExtensions = (argv.with_images ? [] : ['jpg', 'png', 'gif', 'bmp']).concat(_excludeExtensions);

argv = fixArgs(argv, __dirname, __filename);
command = argv._[0];

if (command && !_.include(commands, command)) {
  console.log(('Valid commands include: ' + commands.sort().join(', ')).red);
  console.log(('Valid -options include: --exclude=directory,dir2  | --with_images | --show_skips | --exclude_extensions=html,coffee ( defaults to image types, use -with_images to include [ not exclude ] these )' ).blue);
  process.exit(1)
}

if (argv.v || command == 'version' || command == 'v') {
  console.log('Gimme-lines version '.blue, require('./package.json').version);

} else {
  console.log('Gimme-lines Running... '.blue, command || '');


}

var total = 0;

loaddir({
  path: process.cwd(),
  black_list: argv.exclude ? argv.exclude.split(',') : undefined,
  callback: function(){

    //console.log(this._ext);
    if ( _.include(excludeExtensions, (this._ext || '').substring(1).toLowerCase())) {
     
      if ( argv.show_skips ) console.log('Skipping'.red, this.path);
      return this.fileContents = null;
    }

    var len = this.fileContents.split('\n').length - 1;
    total += len;
    lenStr = (this.fileContents.split('\n').length + '').blue

    this.fileContents = {
      len: len,
      lenStr: lenStr,
      path: this.path,
      fileName: this.fileName,
    };


  },
}).then(function(output){

  _.each(output, function(f) {

    if (!f) return;

    switch (command) {

      case 'verbose':

        console.log(f.lenStr, f.fileName.green, f.path.gray);
        break;

      case 'filenames':

        console.log(f.lenStr, f.fileName);
        break;

      case 'paths':

        console.log(f.lenStr, f.path);
        break;
    };

  });

  console.log('\nTotal lines...\n', total, '\n');
  process.exit(0);
});
