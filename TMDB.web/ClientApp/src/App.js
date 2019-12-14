import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Upcoming } from './components/Upcoming';
import { Showcase } from './components/Showcase';
import { Details } from './components/Details';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Upcoming} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/Showcase' component={Showcase} />
                <Route path='/Details' component={Details} />
                <Route exact path='/Upcoming' component={Upcoming} />
            </Layout>
        );
    }
}
