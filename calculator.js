import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

export function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error("Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.");
    }
}
