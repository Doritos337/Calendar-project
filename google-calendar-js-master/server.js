const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.use(express.static('styles'))
app.use(express.static('scripts'))

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});