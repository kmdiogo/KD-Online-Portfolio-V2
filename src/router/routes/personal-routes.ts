import AboutMe from "@/views/Personal/AboutMe.vue"
import Skills from "@/views/Personal/Skills.vue";
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
    },
    {
        path: '/Skills',
        component: Skills,
        name: 'Skills.html',
        meta: {
            label: 'Skills.html',
            icon: 'fas file-code',
            iconColor: 'darkorange',
        }
    }
];

export default personalRoutes
