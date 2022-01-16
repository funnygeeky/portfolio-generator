 const printprofileData = profileDataArr => {
     //This ...
    //  for (let i = 0; i < profileDataArr.length; i += 1){
    //      console.log(profileDataArr[i]);
    //  }
    //  console.log('==============');

    //  //Is the same as this...
     profileDataArr.forEach((profileItem) => {
         console.log(profileItem)
     });
 }

const animalArray = ['dog', 'cat','pig'];

animalArray.push('cow');
console.log(animalArray);

const personObj = {
    name: 'Lernantino',
    age: 99
};
console.log(personObj);

personObj.age = 100;
personObj.occupation = 'Developer';
 console.log(personObj);


let message = 'Hello Node!';
message = 'Hello ES6!';

let sum = 5 + 3;
sum += 1;

console.log(message,sum);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
//   printProfileData(profileDataArgs);

  const addNums = (numOne, numTwo) => numOne + numTwo;

//   const sum = addNums =(5,3);

//   console.log(numOne, numTwo);

//   return numOne + numTwo;