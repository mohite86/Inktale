const router = require('express').Router();

/**
 * custom modulues
 */
const { renderReadingList } = require('../controllers/reading_list_controller');


// GET route: Render the reading list page.
router.get(['/', '/page/:pageNumber'], renderReadingList);

module.exports = router;