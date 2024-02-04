const router = require('..');
const errorController = require('../../controllers/error');

router.get('/', errorController.get404);

module.exports = router;
