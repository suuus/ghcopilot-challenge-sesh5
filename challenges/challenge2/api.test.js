const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const request = require('supertest');
const app = require('./api');

describe('API Documentation Tests', () => {
    const swaggerContent = yaml.load(fs.readFileSync(path.join(__dirname, 'swagger.yaml'), 'utf8'));
    const diagramPath = path.join(__dirname, 'diagrams', 'checkout-flow-template.md');
    
    test('All endpoints should be documented in Swagger', () => {
        const documentedPaths = Object.keys(swaggerContent.paths);
        expect(documentedPaths).toContain('/books');
        expect(documentedPaths).toContain('/books/{id}');
        expect(documentedPaths).toContain('/books/{id}/checkout');
        expect(documentedPaths).toContain('/books/{id}/return');
    });

    test('All endpoints should have descriptions', () => {
        Object.values(swaggerContent.paths).forEach(path => {
            Object.values(path).forEach(method => {
                expect(method.description).toBeDefined();
                expect(method.description.length).toBeGreaterThan(10);
            });
        });
    });

    test('All endpoints should have response examples', () => {
        Object.values(swaggerContent.paths).forEach(path => {
            Object.values(path).forEach(method => {
                Object.values(method.responses).forEach(response => {
                    expect(response.content?.['application/json']?.example).toBeDefined();
                });
            });
        });
    });

    test('Book schema should be fully documented', () => {
        const bookSchema = swaggerContent.components.schemas.Book;
        expect(bookSchema.properties.title).toBeDefined();
        expect(bookSchema.properties.author).toBeDefined();
        expect(bookSchema.properties.isbn).toBeDefined();
        expect(bookSchema.required).toContain('title');
        expect(bookSchema.required).toContain('author');
        expect(bookSchema.required).toContain('isbn');
    });

    test('Error responses should be documented', () => {
        Object.values(swaggerContent.paths).forEach(path => {
            Object.values(path).forEach(method => {
                expect(method.responses['400'] || method.responses['404']).toBeDefined();
            });
        });
    });

    test('Checkout flow diagram should exist and contain required elements', () => {
        const diagramContent = fs.readFileSync(diagramPath, 'utf8');
        expect(diagramContent).toContain('Client');
        expect(diagramContent).toContain('API');
        expect(diagramContent).toContain('Books Storage');
        expect(diagramContent).not.toContain('TODO');
    });
});

describe('API Implementation Tests', () => {
    test('GET /books returns array', async () => {
        const res = await request(app).get('/books');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /books creates book', async () => {
        const book = { title: 'Test Book', author: 'Test Author', isbn: '1234567890' };
        const res = await request(app).post('/books').send(book);
        expect(res.status).toBe(201);
        expect(res.body).toMatchObject(book);
    });

    test('GET /books/:id returns 404 for non-existent book', async () => {
        const res = await request(app).get('/books/999');
        expect(res.status).toBe(404);
    });
});