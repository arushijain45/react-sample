import request from 'axios';

const getPokemon = {
    withAbility: (id) => {
        const baseUrl = 'http://dnitestapp-env.us-west-2.elasticbeanstalk.com/api/feeds/';
        return request.get(`${baseUrl}/${id}`)
    }
};

export default getPokemon;
