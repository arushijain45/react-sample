import React from 'react';

function Post(props) {

    const { pokemon, location } = props
    const { ability } = location.match.params;

    return (
        <div>
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
