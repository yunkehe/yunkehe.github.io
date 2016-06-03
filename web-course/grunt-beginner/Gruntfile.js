// Generated on 2016-05-27 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Configurable paths for the application
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    config : config,

    // 复制文件
    copy : {
      // target
      dist_html : {
        files : [{
                  expand : true,
                  cwd : '<%= config.app %>/',
                  src : '*.html',
                  dest : '<%= config.dist %>/',
                  ext : '.min.html',
                  extDot : 'first',
                  flatten : true,
                  // rename : function(dest, src){
                  //   return dest + 'js/' + src;
                  // }
                }]
      }
    },

    // 删除文件
    clean : {
      dist : {
        // 被清除文件路径
        src : '<%= config.dist%>/**/*',
        // 只清除文件
        filter : 'isFile',
        // filter : function(filePath){
        //   return !grunt.file.isDir(filePath);
        // }
      }
    },

    connect : {
      server : {
        options : {
          port : 9001,
          hostname : "localhost",
          // 保存连接打开
          keepalive : true,
          base: config.app
        }
      }
    }
   
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  
};
