# Matrices
nodejs module than make operations with Matrices, oparations like: transpose, subtration, sum, multiply, hadamard products.
>Perfect for FeedForward(Neural Network)

**News:**

  >Matrices.js now is a nodejs module;
  
  >new exception(read in Exceptions);

**Functions:**

* Create()
  >Return object with matrix and your dimensions;
  
  >Arguments: rows, cols;
* Sum()
  >Return sum between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
* Hadamard()
  >Return products hadamard between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
* Multiply()
  >Return multiply between matrices 'a' and 'b';
  
  >Arguments: rows, cols;

  >The matrix 'b' require rows equal cols of matrix 'a';
* Transpose()
  >transpose matrix;
  
  >Arguments: a;
* Subtration()
  >Return subtration between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
  
***Exceptions:***

  >Return -1 | Matrices don't have requirements for operation;

  >Return -2 | Matrices or Matrix is corrupted;

  >Return -3 | Lack of Arguments;
