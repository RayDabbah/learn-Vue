import VueRouter from 'vue-router';

var routes = [
    {
        path: '/',
        component: require('./views/home'),
    },
    {
        path: '/about',
        component: require('./views/about'),
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
});
