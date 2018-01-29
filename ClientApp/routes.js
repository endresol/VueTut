import CounterExample from 'components/counter-example';
import FetchData from 'components/fetch-data';
import HomePage from 'components/home-page';
import Starbase from 'components/starbase';
import Jokester from 'components/jokester';
import Turnout from 'components/turnout';
import Signin from 'components/signin';

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { path: '/starbase', component: Starbase, display: 'Starbase', style: 'glyphicon glyphicon-star' },
    { path: '/jokester', component: Jokester, display: 'Jokester', style: 'glyphicon glyphicon-thumbs-up' },
    { path: '/turnout', component: Turnout, display: 'Turnout', style: 'glyphicon glyphicon-calendar' },
    { path: '/signin', component: Signin, display: 'Signin', style: 'glyphicon glyphicon-calendar' },

]
