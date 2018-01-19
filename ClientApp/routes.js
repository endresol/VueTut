import CounterExample from 'components/counter-example';
import FetchData from 'components/fetch-data';
import HomePage from 'components/home-page';
import Starbase from 'components/starbase';
import Jokester from 'components/jokester';

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { path: '/starbase', component: Starbase, display: 'Starbase', style: 'glyphicon glyphicon-star' },
    { path: '/jokester', component: Jokester, display: 'Jokester', style: 'glyphicon glyphicon-thumbs-up' },
]