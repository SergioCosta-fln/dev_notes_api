const express = require('express');
const router = express.Router();

const NoteController = require('./controllers/NoteController');

router.get('/ping', NoteController.ping);

// GET /api/notes -> pega todas as notas (id, titulo)
router.get('/notes', NoteController.all);

// GET /api/mote/123 -> pega informação de UMA NOTA
router.get('/note/:id', NoteController.one);

// POST /api/note -> adicionar uma nova nota
router.post('/note', NoteController.new);

// PUT /api/note/123 -> alterar uma nota
router.put('/note/:id', NoteController.edit);

// DELETE /api/note/123 -> deletar uma nota
router.delete('/note/:id', NoteController.delete);


module.exports = router;