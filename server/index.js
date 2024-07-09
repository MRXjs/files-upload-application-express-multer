const express = require('express')
const fileUploadRouter = require('./routes/fileUploadRoute'); // Correct import statement
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', fileUploadRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})