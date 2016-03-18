function sum(addThis, addThat) {
  var total = addThis + addThat;
  //console.log('The sum of ' + addThis + ' and ' + addThat + ' is ' + total + '.');
  return total;
}

function multiply(multThis, multThat) {
  var product = multThis * multThat;
  //console.log('The product of ' + multThis + ' and ' + multThat + ' is ' + product + '.');
  return product;
}

function sumAndMultiply(firstSAM, secondSAM, thirdSAM) {
  var sum1 = sum(firstSAM, secondSAM);
  var endSum = sum(sum1, thirdSAM);
  var product1 = multiply(firstSAM, secondSAM);
  var endProduct = multiply(product1, thirdSAM);
  console.log(firstSAM + ' and ' + secondSAM + ' and ' + thirdSAM + ' sum to ' + endSum + '.');
  console.log('The numbers ' + firstSAM + ' and ' + secondSAM + ' and ' + thirdSAM + ' have a product of ' + endProduct + '.');
  return [endSum, endProduct];
}

function sumArray(p4Array) {
  var total = 0;
  for (var i = 0; i < p4Array.length; i++) {
    total = total + p4Array[i];
  }
  console.table(p4Array);
  console.log(p4Array + ' was passed as an array of numbers, and ' + total + ' is their sum.');
  return total;
}

function multiplyArray(p5Array) {
  var total = 1;
  for (var i = 0; i < p5Array.length; i++) {
    total = total * p5Array[i];
  }
  console.table(p5Array);
  console.log('The numbers ' + p5Array + ' have a product of ' + total + '.');
  return total;
}
