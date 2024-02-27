// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add middleware to parse request body
app.use(express.json());

// Create a list of comments
const comments = [
  {id: 1, author: 'John', body: 'This is a comment'},
  {id: 2, author: 'Tom', body: 'Another comment'}
];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to get a comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  res.json(comment);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,