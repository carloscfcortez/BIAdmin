

const express = require('express');
const bodyParser = require('body-parser');
const router = require.Router();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.get('/', (req,res) => {
//     res.send('OK');

// });

//require('./controllers/authController')(app);



router.get('/', function(req,res,next){
    res.render('/views/index.html');
});

app.listen(3000);