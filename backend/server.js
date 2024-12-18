const express = require('express');
const app = express();
const port = 4000; // Server port set to 4000

// Mock highlight data
const highlights = [
  { id: 1, team: 'Team A', highlight: 'Goal by Player 1' },
  { id: 2, team: 'Team B', highlight: 'Assist by Player 2' },
];

// Serve a simple response for the /home path
app.get('/home', (req, res) => {
  res.send('Welcome to ALLBALL HUB!');
});

// API endpoint for highlights
app.get('/highlights', (req, res) => {
  res.json(highlights);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
