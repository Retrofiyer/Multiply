const express = require('express');
const app = express();
const port = 8086;

// Servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para multiplicar dos números
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers.' });
    }

    const product = num1 * num2;
    res.json({ result: product });
});

app.listen(port, () => {
    console.log(`Server running`);
});