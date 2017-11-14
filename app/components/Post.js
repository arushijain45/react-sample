import React from 'react';
import Helmet from 'react-helmet';

function Post(props) {

    const { pokemon, location } = props
    const { ability } = location.match.params;

    return (
        <div>
            <Helmet>
                <title>{pokemon.description}</title>
                <meta name="description" content={pokemon.description} />
                <meta name="image" content={pokemon.thumbnailUrl} />
                <meta name="og:title" content={pokemon.description} />
                <meta name="og:description" content={pokemon.description} />
                <meta name="og:image" content={pokemon.thumbnailUrl} />
            </Helmet>
            <h3>{ability}</h3>
            {/* <ul>
                { pokemon.map(poke => {
                    const { pokemon } = poke;
                    return <li key={pokemon.id}>{pokemon.description}</li>
                })}
            </ul> */}
            <h2>{pokemon.description}</h2>
        </div>
    )

}

export default Post;
