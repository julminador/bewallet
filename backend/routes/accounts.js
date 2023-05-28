import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola mundo');
})

//create res.status(201).json({})
//not found res.status(404).json({})

export default router;