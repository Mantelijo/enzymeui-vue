const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack:{
        plugins:[
        ],
        // Exclude moment js bundled with chart.js, because it's huge and not used
        // Only in case you need moment.js functionality with chart.js remove this exclusion
        externals: {
            moment: 'moment'
        },


    },
    // Disable output file hashing
    filenameHashing:false,
    assetsDir: 'assets/',
    publicPath: '/',
    lintOnSave: false
};
