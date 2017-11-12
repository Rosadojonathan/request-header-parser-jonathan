const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = module.exports = express();
const port = process.env.PORT | 3000;
const api = '/api/whoami';

app.use(bodyParser.json());
app.use(cors());

app.get(api, function(req,res){
 var language = req.acceptsLanguages();
 var software = req.get('User-Agent');
 const ipaddress = req.ip;

 res.json({'ipaddress':ipaddress, 'language':language[0], 'software':software});
})

app.listen(port, function(){
	console.log('server workign on port ' + port);
})
