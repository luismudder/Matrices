# Matrices
nodejs module than make operations with Matrices, oparations like: transpose, subtration, sum, multiply, hadamard products.
>Perfect for FeedForward(Neural Network)

**News:**
  >Matrices.js now is a nodejs module;

  > Function setValue(don't static);
  
  > Function getValue(don't static);

  > Function Escalar(static);

**Functions:**

* Create()
  >Return object with matrix and your dimensions;
  
  >Arguments: rows, cols;
```js
// Create() example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 3;
const cols = 2;

// Create matrix
const Matrix = Matrices.Create(rows, cols);

// return this object:

// Matrices {
//  Matrix: [ 
//    [ 0, 0 ],
//    [ 0, 0 ],
//    [ 0, 0 ] 
//  ],
//  rows: 3,
//  cols: 2
// }

```
* setValue()
  >Charge value in the Matrix;

  >Arguments: row, col, value;

  >argument 'value' is number;
  >'rol' and 'col' is number or 'all'(string);
```js
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
const row = 0;
const col = 1;

// Set value in row 1(in array is 0) and col 2(in array is 1)
Matrix.setValue(1, 2, newValue);

```
* Sum()
  >Return sum between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
```js
// Sum example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 2;
const cols = 2;

// Create matrices
// matrices must be the same size
const Matrix_1 = Matrices.Create(rows, cols);
const Matrix_2 = Matrices.Create(rows, cols);

// Sum
const result = Matrices.Sum(Matrix_1, Matrix_2);

```
* Hadamard()
  >Return products hadamard between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
```js
// Hadamard() example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 2;
const cols = 2;

// Create matrices
// matrices must be the same size
const Matrix_1 = Matrices.Create(rows, cols);
const Matrix_2 = Matrices.Create(rows, cols);

// hadamard products
const result = Matrices.Hadamard(Matrix_1, Matrix_2);

```
* Multiply()
  >Return multiply between matrices 'a' and 'b';
  
  >Arguments: a, b;

  >The matrix 'b' require rows equal cols of matrix 'a';
```js
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

```
* Transpose()
  >transpose matrix;
  
  >Arguments: a;
```js
// Transpose() example
// Import module
const Matrices = require("./Matrices");

// Dimensions
const rows = 2;
const cols = 2;

// Create matrix
const Matrix_1 = Matrices.Create(rows, cols);

// Transpose
const transposed = Matrices.Transpose(Matrix_1, Matrix_2);

```
* Subtration()
  >Return subtration between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
```js
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

```
* getValue()
  > return value from matrix;

  > arguments: row, col;
```js
// getValue() example
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
const row = 0;
const col = 1;

// Set value in row 1(in array is 0) and col 2(in array is 1)
Matrix.setValue(1, 2, newValue);

// get value

const value = Matrix.getValue(row, col);

```
* Escalar()
  >complete, but don't have a description or examples(for the time being)

***Exceptions:***

  >Return -1 | Matrices don't have requirements for operation;

  >Return -2 | Matrices or Matrix is corrupted;

  >Return -3 | Lack of Arguments;
