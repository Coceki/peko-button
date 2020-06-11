if (workbox) {
    console.log(`Yay! Workbox is loaded!`);
} else {
    console.log(`Boo! Workbox didn't load!`);
}


// 设置缓存前缀和后缀，请根据实际项目名修改
workbox.core.setCacheNameDetails({
    prefix: 'pekobutton',
    suffix: 'v1.0.5'
});


// have our sw update and control a web page as soon as possible.
workbox.core.skipWaiting(); // 强制等待中的 Service Worker 被激活
workbox.core.clientsClaim(); // Service Worker 被激活后使其立即获得页面控制权


// vue-cli3.0 supports pwa with the help of workbox-webpack-plugin, we need to get the precacheing list through this sentence.
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
        // 使用自定义缓存名称
        cacheName: 'css-cache'
    })
);
workbox.routing.registerRoute(
    // 缓存JS文件
    /.*\.js/,
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
        // 使用自定义缓存名称
        cacheName: 'js-cache'
    })
);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            })
        ]
    })
);



//缓存主站路由，按自己域名规则进行配置
workbox.routing.registerRoute(
    // Vue
    new RegExp('https://www.peko.top'),
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate()
);


// api缓存，优选从网络获取，网络异常时再使用缓存，请根据实际api url配置RegExp，只支持get请求
workbox.routing.registerRoute(
    new RegExp('https://peko.top'),
    workbox.strategies.staleWhileRevalidate({
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);