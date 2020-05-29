const path = require("path");

const PATHS = {
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
};
module.exports = {
    entry: {
        app: path.resolve(PATHS.src, "app.ts"),
    },
    output: {
        filename: "[name].js",
        path: PATHS.public,
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devServer: {
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        stats: "errors-only",
        open: true,
        overlay: true,
        contentBase: PATHS.public,
        compress: true,
    }
};
