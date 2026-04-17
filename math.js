// export function add(a, b) {
//     return a+b
// }

// // import {add} from "./math.js"
// // console.log(add(3, 6))

// // JSON - формат данных

// const jsonString = '{"name": "Arar", "age" : 18}' 
// // get data from JSON
// const obj = JSON.parse(jsonString)
// console.log(obj.name)
// const jsonAgain = JSON.stringify(obj)


// // работа с JSON файлами 

// // подключаем библиотеку дял работы с файлами

// const fs = require('fs');

// // import * as fs from 'fs'

// const data = {
//     name: "Argenti",
//     age: 22
// }

// // запись данных в файл
// fs.writeFile('data.json', JSON.stringify( data), (err) => { 
//     if (err) throw err;
//     console.log("arar") 
// })

// // чтение файла
// fs.readFile('data.json', "utf-8", (err, data) => {

//     if (err) throw err;
//     // data это прочитанные данные
//     // err это ошибка
//     console.log(JSON.parse(data))
// })
