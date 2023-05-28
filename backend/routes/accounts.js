import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.json({ message: 'Hola mundo'});
  } catch (error) {
    next(error);
  }
})

//create res.status(201).json({})
//not found res.status(404).json({})

export default router;