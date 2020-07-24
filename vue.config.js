const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack:{
        plugins:[
            new BundleAnalyzerPlugin(),
        ],

        // Exclude moment js bundled with chart.js, because it's huge and not used
        // Only in case you need moment.js functionality with chart.js remove this exclusion
        externals: {
            moment: 'moment'
        }
    },
    assetsDir: 'assets/',
    publicPath: '/',
    lintOnSave: false
};
