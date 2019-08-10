const axios = require('axios');
const env = require('../../config');
const Dev = require('../model/dev.model');

async function store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if(userExists) {
        return res.json(userExists);
    }

    const response = await axios.get(env.API_GITHUB + username);

    const { name, bio, avatar_url } = response.data;

    const dev = await Dev.create({
        name,
        user: username,
        bio,
        avatar: avatar_url
    });

    return res.json(dev);
}

module.exports = {
    store
};
