const Router = require('koa-router');
const router = new Router();
const controller = require('../controller/controller');

router.get('/', controller.getController);
router.post('/', controller.postController);

exports.router = router;
