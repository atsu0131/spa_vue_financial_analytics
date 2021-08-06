import Vue from "vue";
import VueRouter from "vue-router";

// ページコンポーネントをインポートする
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

import store from "./store";

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
    {
        path: "/",
        component: PhotoList,
        meta: { guestOnly: true }
    },
    {
        path: "/login",
        component: Login,
        beforeEnter(to, from, next) {
            if (store.getters["auth/check"]) {
                next("/");
            } else {
                next();
            }
        }
    }
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: "history", // ★ 追加
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        if (!store.getters["auth/check"]) {
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        if (!store.getters["auth/check"]) {
            next("/login");
        } else {
            next();
        }
    } else {
        next();
    }
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router;
