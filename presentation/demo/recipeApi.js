const express = require('express');
const router = express.Router();

const recipes = new Map();

// Recipe management endpoints
router.get('/recipes', (req, res) => {
    const cuisine = req.query.cuisine;
    const items = Array.from(recipes.values());
    if (cuisine) {
        return res.json(items.filter(recipe => recipe.cuisine === cuisine));
    }
    res.json(items);
});

router.post('/recipes', (req, res) => {
    const { id, name, ingredients, cuisine, preparationTime } = req.body;
    if (!name || !ingredients || !cuisine) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    if (recipes.has(id)) {
        return res.status(409).json({ error: 'Recipe already exists' });
    }
    const recipe = { id, name, ingredients, cuisine, preparationTime, ratings: [] };
    recipes.set(id, recipe);
    res.status(201).json(recipe);
});

router.get('/recipes/:id', (req, res) => {
    const recipe = recipes.get(req.params.id);
    if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
});

router.post('/recipes/:id/rate', (req, res) => {
    const recipe = recipes.get(req.params.id);
    if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    const { rating, userId } = req.body;
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    recipe.ratings.push({ userId, rating, date: new Date() });
    const avgRating = recipe.ratings.reduce((sum, r) => sum + r.rating, 0) / recipe.ratings.length;
    recipe.averageRating = Math.round(avgRating * 10) / 10;
    recipes.set(req.params.id, recipe);
    res.json(recipe);
});

router.put('/recipes/:id', (req, res) => {
    if (!recipes.has(req.params.id)) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    const { name, ingredients, cuisine, preparationTime } = req.body;
    const updated = { 
        ...recipes.get(req.params.id),
        name: name || recipes.get(req.params.id).name,
        ingredients: ingredients || recipes.get(req.params.id).ingredients,
        cuisine: cuisine || recipes.get(req.params.id).cuisine,
        preparationTime: preparationTime || recipes.get(req.params.id).preparationTime
    };
    recipes.set(req.params.id, updated);
    res.json(updated);
});

module.exports = router;