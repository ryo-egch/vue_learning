import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import Page2 from '@/components/pages/page2'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        },
    ]
})