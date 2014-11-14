var join = require('path').join;

module.exports = function(argv) {

  // we need to remove the first arg if it is a path
  // this happens when running 'node path/to/gimme-lines/index.js' on windows
  if (argv._[0]) {

    // the path of this bin file ( this file you're reading right now )
    var thisPath = join(__dirname, __filename);

    // absolute path
    if (argv._[0][0] == '/') {

      // If the arg is the same as the path we ditch it
      if (thisPath == join(argv._[0]))
        argv._.shift()

    // relative path
    } else {

      // If the arg is the same as the path we ditch it
      if (thisPath == join(process.cwd(), argv._[0]))
        argv._.shift()
    }
  };

  return argv;

};
