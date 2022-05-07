// Multiply() example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 2;
const cols = 2;

// Create matrices
// matrix cols from 'a' equal rows from matrix 'b'
const Matrix_1 = Matrices.Create(rows, cols);
const Matrix_2 = Matrices.Create(rows, cols);

// Multiply
const result = Matrices.Multiply(Matrix_1, Matrix_2);
