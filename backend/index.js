import express from 'express';
// import cors from 'cors';
import path from 'path';
// import passport from 'passport';

const app = express();

import router from './routes/index.js';
import config from '../config.js';
import { logErrors, errorHandler } from './middlewares/errorHandler.js';

// app.use(cors());
app.use(express.json());

router(app);

// Middlewares
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.info(`Server on ${config.host}:${config.port}`);
});