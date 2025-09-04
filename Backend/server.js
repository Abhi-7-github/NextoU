const express = require('express');
const app = express();
const port =  5000;

const electricianRoutes = require('./controllers/electrician');
const painterRoutes = require('./controllers/painter');
const plumberRoutes = require('./controllers/plumber');
const householdRoutes = require('./controllers/household');
const carpenterRoutes = require('./controllers/carpenter');
const acRoutes = require('./controllers/ac');

app.use('/api', electricianRoutes);
app.use('/api', painterRoutes);
app.use('/api', plumberRoutes);
app.use('/api', householdRoutes);
app.use('/api', carpenterRoutes);
app.use('/api', acRoutes);



app.use(express.json());

app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`);
})

