const express = require('express');
const SocialMediaController = require('../controllers/socialMediaController');

const router = express.Router();
const controller = new SocialMediaController();

const setRoutes = (app) => {
    router.post('/posts', controller.createPost);
    router.get('/posts', controller.getPosts);
    router.delete('/posts/:id', controller.deletePost);

    app.use('/api/social-media', router);
};

module.exports = setRoutes;