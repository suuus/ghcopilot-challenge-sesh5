// Undocumented math utilities for Demo 1
function calculateArea(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error('Dimensions must be positive numbers');
    }
    return length * width;
}

function calculateCircumference(radius) {
    if (radius <= 0) {
        throw new Error('Radius must be positive');
    }
    return 2 * Math.PI * radius;
}

function calculateVolume(length, width, height) {
    if (length <= 0 || width <= 0 || height <= 0) {
        throw new Error('Dimensions must be positive numbers');
    }
    return length * width * height;
}

function convertUnits(value, fromUnit, toUnit) {
    const conversions = {
        'm_to_ft': 3.28084,
        'ft_to_m': 0.3048,
        'kg_to_lb': 2.20462,
        'lb_to_kg': 0.453592
    };
    
    const conversionKey = `${fromUnit}_to_${toUnit}`;
    if (!conversions[conversionKey]) {
        throw new Error('Unsupported unit conversion');
    }
    
    return value * conversions[conversionKey];
}

module.exports = {
    calculateArea,
    calculateCircumference,
    calculateVolume,
    convertUnits
};