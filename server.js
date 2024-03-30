const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { noteRoutes } = require('./Routes/noteRoute');
require('dotenv').config();
const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// connection DB
const mongodb_url = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;
mongoose.connect(mongodb_url)
.then((data) => console.log('db connected'))
.catch((err) => console.log(err))


app.use('/', noteRoutes);

const port = process.env.PORT || 3200;

app.listen(port, () => console.log('server running at port ' + port));

