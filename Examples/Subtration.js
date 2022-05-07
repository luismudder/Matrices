// Subtration() example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 2;
const cols = 2;

// Create matrices
// matrices must be the same size
const Matrix_1 = Matrices.Create(rows, cols);
const Matrix_2 = Matrices.Create(rows, cols);

// Subtration
const result = Matrices.Subtration(Matrix_1, Matrix_2);
