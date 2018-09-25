import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};

//   //child remove
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Deleted data', snapshot.key, snapshot.val())
//   })

//   //child change
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed data', snapshot.key, snapshot.val())
//   })

//   //chil added - uruchamia sie dla kazdego wpisu ktory juz jest i dla nowego
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added data', snapshot.key, snapshot.val())
//   })

//   // database.ref('expenses')
//   // .once('value')
//   // .then((snapshot) => {
//   //   const expenses = [];
//   //   snapshot.forEach((snap) => {
//   //     expenses.push({
//   //       id: snap.key,
//   //       ...snap.val()
//   //     })
//   //   });

//   // console.log(expenses);
//   // });

//   // database.ref('expenses')
//   // .on('value', (snapshot) => {
//   //   const expenses = [];
//   //   snapshot.forEach((snap) => {
//   //     expenses.push({
//   //       id: snap.key,
//   //       ...snap.val()
//   //     })
//   //   });

//   // console.log(expenses);
//   // });
  
//     // database.ref('expenses').push({
//   //   description: 'Coffe',
//   //   note: '',
//   //   amount: 3,
//   //   startedAt: ''
//   // });

//   // database.ref('notes').push({
//   //   title: 'To do',
//   //   body: 'Go for a walk'
//   // });

//   // database.ref('notes').push({
//   //   title: 'Training',
//   //   body: 'Calistenics'
//   // });

//   // database.ref().on('value',
//   // (snapshot) => {
//   //   let data = snapshot.val();
//   //   console.log(`${data.name} is a ${data.job.title} in ${data.job.company}`);
//   // })

//   // const onValueChange = database.ref().on('value', (snapshot) => {
//   //   console.log(snapshot.val());
//   // }, (e) => {
//   //   console.log('Error with data fetching, e');
//   // });

//   // setTimeout(() => {
//   //   database.ref('age').set(29);
//   // },3500);

//   // setTimeout(() => {
//   //   database.ref().off(onValueChange); //kończy daną subskrybcję - automatyczne pobieranie danych przy zmianie 
//   // },7000);


//   // setTimeout(() => {
//   //   database.ref('age').set(30);
//   // },10500);

//   // database.ref('location')
//   // .once('value')
//   // .then((snapshot) => {
//   //   const val = snapshot.val();
//   //   console.log(val);
//   // })
//   // .catch((error) => {
//   //   console.log('Error fetching database', error)
//   // })


//   // database.ref().set({
//   //     name: 'Bartek',
//   //     age: 26,
//   //     stressLevel: 6,
//   //     job: {
//   //       title: 'software develoer',
//   //       company: 'Google'
//   //     },
//   //     location: {
//   //         city: 'Leszno',
//   //         country: 'Poland'
//   //     }
//   // }).then(() => {
//   //   console.log('Data is saved');
//   // }).catch((error) => {
//   //   console.log('error:', error);
//   // });

//   // database.ref().update({ //mozemy uaktualniać, usuwać i dodawać nowe żeczy akceptuje tylko object
//   //   stressLevel: 9,
//   //   'job/company': 'Amazon',
//   //   'location/city': 'Seatle' //tylko tak pozwala updatować zagnieżdżone obiekty
//   // }).then(() => {
//   //   console.log('Data updated');
//   // });

// //   database.ref('age').set(31);
// //   database.ref('location/city').set('Poznań');

// // database.ref('attribute').set({
// //     height: 172,
// //     weight: 78
// // }).then(() => {
// //     console.log('This is added');
// // }).catch((error) => {
// //     console.log(error);
// // });

// // database.ref('isSingle')
// // .remove().then(() => {
// //     console.log('isSingle removed');
// // }).catch((e) => {
// //     console.log(`Didn't remover`, e);
// // })

// // database.ref().set(null);