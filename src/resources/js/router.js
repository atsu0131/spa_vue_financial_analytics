import Vue from "vue";
import VueRouter from "vue-router";

// ページコンポーネントをインポートする
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import NotFound from "./pages/NotFound.vue";
import Users from "./pages/User.vue";
import UserDetail from "./pages/UserDetail.vue";
import UserCreate from "./pages/UserCreate.vue";

import UserEdit from "./pages/UserEdit.vue";

import SystemError from "./pages/errors/System.vue";
import Dashboard from "./pages/Dashboard.vue";

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
    },
    {
        path: "*",
        component: NotFound
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/users",
        name: "users",
        component: Users
        // meta: { guestOnly: true }
    },
    {
        path: "/user/create",
        name: "user_create",
        component: UserCreate
    },
    {
        path: "/user/:id",
        name: "user_detail",
        component: UserDetail
    },
    {
        path: "/user/:id/edit",
        name: "user_edit",
        component: UserEdit
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/500",
        component: SystemError
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
