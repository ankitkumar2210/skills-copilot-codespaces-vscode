// create web server
const express = require('express');
const app = express();
const port = 3000;

// create path
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// create body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create comments
const comments = [
    {
        name: 'Stefan',
        comment: 'Today is a great day!'
    },
    {
        name: 'John',
        comment: 'I love this blog post!'
    }
];

// create comments route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// create add comment route
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// create server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
