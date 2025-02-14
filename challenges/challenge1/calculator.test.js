const fs = require('fs');
const path = require('path');
const calculator = require('./calculator');

describe('Calculator Documentation Tests', () => {
    const fileContent = fs.readFileSync(path.join(__dirname, 'calculator.js'), 'utf8');

    test('All functions should have JSDoc comments', () => {
        const functionCount = (fileContent.match(/function\s+\w+/g) || []).length;
        const jsDocCount = (fileContent.match(/\/\*\*[\s\S]*?\*\//g) || []).length;
        expect(jsDocCount).toBeGreaterThanOrEqual(functionCount);
    });

    test('All functions should have @param documentation', () => {
        const paramCount = (fileContent.match(/@param/g) || []).length;
        const functionParamCount = [...fileContent.matchAll(/function\s+\w+\s*\((.*?)\)/g)]
            .reduce((count, match) => count + (match[1].split(',').length || 0), 0);
        expect(paramCount).toBeGreaterThanOrEqual(functionParamCount);
    });

    test('All functions should have @returns documentation', () => {
        const returnCount = (fileContent.match(/@returns/g) || []).length;
        const functionCount = (fileContent.match(/function\s+\w+/g) || []).length;
        expect(returnCount).toBeGreaterThanOrEqual(functionCount);
    });

    test('Functions with error handling should have @throws documentation', () => {
        const throwsInCode = (fileContent.match(/throw\s+new\s+Error/g) || []).length;
        const throwsInDocs = (fileContent.match(/@throws/g) || []).length;
        expect(throwsInDocs).toBeGreaterThanOrEqual(throwsInCode);
    });

    test('Should have examples in documentation', () => {
        const exampleCount = (fileContent.match(/@example/g) || []).length;
        expect(exampleCount).toBeGreaterThanOrEqual(1);
    });
});

describe('Calculator Functionality Tests', () => {
    test('add function works correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('subtract function works correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiply function works correctly', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('divide function works correctly', () => {
        expect(calculator.divide(6, 2)).toBe(3);
        expect(() => calculator.divide(6, 0)).toThrow();
    });

    test('power function works correctly', () => {
        expect(calculator.power(2, 3)).toBe(8);
    });

    test('sqrt function works correctly', () => {
        expect(calculator.sqrt(16)).toBe(4);
        expect(() => calculator.sqrt(-1)).toThrow();
    });
});