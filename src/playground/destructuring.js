

//Object destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Leszno',
//         temp: 95
//     }
// }

// const {name: firstname = 'ananymous', age} = person; //można rzypisać domyślną wartość jeśli nie ma takiej zmiennej

// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature} = person.location;//można zmienić nazwę zmiennej

// if(temperature && city){
//    console.log(`It's ${temperature} in ${city}`); 
// }


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name:'Penguin'
    }
}

const {name:publishername = 'Self-Published'} = book.publisher;

console.log(publishername);


//Arry destructurning
// const adress = [];
const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pensilvania', '19456'];

const [, city, state = 'New York', ] = adress;

console.log(`You are in ${city} ${state}`);

const item = ['Coffie','$2.00', '$2.5', '$3.0'];

const[itemName,,mediumCost,] = item;

console.log(`A medium ${itemName} costs ${mediumCost}`)