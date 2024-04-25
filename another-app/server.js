const express = require('express');
const app = express();
const router = express.Router();

const port = 9000;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req,res){
    // res.sendFile(path + 'home.html');
    res.send({title:"home2"})
    res.status(200);
});

router.get('/about', function(req,res){
    // res.sendFile(path + 'about.html');
    res.send({title:"about2"})
    res.status(200);

});

app.use('/', router);

app.listen(port, function () {
    console.log('Example app listening on port 9000!')
})