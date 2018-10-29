'use strict';

var gulp = require('gulp'),
    through = require('through2'),
    convertTwigdocToJson = require("../");



function startTest() {
    return gulp.src("./patterns/**/*.twig")
    .pipe(through({ objectMode: true }, function(file, enc, cb) {
        //console.log(file.contents);
        // if (file.isBuffer()) {
        //   this.emit('error', new PluginError(PLUGIN_NAME, 'Buffers not supported!'));
        //   return cb();
        // }
        console.log(convertTwigdocToJson(file.contents));
    
        if (file.isStream()) {
          var streamer = prefixStream(prefixText);
          streamer.on('error', this.emit.bind(this, 'error'));
          file.contents = file.contents.pipe(streamer);
            console.log("blub");
        }

        this.push(file);
        cb();
      }));
}

gulp.task('twigdoc2json', startTest);