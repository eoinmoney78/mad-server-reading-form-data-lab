

const express = require('express');
const app = express();
const PORT = 5000;

// Set up middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up route to display the first form


app.get('/first-word', (req, res) => {
  res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #006146">
      <form method="POST" action="/second-word" style="background-color: #fff; padding: 20px; border-radius: 10px">
        <label for="noun">Enter a noun:</label>
        <input type="text" id="noun" name="noun" placeholder="Noun">
        <br><br>
        <button type="submit">Submit</button>
      </form>
    </div>
  `);
});




// Set up route to handle form submission for the first form
app.post('/second-word', (req, res) => {
  const noun = req.body.noun;
  console.log(`Noun: ${noun}`);
  res.send(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #006344">
    <form method="POST" action="/third-word">
      <label for="adjective">Enter an adjective:</label>
      <input type="text" id="adjective" name="adjective" placeholder="Adjective">
      <br>
      <input type="hidden" name="noun" value="${noun}">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Set up route to handle form submission for the second form
app.post('/third-word', (req, res) => {
  const noun = req.body.noun;
  const adjective = req.body.adjective;
  console.log(`Adjective: ${adjective}`);
  res.send(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #006355">
    <form method="POST" action="/fourth-word">
      <label for="verb">Enter a verb:</label>
      <input type="text" id="verb" name="verb" placeholder="Verb">
      <br>
      <input type="hidden" name="noun" value="${noun}">
      <input type="hidden" name="adjective" value="${adjective}">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Set up route to handle form submission for the third form
app.post('/fourth-word', (req, res) => {
  const noun = req.body.noun;
  const adjective = req.body.adjective;
  const verb = req.body.verb;
  console.log(`Verb: ${verb}`);
  res.send(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #006366">
    <form method="POST" action="/fifth-word">
      <label for="adverb">Enter an adverb:</label>
      <input type="text" id="adverb" name="adverb" placeholder="Adverb">
      <br>
      <input type="hidden" name="noun" value="${noun}">
      <input type="hidden" name="adjective" value="${adjective}">
      <input type="hidden" name="verb" value="${verb}">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Set up route to handle form submission for the fourth form


app.post('/fifth-word', (req, res) => {

  const noun = req.body.noun;
  const adjective = req.body.adjective;
  const verb = req.body.verb;
  const adverb = req.body.adverb;
  console.log(`Adverb: ${adverb}`);
  // create the story with the input values
  const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. The end.`;
  // send the story as a response to the user

  res.send(`
    <div style="background-color: green; padding: 20px; text-align: center;">
      <h1 style="color: white;">Story Time!</h1> 
      <p style="color: white;">${story}</p> 
      <button style="background-color: white; color: green; padding: 10px 20px; border: none; border-radius: 5px; font-size: 18px; cursor: pointer;" onclick="window.location.href='/first-word'">Play again</button> 
    </div>
  `);
});


// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});