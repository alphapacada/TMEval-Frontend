import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import tmLanding from "./views/tmLanding.vue";
import tmHeader from "./layout/tmHeader.vue";
import About from "./views/About.vue";
import PredictionResult from "./views/PredictionResult.vue"
import Protvista from "./views/ProtvistaView.vue"
import TableTest from "./views/TableTest.vue"
import SideBar from "./views/Sidebar.vue"
import Assessment from "./views/Assessment.vue"
import TestResult from "./views/TestResult.vue"
import Downloads from "./views/Downloads.vue"
import DataComparison from "./views/DataComparison.vue"

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [{
            path: "/",
            name: "components",
            components: {
                header: tmHeader,
                // default: Components,
                default: tmLanding,
                footer: AppFooter
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                header: tmHeader,
                // default: Landing,
                default: tmLanding,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        },
        {
            path: "/tmlanding",
            name: "tmlanding",
            components: {
                header: tmHeader,
                default: tmLanding,
                footer: AppFooter
            }
        },
        {
            path: "/About",
            name: "about",
            components: {
                header: tmHeader,
                default: About,
                footer: AppFooter
            }
        },
        {
            path: "/prediction/:id",
            name: "prediction",
            components: {
                header: tmHeader,
                default: PredictionResult,
                footer: AppFooter
            }
        },
        {
            path: "/protvista",
            name: "protvista",
            components: {
                header: tmHeader,
                default: Protvista,
                footer: AppFooter
            }
        },
        {
            path: "/testpage",
            name: "testpage",
            components: {
                header: tmHeader,
                default: TableTest,
                footer: AppFooter
            }
        },
        {
            path: "/evaluation",
            name: "evaluation",
            components: {
                header: tmHeader,
                default: SideBar,
                footer: AppFooter
            },
            children: [
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                { path: '/evaluation/assessment', component: Assessment },

                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                { path: '/evaluation/table', component: TableTest },

                { path: '/evaluation/dataset-comparison', component: DataComparison }
            ]
        },
        {
            path: "/testresults",
            name: "testresults",
            components: {
                header: tmHeader,
                default: TestResult,
                footer: AppFooter
            }
        },
        {
            path: "/downloads",
            name: "downloads",
            components: {
                header: tmHeader,
                default: Downloads,
                footer: AppFooter
            }
        }


    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash, offset: { x: 0, y: 60 } };
        } else {
            return { x: 0, y: 0 };
        }
    }
});