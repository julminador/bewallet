import express from 'express';
import sequelize from '../libs/sequelize.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const [data, metadata] = await sequelize.query('SELECT * FROM accounts');
    res.json({ data, metadata});
  } catch (error) {
    next(error);
  }
})

//create res.status(201).json({})
//not found res.status(404).json({})

export default router;