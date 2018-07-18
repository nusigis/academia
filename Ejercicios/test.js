// /*
// git stash
// git checkout async
// */

// // "dependencies": {
// //     "bootstrap": "^4.1.2"//cualquier vercion igual o mayor
// // }

// //ver los comamndos en windows
// //doskey /history

// // //FETCH
// // fetch('/cars')
// // .then((res) =>{ 
// //     return res.json()
// // })
// // .then((cars) =>{ 
// //     console.log(cars);
// // })

// //creamos la promesa:-------------------------------------
// // const promise = new Promise((resolver) => {
// //     //resolver('hola');
// //     let cont = 0;
// //     for (let i = 0; i < 1000000000; i++) {
// //         cont++;
// //     }
// //     // resolver(cont);
// //     setTimeout(() => resolver(cont), 3000);
// // });
// // //--------------------------------------------------------
// // //onsumimos la promesa:-----------------------------------
// // promise.then((resolver) => console.log(resolver));
// // //--------------------------------------------------------
// // console.log('hola');

// 'use strict';
// (() => {
//     //fetch no funciona en algunas verciones de node
//     // fetch('/cars')
//     //     .then((res) => {
//     //         return res.json();
//     //     })
//     //     .then((cars) => {
//     //         const sumCars = cars.reduce((sumCars, carPrice) => {
//     //             sumCars = sumCars + carPrice;
//     //             return sumCars;
//     //         }, 0);
//     //     })
//     const cars = [
//         {
//             "name": "Ferrari FF",
//             "horsepower": 660,
//             "dollar_value": 700000,
//             "in_stock": true
//         },
//         {
//             "name": "Spyker C12 Zagato",
//             "horsepower": 650,
//             "dollar_value": 648000,
//             "in_stock": false
//         },
//         {
//             "name": "Jaguar XKR-S",
//             "horsepower": 550,
//             "dollar_value": 132000,
//             "in_stock": false
//         },
//         {
//             "name": "Audi R8",
//             "horsepower": 525,
//             "dollar_value": 114200,
//             "in_stock": false
//         },
//         {
//             "name": "Aston Martin One-77",
//             "horsepower": 750,
//             "dollar_value": 1850000,
//             "in_stock": true
//         },
//         {
//             "name": "Pagani Huayra",
//             "horsepower": 700,
//             "dollar_value": 1300000,
//             "in_stock": false
//         }
//     ];
//     const sumCars = cars.reduce((sumCars, car) => {
//         console.log(car);
//         console.log(sumCars);
//         sumCars = sumCars + car.dollar_value;
//         return sumCars;
//     }, 0);
// })();


