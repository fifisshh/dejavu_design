module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/dejavu_design//" : "/",
    presets: [
        '@vue/cli-plugin-babel/preset'

    ]
}