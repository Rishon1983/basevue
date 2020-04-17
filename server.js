const express = require('express');

const app = express();
const publicDir = 'dist';

app.use(express.static(publicDir));

app.get('/*', function (req, res) {
    res.sendfile('index.html', { root: publicDir} );
});

/*app.get('/api/!*', (req, res) => {

});*/

app.listen(80, () => {
    console.log('Server started ');
});