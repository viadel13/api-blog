const route = require('express').Router();
const blogController = require('../controllers/blog.controller');

route.post('/articles', blogController.createArticle);
route.get('/articles', blogController.getArticle);
route.get('/articlesCat/:cat', blogController.getArticleByCat);
route.get('/articles/:id', blogController.getArticleById);
route.patch('/article/:id', blogController.updateArticleById);
route.delete('/article/:id', blogController.deleteArticleById);

module.exports = route;