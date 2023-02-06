import express, { Application } from 'express';
import mongoose from 'mongoose';

const app: Application = express();

// here db is refered from docker mongodb instance there we referd mongodb as db
// 27017 is the default db port mongodb
mongoose
  .connect('mongodb://sreehari:123456789@db:27017/?authSource=admin')
  .then(() => console.log('Connected to mongodb'))
  .catch((er) => console.log(er));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('App is listening on PORT ' + PORT));
