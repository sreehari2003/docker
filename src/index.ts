import express, { Application } from 'express';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('App is listening on PORT ' + PORT));
