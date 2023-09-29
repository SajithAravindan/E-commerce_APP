const router = require('express').Router();//Router
const { Category, Product } = require('../../models');//Import Models

// The `/api/categories` endpoint

// get all Categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],      
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get One Categories
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],      
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update Category
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
    {
      category_name: req.body.category_name,      
    },
    {
      where: {
        id: req.params.id,
      },
    });    
    res.status(200).json(categoryData);
  } catch (err) {
      res.status(500).json(err);
    };
});

// Delete Category
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
