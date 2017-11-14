import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
import routes from './routes';
import renderFullPage from './renderFullPage';
import getPokemon from '../services/getPokemon';
import App from '../components/App';
import Helmet from 'react-helmet';

export default function router(req, res) {

    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

    if(req.url.indexOf('google354c0c53acaf0066') != -1){
        res.status(200).send('google-site-verification: google354c0c53acaf0066.html');
        return;
    }

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    const store = configureStore();

    return getPokemon.withAbility('decaaa2e-b0f4-4763-b5c2-3f2ec2d66a11')
        .then(resp => {
            const pokemon = { list: resp.data } ;

            const context = {}

            const body = renderToString(
                <StaticRouter context={context} location={req.url} >
                    <Provider store={store}>
                      <App pokemon={pokemon}/>
                    </Provider>
                </StaticRouter>
            )
            const helmet = Helmet.renderStatic();
            const htmlAtt = helmet.htmlAttributes.toString();
            const head = helmet.title.toString() + helmet.meta.toString() + helmet.link.toString();
            res.status(200).send(renderFullPage(head, body, pokemon));
        })
        .catch(err => res.status(404).send(`${err}: Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!`));
};
