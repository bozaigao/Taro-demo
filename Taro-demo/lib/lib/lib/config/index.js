const config = {
    projectName: 'YaoRenDangGui_Taro',
    date: '2019-9-15',
    designWidth: 750,
    deviceRatio: {
        '640': 2.34 / 2,
        '750': 1,
        '828': 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: {
        babel: {
            sourceMap: true,
            presets: [
                ['env', {
                        modules: false
                    }]
            ],
            plugins: [
                'transform-decorators-legacy',
                'transform-class-properties',
                'transform-object-rest-spread'
            ]
        }
    },
    defineConstants: {},
    copy: {
        patterns: [],
        options: {}
    },
    weapp: {
        module: {
            postcss: {
                autoprefixer: {
                    enable: true,
                    config: {
                        browsers: [
                            'last 3 versions',
                            'Android >= 4.1',
                            'ios >= 8'
                        ]
                    }
                },
                pxtransform: {
                    enable: true,
                    config: {}
                },
                url: {
                    enable: true,
                    config: {
                        limit: 10240 // 设定转换尺寸上限
                    }
                },
                cssModules: {
                    enable: false,
                    config: {
                        namingPattern: 'module',
                        generateScopedName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            }
        }
    },
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        module: {
            postcss: {
                autoprefixer: {
                    enable: true,
                    config: {
                        browsers: [
                            'last 3 versions',
                            'Android >= 4.1',
                            'ios >= 8'
                        ]
                    }
                },
                cssModules: {
                    enable: false,
                    config: {
                        namingPattern: 'module',
                        generateScopedName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            }
        }
    }
};
module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'));
    }
    return merge({}, config, require('./prod'));
};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map