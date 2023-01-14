const { Router } = require('express');
const router = Router();
const {
categoriesGet
} = require('../controllers/Category.controller');

router.get('/categories' ,categoriesGet);


module.exports = router;