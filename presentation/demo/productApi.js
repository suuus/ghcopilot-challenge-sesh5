const express = require('express');
const router = express.Router();

const products = new Map();

router.get('/products', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const items = Array.from(products.values());
    const start = (page - 1) * limit;
    res.json(items.slice(start, start + limit));
});

router.post('/products', (req, res) => {
    const { id, name, price, category, stock } = req.body;
    if (products.has(id)) {
        return res.status(409).json({ error: 'Product already exists' });
    }
    products.set(id, { id, name, price, category, stock });
    res.status(201).json({ id, name, price, category, stock });
});

router.get('/products/:id', (req, res) => {
    const product = products.get(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});

router.put('/products/:id/stock', (req, res) => {
    const product = products.get(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const { quantity } = req.body;
    if (typeof quantity !== 'number' || quantity < 0) {
        return res.status(400).json({ error: 'Invalid stock quantity' });
    }
    product.stock = quantity;
    res.json(product);
});

router.post('/products/:id/order', (req, res) => {
    const product = products.get(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const { quantity } = req.body;
    if (typeof quantity !== 'number' || quantity <= 0) {
        return res.status(400).json({ error: 'Invalid order quantity' });
    }
    if (product.stock < quantity) {
        return res.status(400).json({ error: 'Insufficient stock' });
    }
    product.stock -= quantity;
    res.json({
        orderId: Date.now().toString(),
        product: product.id,
        quantity,
        total: product.price * quantity
    });
});

module.exports = router;