const axios = require('axios');
const env = require('../../config');
const Dev = require('../model/dev.model');

async function index(req, res) {
    const { user } = req.headers;
    
    const loggedDev = await Dev.findById(user);
    
    const users = await Dev.find({
        $and: [
            { _id: { $ne: user } },
            { _id: { $nin: loggedDev.likes } },
            { _id: { $nin: loggedDev.dislikes } }
        ]
    });
    
    return res.json(users);
}

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
    index,
    store
};
