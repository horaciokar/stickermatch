require('dotenv').config();

const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('StickerMatch funcionando');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor iniciado en puerto 3000');
});