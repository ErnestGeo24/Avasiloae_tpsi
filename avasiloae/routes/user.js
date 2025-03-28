const express = require('express');
const fs = require('fs');
const router = express.Router();

const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Restituisce tutti gli utenti
router.get('/users', (req, res) => {
    res.json(users);
});

// Restituisce un utente specifico in base all'email
router.get('/users/:email', (req, res) => {
    const user = users.find(u => u.email === req.params.email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Utente non trovato' });
    }
});

module.exports = router;
