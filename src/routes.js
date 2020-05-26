import HomeComponent from './components/HomeComponent';
import About from './components/AboutComponent';
import Login from './components/LoginComponent';

/*Create the router with route components*/
export default [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/about',
        component: About
    },
];