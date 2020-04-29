/*
OBJ1 returns: 8, 1846
OBJ2 returns: {yearNeptuneDiscovered: 1846}, 
              {yearMarsDiscovered: 1659}
OBJ3 returns: Your name is Alejandro and you like purple
              Your name is Melissa and you like green
              your name is undefined and you like green
ARJ1 returns: Maya, Marisa, Chi
ARJ2 returns: Raindrops on roses, whiskers on kittens, 
              ['Bright copper kettles',
               'warm woole mittens',
               'brown paper packages tied up with strings'
              ]
ARJ3 returns: [10, 30, 20]
*/

/*
  numbers: {
    a: 1,
    b: 2
  }
};
var a = obj.numbers.a;
var b = obj.numbers.b;
Write an ES2015 Version 
*/
let {a, b} = obj.numbers;


var arr = [1, 2];
//var temp = arr[0];
///arr[0] = arr[1];
//arr[1] = temp;
//Write an ES2015 Version 


[arr[0], arr[1]] = [arr[1], arr[0]]

/*
Write a function called raceResults which accepts a single array 
argument. It should return an object with the 
keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut)
*/



const raceResults = ([first, second, third,  ...rest]) => {
  return { first, second, third, ...rest };
}