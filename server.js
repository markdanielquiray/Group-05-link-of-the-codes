const express = require('express');

const app = express();

const adminRoutes = require('./routes/api/admin');

app.use(express.json({extended:false}));

app.use('/api/admin',adminRoutes);

app.get('/',(req,res)=> res.send('API Running!'));

const PORT=5000;

app.listen(PORT,()=>console.log(`Server started on ${PORT}`));
