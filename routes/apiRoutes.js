/* eslint-disable radix */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import peopleRoutes from './PeopleRoutes.js';
import ratingRoutes from './RatingsRoutes.js';

import db from '../database/initializeDB.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.send('Welcome to the Movies API!');
});

///  People's Routes ////
router.use('/People.js', peopleRoutes);
/// People Routes
router.route('/People.js')
  .get(async (req, res) => {
    try {
      const test = req.body.first_name;
      const result = await db.people.create({
        person_id: 1234,
        first_name: 'Steve',
        last_name: 'Johnson'
      });
      res.send('Reached here');
    } catch (err) {
      console.log(err);
      res.send({message: 'Did not reach here'});
    }
  });

///  Rating's Routes ////
router.route('/ratings')
  .get(async (req, res) => {
    try {
      const rating = await DataView.Ratings.findAll();
      const reply = rating.length > 0 ? { data: rating} : { message: 'No results'};
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Error in Server');
    }
  });
router.route('/ratings/:rating_id').get(async(req, res) => {
  try {
    const rating = await db.Ratings.findAll({
      where: {
        rating_id: req.params.rating_id
      }
    });
    res.json(rating);
  } catch (err) {
    console.log(err);
    res.error('Error in server');
  }
});

/// /////////////////////////////////
/// ////Availability Endpoints////////
/// /////////////////////////////////

router.route('/availability').get(async (req, res) => { // res, req, next
  try {
    const availability = await db.Availability.findAll();
    const reply = availability.length > 0 ? { data: availability } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/availability/:availability_id').get(async (req, res) => {
  try {
    const availability = await db.Availability.findAll({
      where: {
        availability_id: req.params.availability_id
      }
    });
    res.json(availability);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Images Endpoints////////
/// /////////////////////////////////
router.route('/images').get(async (req, res) => {
  try {
    const images = await db.Images.findAll();
    const reply = images.length > 0 ? { data: images } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/images/:image_id').get(async (req, res) => {
  try {
    const image = await db.Images.findAll({
      where: {
        image_id: req.params.image_id
      }
    });
    res.json(image);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Movies Endpoints////////
/// /////////////////////////////////
router.route('/movies').get(async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movies/:movie_id').get(async (req, res) => {
  try {
    const movie = await db.Movies.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
