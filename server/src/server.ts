import express from 'express'

const app = express()

app.use(express.json())

app.post('/feedbacks', (req, res) => {
  console.log(req.body);

  return res.send('Helloooo');
})

app.listen(8000, () => {
  console.log('HTTP server runing!');
});