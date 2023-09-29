const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);//Route for category
router.use('/products', productRoutes);//Route for Product
router.use('/tags', tagRoutes);//Route for Tag

module.exports = router;
