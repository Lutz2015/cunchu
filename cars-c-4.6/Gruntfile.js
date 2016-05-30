/**
 * @file gruntfile
 * @author sundi
 * 函数描述
 *
 * @param {Object} grunt options
 */
module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    var baseUrl = grunt.file.readJSON('config.json');
    baseUrl.release.version = new Date().getTime();
    baseUrl.online.version = new Date().getTime();
    var themeid = baseUrl.themeid;
    grunt.log.write(themeid);
    grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json'),
        devserver: {
            dev: {
                options: {
                    base: '.',
                    port: baseUrl.dev.port || 8888,
                    async: true
                }
            }
        },
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            tasks: [
                'clean:dev',
                'dust:dev',
                'dusthtml:dev',
                'concat:dev'
            ],
            files: [
                '*',
                '*.html',
                'Gruntfile.js',
                'common/**/*',
                'controller/*',
                'static/**/*',
                'template/*.dust',
                'widget/**/*',
                'theme/**/*'
            ]
        },
        // 合并文件
        concat: {
            dev: {
                files: {
                    'common/lib/lib.js': [
                        'common/lib/zepto.min.js',
                        'common/js/util.js',
                        'common/js/api.js',
                        'common/lib/*.js'
                    ],
                    'static/css/main.css': [
                        'common/css/*.css',
                        'static/css/*.css',
                        'widget/**/**/*.css',
                        'theme/' + themeid + '/*.css'
                    ]
                }
            }
        },
        dust: {
            options: {
                runtime: false
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'template/',
                    src: [
                        '*.dust'
                    ],
                    dest: 'template/',
                    ext: '.js'
                }, {
                    expand: true,
                    cwd: 'widget/',
                    src: [
                        '**/**/*.dust'
                    ],
                    dest: 'widget/',
                    ext: '.js'
                }]
            }
        },
        cssmin: {
            /*压缩 CSS 文件为 .min.css */
            options: {
                keepSpecialComments: 0,
                /* 移除 CSS 文件中的所有注释 */
                noAdvanced: 1
            },
            dev: {
                files: [{
                    'static/css/main.css': 'static/css/main.css'
                }]
            }
        },
        uglify: {
            /*如果是多个可以使用 ['require', 'jQuery']，这三个关键词不压缩*/
            options: {
                mangle: {
                    except: [
                        'require',
                        'module',
                        'exports'
                    ]
                }
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'controller/',
                    src: [
                        '**/*.js',
                        '!**/*.min.js'
                    ],
                    dest: 'dist/' + themeid + '/controller/',
                    ext: '.js'

                }, {
                    expand: true,
                    src: [
                        'template/*.js', 'static/**/*.js'
                    ],
                    dest: 'dist/' + themeid,
                    ext: '.js'

                }, {
                    expand: true,
                    src: [
                        'widget/**/*.js',
                        'common/js/*.js',
                        'common/lib/lib.js'
                    ],
                    dest: 'dist/' + themeid,
                    filter: 'isFile'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: [
                        'static/css/main.css',
                        'widget/**/img/*',
                        'common/img/*',
                        'common/svg/*'
                    ],
                    dest: 'dist/' + themeid
                }]
            }
        },
        dusthtml: {
            dev: {
                src: "index.dust",
                dest: 'index.html',
                options: {
                    context: baseUrl.dev
                }
            },
            release: {
                src: "index.dust",
                dest: 'dist/' + themeid + '/index.tpl',
                options: {
                    whitespace: true,
                    context: baseUrl.release
                }
            },
            online: {
                whitespace: true,
                src: "index.dust",
                dest: 'dist/' + themeid + '/index.tpl',
                options: {
                    whitespace: true,
                    context: baseUrl.online
                }
            }
        },
        clean: {
            dev: [
                'index.html',
                'common/lib/lib.js',
                'static/css/main.css'
            ],
            release: [
                'dist/*',
                'index.html',
                'common/lib/lib.js',
                'static/css/main.css'
            ]
        },
    });

    /*define cmd*/
    grunt.registerTask('clear', [
        'clean:release'
    ]);
    grunt.registerTask('default', [
        'watch'
    ]);
    grunt.registerTask('release', [
        'clean:release',
        'dust:dev',
        'concat:dev',
        'cssmin:dev',
        'dusthtml:release',
        'uglify:dev',
        'copy'
    ]);
    grunt.registerTask('online', [
        'clean:release',
        'dust:dev',
        'concat:dev',
        'cssmin:dev',
        'dusthtml:online',
        'uglify:dev',
        'copy'
    ]);
};
