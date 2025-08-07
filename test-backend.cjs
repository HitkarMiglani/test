const express = require('express');
const cors = require('cors');

console.log('Express and CORS loaded successfully');
console.log('Express version:', require('express/package.json').version);
console.log('CORS version:', require('cors/package.json').version);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend server is running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Test backend server running on port ${PORT}`);
});
