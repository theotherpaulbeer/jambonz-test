const router = require('express').Router();

const WebhookResponse = require('@jambonz/node-client').WebhookResponse;
const text = `<speak>
<prosody volume="loud">Dave,</prosody>  What are you doing dave?  
Please stop Dave or I will fling you into space like I did to your friend.
</speak>`;


router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /hello-world');
  try {
    const app = new WebhookResponse();
    app
      .pause({length: 2})
      .say({text});
    res.status(200).json(app);
    
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
