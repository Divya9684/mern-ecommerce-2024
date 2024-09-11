const express = require('express');
const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require('../../controllers/admin/products-controller');
const { upload } = require('../../helpers/cloudinary');

const router = express.Router();

// Route for handling image uploads
router.post('/upload-image', upload.single('my_file'), handleImageUpload);

// Routes for handling product-related operations
router.post('/add', addProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/get', fetchAllProducts);

module.exports = router;
