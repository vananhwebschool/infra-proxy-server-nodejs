const express = require('express');
const app = express();
const router = express.Router();

const port = 8080;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req,res){
    // res.sendFile(path + 'home.html');
    res.send({title:"home1"})
    res.status(200);
});

router.get('/about', function(req,res){
    // res.sendFile(path + 'about.html');
    res.send({title:"about1"})
    res.status(200);

});

app.use('/', router);

app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})