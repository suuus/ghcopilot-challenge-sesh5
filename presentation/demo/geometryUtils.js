function calculateArea(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error('Dimensions must be positive numbers');
    }
    return length * width;
}

function calculatePerimeter(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error('Dimensions must be positive numbers');
    }
    return 2 * (length + width);
}

function calculateCircleArea(radius) {
    if (radius <= 0) {
        throw new Error('Radius must be positive');
    }
    return Math.PI * radius * radius;
}

function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        throw new Error('Dimensions must be positive numbers');
    }
    return (base * height) / 2;
}

function calculateCylinderVolume(radius, height) {
    if (radius <= 0 || height <= 0) {
        throw new Error('Dimensions must be positive numbers');
    }
    return Math.PI * radius * radius * height;
}

module.exports = {
    calculateArea,
    calculatePerimeter,
    calculateCircleArea,
    calculateTriangleArea,
    calculateCylinderVolume
};