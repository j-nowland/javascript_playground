// create a function that takes in a string and returns the string reversed
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// function reverse(str) {
//   // check input
//   if (!str || str.length < 2 || typeof str !== 'string') {
//     return 'hmm that is not good';
//   }

//   const backwards = [];
//   const totalItems = str.length - 1;
//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   console.log(backwards);

//   return backwards.join('');
// }

// function reverse2(str) {
//   return str.split('').reverse().join('');
// }

// const reverse3 = str => [...str].reverse().join('');

// console.log(reverse('Hi My name is Andrei'));
// console.log(reverse2('Hi My name is Andrei'));