module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      bootstrap: ['_sass/ryoko-headers']
    },
    copy: {
      options: {},
      fontawesomesass: {
        expand: true,
        cwd: 'node_modules/ryoko-headers/scss',
        src: '**',
        dest: '_sass/ryoko-headers'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy']);
};