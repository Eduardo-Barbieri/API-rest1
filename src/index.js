const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const routeCats = require('./routes/catsRoutes');
app.use('/cats', routeCats);

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));