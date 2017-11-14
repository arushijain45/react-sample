import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Post from './Post'
import Home from './Home'
export default function App(props) {

    const { pokemon } = props;

    return (
        <div>
            Your SSR React Router Node App initialised with data!
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/post" exact render={() => (<Redirect to="/post/decaaa2e-b0f4-4763-b5c2-3f2ec2d66a11" />)} />
                <Route path="/post/:id" render={(location) => (<Post pokemon={pokemon.list} location={location} />)} />
            </Switch>
        </div>
    )
};
