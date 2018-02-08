module.exports = function(grunt) {
  grunt.initConfig({
    //Concatenar archivos
    concat: {
      vendor: { //Librerias
        options: {
          separator: ';'
        },
        src: [
          "app/bower_components/jquery/dist/jquery.min.js",
          "app/bower_components/angular/angular.min.js",
          "app/bower_components/angular-route/angular-route.min.js",
          "app/bower_components/angular-aria/angular-aria.min.js",
          "app/bower_components/angular-animate/angular-animate.min.js",
          "app/bower_components/angular-sanitize/angular-sanitize.min.js",
          "app/bower_components/angular-messages/angular-messages.min.js"
        ],
        dest: "dist/scripts/vendor.js"
      },
      app: { //App
        options: {
          separator: ';'
        },
        src: [
          "app/scripts/app.min.js",
          "app/scripts/routes.min.js",
          "app/scripts/directives.min.js",
          "app/scripts/factories.min.js",
          "app/scripts/services.min.js",
          "app/scripts/home/controller.min.js"
        ],
        dest: "dist/scripts/app.js"
      },
      css: { //Styles
        options: {
          separator: ''
        },
        src: [
          'app/css/styles.css',
        ],
        dest: "dist/css/styles.css"
      }
    },
    //MInificar html
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'app/index_dist.html',
          'dist/views/directives/hotel-card.html': 'app/views/directives/hotel-card.html',
          'dist/views/layout/header.html': 'app/views/layout/header.html',
          'dist/views/home.html': 'app/views/home.html',
        }
      },
    },
    //Copiar archivos
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'app/icons',
            src: '**',
            dest: 'dist/icons/',
          },
          {
            expand: true,
            cwd: 'app/images/',
            src: '**',
            dest: 'dist/images/',
          },
        ],
      },
    },
    //Ofuscar JS
    obfuscator: {
      options: {
          // global options for the obfuscator
      },
      task1: {
          options: {
              // options for each sub task
          },
          files: {
            'dist/scripts/app.js': 'dist/scripts/app.js'
          }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');
  grunt.registerTask('default', ['concat', 'htmlmin', 'copy', 'obfuscator']);
};
