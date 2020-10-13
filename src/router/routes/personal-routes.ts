import AboutMe from "@/views/AboutMe.vue"
import {RouteRecordRaw} from "vue-router";

const personalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/AboutMe',
        component: AboutMe,
        name: 'AboutMe.html',
        meta: {
            label: 'AboutMe.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    }
];

export default personalRoutes
