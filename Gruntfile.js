module.exports = function(grunt){
  grunt.initConfig({
  	jshint:{
        files: ['Gruntfile.js', 'app/**/*/.js', 'build/**/*/.js'],
        options: {
        	globals: {
        		jQuery: true,
        	}
        }
  	},
  	watch:{
  		files: ['<%= jshint.files %>'],
  		tasks: ['jshint']
  	},
  	connect:{
  		main:{
  			options:{
  				port: 8000,
  				hostname:'*',
  				base: '',
  				open: true

  			
  			}
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-install-simple');


  //default + new custom tasks defined here
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('serve', 'running a dev server', function(){
        grunt.task.run('connect:main:keepalive');
  });

};