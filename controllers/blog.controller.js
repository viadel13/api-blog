const Article = require('../models/Article');
const {StatusCodes} = require('http-status-codes');

const createArticle = async (req, res) =>{
    const articleUser = req.body;
    console.log(articleUser.datas);
    try {
        const article = await Article.create(articleUser.datas);
        res.send(article);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('une erreur est produite');
    }
 
};

const getArticle = async (req, res)=>{
    const article = await Article.find();
    res.send(article);
}

const getArticleByCat = async (req, res) => {
    try {
      const categorie = req.params.cat;
  
      const articles = await Article.find({ categorie });
  
      if (articles.length === 0) {
        res.status(StatusCodes.NOT_FOUND).send('Aucun article trouvé dans cette catégorie.');
      } else {
        res.send(articles);
      }
    } catch (error) {
      console.error('Erreur lors de la recherche des articles par catégorie :', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Erreur lors de la recherche des articles.');
    }
  };
  
const getArticleById = async (req, res)=>{
    const id = req.params.id;
    try {
        const articles = await Article.findById(id);
        res.send(articles);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Erreur lors de la recherche article.');
    }
};

const updateArticleById = async (req, res)=>{
    const id = req.params.id;
    const articles = await Article.findByIdAndUpdate(id, req.body, {new: true});
    res.send(articles);
}

const deleteArticleById = async (req, res)=>{
    const id = req.params.id;
    const article = await Article.findByIdAndDelete(id);
    if(article){
        res.send(`article ${article} supprimer avec succes `);
    }else{
        res.status(StatusCodes.NOT_FOUND).send('Contact introuvable');
    }
}

module.exports = {
    createArticle,
    getArticle,
    getArticleByCat,
    getArticleById,
    updateArticleById,
    deleteArticleById,
}