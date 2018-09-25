const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Bartek',
            age: 31
        }); 
        // reject('Something went wrong');
    }, 5000)
    
});

console.log('before');

promise.then((data) => {
    console.log('1',data);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise'); 
        }, 5000)
        
    });
    //jeśli zwracamy nowy promise wtedy kolejny then wykona się kiedy 
    //nowy promisce zostanie zwrócony i w tym wypadku przekazany jako data 
    //do nowego then
}).then((data) => {
    console.log("does the run" , data);
}).catch((error) => {
    console.log('error:',error)
});

//to samo wyżej i niżej

// promise.then((data) => {
//     console.log('1',data);
// },(error) => {
//     console.log('error:',error);
// });

console.log('after');