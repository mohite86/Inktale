/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */
const deleteBlog = require('../controllers/blog_delete_controller');


// DELETE route: Delete blog
router.delete('/:blogId/delete', deleteBlog);

module.exports = router;