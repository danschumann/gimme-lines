#!/usr/bin/env node

var loaddir = require('loaddir');
var _ = require('underscore');

require('colors');

var
  commands = ['verbose', 'filenames', 'paths', 'version', 'v'],
  fixArgs = require('./lib/fix_args'),
  argv = fixArgs(require('optimist').argv),
  command = argv._[0];

if (command && !_.include(commands, command)) {
  console.log(('Valid commands include: ' + commands.sort().join(', ')).red);
  process.exit(1)
}

if (argv.v || command == 'version' || command == 'v') {
  console.log('Gimme-lines version '.blue, require('./package.json').version);

} else if ( command == 'filenames' ) {

}

var total = 0;

loaddir({
  path: process.cwd(),
  black_list: argv.exclude ? argv.exclude.split(',') : undefined,
  callback: function(){

    var len = this.fileContents.split('\n').length - 1;
    total += len;
    lenStr = (this.fileContents.split('\n').length + '').blue

    switch (command) {
      case 'verbose':
        console.log(lenStr, this.fileName.green, this.path.gray);
        break;
      case 'filenames':
        console.log(lenStr, this.fileName);
        break;
      case 'paths':
        console.log(lenStr, this.path);
        break;
    };

  },
}).then(function(output){
  console.log('\nTotal lines...\n', total, '\n');
  process.exit(0);
});
