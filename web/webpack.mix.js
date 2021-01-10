const mix = require('laravel-mix');

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

// mix.browserSync({
//     proxy: '0.0.0.0:8081', // アプリの起動アドレス
//     open: false // ブラウザを自動で開かない
// })

// mix.browserSync('vuesplash.test')
//     .js('resources/js/app.js', 'public/js')
//     .version()

mix.browserSync({
    proxy: '0.0.0.0:8081', // アプリの起動アドレス
    open: false
})
    .js('resources/js/app.js', 'public/js')
    .version()
