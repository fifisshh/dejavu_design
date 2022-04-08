module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/vue-spotify/" : "/",
    presets: [
        '@vue/cli-plugin-babel/preset'

    ]
}