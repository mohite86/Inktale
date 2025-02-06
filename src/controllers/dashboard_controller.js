/**
 * custom module
 */
const User = require('../models/user_model');

/**
 * Render dashboard page for logged-in users.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @throws {Error} If there's an issue rendering the dashboard page.
 */
const renderDashboard = async (req, res) => {
    try {

        // Get logged user username
        const { username } = req.session.user;

        // Get session user data
        const loggedUser = await User.findOne({ username })
            .select('totalVisits totalReactions blogPublished blogs')
            .populate({
                path: 'blogs',
                select: 'title createdAt updatedAt reaction totalVisit',
                options: { sort: { createdAt: 'desc' } }
            });

        res.render('./pages/dashboard', {
            sessionUser: req.session.user,
            loggedUser
        });

    } catch (error) {

        // Log error
        console.log('Error rendering dashboard: ', error.message);
        throw error;

    }
}

module.exports = renderDashboard;