const express = require('express')
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/photos', (req, res) => {
  let id = req.query;
  axios.get('http://localhost:3001/photos', {
      params: id
    }).
      then((data) => {
        let photos = data.data;
        res.send(photos);
      }).
      catch((error) => {
        console.log(error);
      });
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
