const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(app.get('port'), () => console.log('webhook server is listening on port 3000'))