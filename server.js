const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });
// define app after loading dotenv, otherwise we won't have env vars inside there
const app = require('./app');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected successfully');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
