module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pwa: {
      name: 'ぺこらボタン',
      msTileColor: '#728bf3',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js'
      },
      themeColor: '#728bf3'
    },
}