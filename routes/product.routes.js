const { Router } = require('express');
const router = Router();
const chkToken = require('../middlewares/auth.middleware');
const {
productsGet,
productsPost,
productsPut,
productsDelete
} = require('../controllers/Product.controller');

router.get('/products', chkToken ,productsGet);

router.post('/products', productsPost);

router.put('/products/:id', chkToken , productsPut);

router.delete('/products/:id', chkToken, productsDelete);

module.exports = router;