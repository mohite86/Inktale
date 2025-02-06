/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */
const { renderLogin, postLogin } = require('../controllers/login_controller')

// GET route: Render the login form.
router.get('/', renderLogin);

// POST route: Handles form submission for user login.
router.post('/', postLogin);

module.exports = router;