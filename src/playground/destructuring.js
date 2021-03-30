//object destrucuring
// const person={
//     name: 'Hari',
//     age: 35,
//     location: {
//         city: 'Kochi',
//         temp: 33
//     }
// }

// //const name = person.name;

// const {name: firstName = 'Anonymous', age=0} = person;
// const {city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age} years of age and living in ${city} and its ${temperature} degree celsius here `);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:pubName = 'self-Published'} = book.publisher;
// console.log(pubName);


//Array Destructuring

const address = ['E1101 Kakkanad', 'kochi', 'kerala', '682030', 606];
const [street, city, state, zip, phone = 1234]= address;

console.log(`You are in ${street} and can be contacted on ${phone}`)