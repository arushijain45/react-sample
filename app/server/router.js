import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
import routes from './routes';
import renderFullPage from './renderFullPage';
import getPokemon from '../services/getPokemon';
import App from '../components/App';

export default function router(req, res) {

    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    const store = configureStore();

    return getPokemon.withAbility('decaaa2e-b0f4-4763-b5c2-3f2ec2d66a11')
        .then(resp => {
            const pokemon = { list: resp.data } ;

            const context = {}

            const html = renderToString(
                <StaticRouter context={context} location={req.url} >
                    <Provider store={store}>
                      <App pokemon={pokemon}/>
                    </Provider>
                </StaticRouter>
            )

            res.status(200).send(renderFullPage(html, pokemon));
        })
        .catch(err => res.status(404).send(`${err}: Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!`));
};
