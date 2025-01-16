const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /welcome');
  try {

    const filePath = path.join(__dirname, 'audio', 'welcome.mp3');
    res.set({
        'Content-Type': 'audio/mpeg',
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=3600'
      });
    res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).json({ 
            error: 'Error streaming audio file',
            details: err.message 
          });
        }
      });    
    } catch (err) {
        logger.error({err}, 'Error');
        res.sendStatus(503);
    }
});

module.exports = router;

