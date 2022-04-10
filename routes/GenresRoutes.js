import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You touched the Genre Routes');
  res.json({message: 'Welcome to Genre API'});
});
export default router;