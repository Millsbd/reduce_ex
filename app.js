function extractValue(arr,key){
    return arr.reduce(function(acc,nxt){
        acc.push(nxt[key]);
        return acc;
    }, []);
}

// accepts an array of objects and a key value. Sets a return so it will return a value then runs reduce on the input array of objects. 
// Sets the accumulator equal to an empt array, and evaluates each object in the array (loops via reduce and nxt represents each object in that array as it loops) pushes the values in each object associated with the entered key into a new array and returns that new array. 

// *** If i add an object here with a different key name it still gets pushed to the returned array just as undefined, why doesn't it just ignore that in the new array? **


function vowelCount(str) {
  const vowels = "aeiou";
  const arr = str.split("");
  // creating a variable for vowels and making the string into an array of letters

  return arr.reduce(function (acc, nxt) {
    if (vowels.indexOf(nxt) !== -1) {
      if (acc[nxt]) {
        acc[nxt]++;
      } else {
        acc[nxt] = 1;
      }
    }
    return acc;
  }, {});
}

// running reduce on the arr, need the return in front of it to make sure you are getting the value. 
// the accumulator is set to an empty object (see line 21) and then you run code to do things to this object
// you check if the next character in the array is a vowel, if it is you check to see if it is already the key of an object and if it is you add one to the count. If not you make it a key and set the count at 1
// you return the updated object

// you need the return at the beginning and the end of the if statement to have it run its callback evalution on every nxt in the array and also to return the final value when the iteration of reduce has completed. 

let keyValArray = [{name: 'ben'}, {name: 'doug'}, {name: 'kathy'}];

function addKeyValue(arr,key,value){
    return arr.reduce(function(acc,nxt){
        acc.push(nxt[key] = value);
    }, []);
}

// getting errors here and can't really figure out why it isn't working goal was:
// run reduce on the existing array of objects and create an accumulator which is an empty array
// here nxt will represtent each object in the array as it loops, and I am having it push in a modified object including the new key / value pair. 

function isOdd(num){
   return num % 2 !== 0;
}

let numArray = [1,2,3,4,5,6,7,8];


function partition (arr, callback){
    // let trueArr = [];
    // let falseArr = [];
    arr.reduce(function(acc,nxt){
        if(callback(nxt)){
            acc[0].push(nxt);
        } else{
            acc[1].push(nxt);
        }
        return acc;
    }, [[],[]] );
}

// using reduce and setting the accumulator equal to an array containing two empty arrays. Running a callback on each balue in the intially entered array and pushing that value to one or the other of the accumulator arrays depending on if it is true or false. 

// ****I get undefinied when I try to run this as partition(numArray, isOdd) in the console and can't figure out why?****
