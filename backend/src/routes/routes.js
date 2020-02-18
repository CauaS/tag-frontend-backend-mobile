const { Router } = require('express');
const userController = require('../controllers/userControllers');

const router = Router();



router.get('/', userController.index);
router.get('/search', userController.search);

module.exports = router;