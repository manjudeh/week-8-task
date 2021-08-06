const router = require('express').Router();
const verify = require('../middlewares/verify');
const {addProduct, getProduct, getProducts, updateProduct, deleteProduct} = require('../controllers/products')

// routes for loggedin users to add products
router.post('/addproduct', verify, addProduct);

//to get a single product
router.get('/getproduct', verify, getProduct);

// to get all products

router.get('/getallproducts', verify, getProducts);

// to update product info
router.put('updateproductinfo', verify, updateProduct);

//to delete products
router.delete('/deleteproduct', verify, deleteProduct);

module.exports = router;