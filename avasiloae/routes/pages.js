const express = require('express');
const fs = require('fs');
const router = express.Router();

const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Route per visualizzare la pagina di un utente specifico
router.get('/people/:email', (req, res) => {
    const user = users.find(u => u.email === req.params.email);
    if (user) {
        res.render('people', { user });
    } else {
        res.status(404).send('<h1>Utente non trovato</h1>');
    }
});

module.exports = router;
