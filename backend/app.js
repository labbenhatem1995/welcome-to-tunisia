const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
var cors = require('cors');
const publicationRoutes=require('./routes/publication');
const fileUpload = require('express-fileupload');

mongoose.connect("mongodb://localhost/projet",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());
  app.use(fileUpload());

  app.use('/auth', userRoutes);
  app.use('/publication',publicationRoutes);
  app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/../public/upload/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/upload/${file.name}` });
    });
  });


module.exports = app;