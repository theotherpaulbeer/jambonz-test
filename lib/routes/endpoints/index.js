const router = require('express').Router();

router.use('/call-status', require('./call-status'));
router.use('/hello-world', require('./tts-hello-world'));
router.use('/dial-time', require('./dial-time'));
router.use('/welcome', require('./welcome'));

module.exports = router;
