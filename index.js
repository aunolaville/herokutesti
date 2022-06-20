const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');

app.use(cors());
const PORT = process.env.PORT || 3001;
app.listen(PORT);
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
console.log(`Server running on port ${PORT}`);