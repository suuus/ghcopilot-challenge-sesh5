const express = require('express');
const app = express();

// In-memory storage for books
const books = new Map();

app.use(express.json());

// Book routes to be documented
app.get('/books', (req, res) => {
    res.json(Array.from(books.values()));
});

app.get('/books/:id', (req, res) => {
    const book = books.get(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
});

app.post('/books', (req, res) => {
    const { title, author, isbn } = req.body;
    if (!title || !author || !isbn) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    books.set(isbn, { title, author, isbn });
    res.status(201).json({ title, author, isbn });
});

app.put('/books/:id', (req, res) => {
    if (!books.has(req.params.id)) {
        return res.status(404).json({ error: 'Book not found' });
    }
    const { title, author } = req.body;
    const updated = { ...books.get(req.params.id), title, author };
    books.set(req.params.id, updated);
    res.json(updated);
});

app.delete('/books/:id', (req, res) => {
    if (!books.has(req.params.id)) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books.delete(req.params.id);
    res.status(204).send();
});

// Checkout flow endpoints
app.post('/books/:id/checkout', (req, res) => {
    const book = books.get(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    if (book.checkedOut) {
        return res.status(400).json({ error: 'Book already checked out' });
    }
    book.checkedOut = true;
    book.checkedOutTo = req.body.userId;
    books.set(req.params.id, book);
    res.json(book);
});

app.post('/books/:id/return', (req, res) => {
    const book = books.get(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    if (!book.checkedOut) {
        return res.status(400).json({ error: 'Book is not checked out' });
    }
    book.checkedOut = false;
    book.checkedOutTo = null;
    books.set(req.params.id, book);
    res.json(book);
});

module.exports = app;