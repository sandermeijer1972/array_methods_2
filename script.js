const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
 
const findSpiderMan = function(superheroes) {
    return superheroes.find(function(superhero) {
        return superhero.name === "Spiderman";
    });
};

//console.log("Find Spiderman:", findSpiderMan(superheroes)); 
console.log(findSpiderMan(superheroes)) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// deel B

const doubleArrayValues = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 2);
    });
    return newArray;
  };

console.log(doubleArrayValues([1,2,3]));


// deel C

const array1 = [1, 4, 3, 6, 9, 7, 11];
// result should be true
const array2 = [1,2,1,2,1,2];
// result should be false

function isBiggerThan10(i) {
    return i > 10;
  };
  
console.log(array1.some(isBiggerThan10)); // true
console.log(array2.some(isBiggerThan10)); // false

//deel D
const arrayCountries = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

function isItalyInTheGreat7(country) {
    return country.includes('Italy');
};

console.log(isItalyInTheGreat7(arrayCountries));

//deel E

const arrayTenTimes = [1,4,3,6,9,7,11];
const multiplyTenTimesValues = function(array) {
    let multipliedArray = [];
    array.forEach(number => {
      multipliedArray.push(number * 10);
    });
    return multipliedArray;
  };

console.log(multiplyTenTimesValues(arrayTenTimes));

//deel F
const under100Array = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 101, 77, 84, 98 ];

function isSmallerThan100(i) {
    return i < 100;
};
console.log(under100Array.every(isSmallerThan100)); // false

//deel G
const totalSumArray = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const sum = totalSumArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0);

console.log(sum);







