const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('pages'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
 
// package.json file
  "name": "feedback-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  }
}
