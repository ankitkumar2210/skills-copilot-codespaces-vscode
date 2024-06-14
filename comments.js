// create web server
// create web server
import express, { json } from 'express';
const app = express();
const port = 3000;

// use the middleware to parse the body of the request
app.use(json());

// import the comments data
import comments, { find, length, push, indexOf, splice } from './comments.json';

// get all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// get one comment by id
app.get('/comments/:id', (req, res) => {
  const comment = find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found');
  }
  res.json(comment);
});

// create a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: length + 1,
    text: req.body.text
  };
  push(comment);
  res.json(comment);
});

// update a comment
app.put('/comments/:id', (req, res) => {
  const comment = find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found');
  }
  comment.text = req.body.text;
  res.json(comment);
});

// delete a comment
app.delete('/comments/:id', (req, res) => {
  const comment = find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found');
  }
  const index = indexOf(comment);
  splice(index, 1);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});