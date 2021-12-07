const express = require('express');
const app = express();
const port = 3000;
const rutasMain = require('./routers/main');

app.use(express.static('public'))

app.use('/', rutasMain);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})