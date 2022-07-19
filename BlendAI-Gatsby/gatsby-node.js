exports.onCreateWebpackConfig = ({
    actions,
}) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
        // externals: {
        //     jquery: 'jQuery', // important: 'Q' capitalized
        // },
        resolve: {
            fallback: {
                // fs: false,
                // "tls": false,
                // "net": false,
                // "path": false,
                // "zlib": false,
                // "http": false,
                // "https": false,
                // "stream": false,
                // "crypto": false,
                // assert: require.resolve("assert/"),
                // crypto: require.resolve("crypto-browserify"),
                // http: require.resolve("stream-http"),
                // https: require.resolve("https-browserify"),
                // os: require.resolve("os-browserify/browser"),
                // stream: require.resolve("stream-browserify"),
                // fs: 'empty'
            },
        },
    })
} 