# Matrices
Class in js than make operations with Matrices, oparations like: transpose, subtration, sum, multiply, hadamard products.
>Perfect for FeedForward(Neural Network)
>
**Functions:**

* Matrices()
  >Return object with matrix and your dimensions;
  
  >Arguments: rows, cols;
* Matrices.sum()
  >Return sum between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
* Matrices.hadamard()
  >Return products hadamard between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
* Matrices.multiply()
  >Return multiply between matrices 'a' and 'b';
  
  >Arguments: rows, cols;

  >The matrix 'b' require rows equal cols of matrix 'a';
* Matrices.transpose()
  >transpose matrix;
  
  >Arguments: a;
* Matrices.subtration()
  >Return subtration between matrices 'a' and 'b';
  
  >Arguments: a, b;
  
  >The matrices require equal dimensions;
  
***Exceptions:***

  >Return -1 | Matrices don't have requirements for operation;

  >Return -2 | Matrices or Matrix is corrupted;
