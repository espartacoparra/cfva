const express = require('express');
const router = require('./src/routes/routes');
const sessionRoutes = require('./src/routes/sessionRoutes');
const path = require('path');
const bodyParser = require('body-parser')
const Middlewares = require('./src/middlewares/middlewares');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.set("port", process.env.Port || 3000);
app.get('/hola',(req,res)=>{
    res.json('hola');
});
app.use('/api', sessionRoutes);
app.use('/api', Middlewares.apitoken, router);
app.get('/*',(req,res)=>res.sendFile(path.join(__dirname+'/public/index.html')));

app.listen(app.get('port'), () => {
    console.log('Corriendo en el puerto :' + app.get('port'));
});