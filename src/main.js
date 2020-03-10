import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n'
import zhHans from './assets/lang/zhHans'
import en from './assets/lang/en'
import ja from './assets/lang/ja'
import VueCookies from 'vue-cookies'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'zhHans',
    messages: {
        'zhHans': zhHans,
        'en': en,
        'ja': ja
    }
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});
new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')