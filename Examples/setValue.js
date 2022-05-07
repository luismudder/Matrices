// setValue() example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 2;
const cols = 2;

// Create matrix
const Matrix = Matrices.Create(rows, cols);

// New value
const newValue = 123;

// local
const row = 1;
const col = 2;

// Set value in row 1(in array is 0) and col 2(in array is 1)
Matrix.setValue(1, 2, newValue);
