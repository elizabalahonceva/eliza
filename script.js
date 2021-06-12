/* ПРАКТИКА №1
Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/* 'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?');
const b = prompt('На сколько оцените его?');
const c = prompt('Один из последних просмотренных фильмов?');
const d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/* --------------------------------------------------------------------------------------------------------------------------------------------
ПРАКТИКА №2
Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* --------------------------------------------------------------------------------------------------------------------------------------------
ПРАКТИКА №3
Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?');
//         const b = prompt('На сколько оцените его?');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }  
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) { 
//         console.log('Вы классический зритель');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();

// Callback - функции -------------------------------------------------------------------------------
/* function one(name, callback) {
    console.log(`Меня зовут - ${name}`);
    callback();
}

function two() {
    console.log("Я люблю программировать");
}

one('Лиза',  two); */

// Удаление свойства из объекта ----------------------------------------------------------------------
/* const one = {
    name: 'Liza',
    age: 21
};

delete one.age;
console.log(one); */

// Перебор элементов объекта -------------------------------------------------------------------------
/* const obj = {
    name: 'Liza',
    age: 19
};

for (let key in obj) {
    console.log(`Свойство ${key} имеет значение ${obj[key]}`);
} */

// Вывод вложенного элемента -------------------------------------------------------------------------
/* const options = {
    name: 'test',
    colors: {
        border: 'red',
        bg: 'black'
    }
} 

console.log(options["colors"]["border"]); */

// Перебор вложенного объекта -------------------------------------------------------------------------
/* const options = {
    name: 'test',
    width: 1024,
    colors: {
        border: 'red',
        bg: 'black'
    }
};

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length); */

// Создание функции в методе -------------------------------------------------------------------------
/* const options = {
    name: 'test',
    age: 19,
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest(); */

// Деструктуризация -------------------------------------------------------------------------
/* const options = {
    name: 'test',
    colors: {
        border: 'red',
        bg: 'black'
    }
};

const {border, bg} = options.colors;
console.log(bg); */

// Перебор и вывод элементов массива с помощью for, for of, forEach ----------------------------
/* const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(value, i, add) {
    console.log(`${i+1} - ${value} из массива ${add}`);
}); */

// Из одной строки в массив
/* const str = prompt("", "");
const products = str.split(", ");
console.log(products); */

// Из элементов массива в одну строку
/* const arr = [1, 2, 3, 4];
const str = arr.join("; ");
console.log(str); */

// Сортировка элементов массива - тип string по ал
/* const arr = ['a', 'd', 'c', 'b'];
arr.sort();
console.log(arr); */

// Копирование объекта - for in
/* function copy(mainObject) {
    let newObject = {};
    for (let key in mainObject) {
        newObject[key] = mainObject[key];
    }

    return newObject;
}

const numbers = {
    a: 1,
    b: 2,
    c: {
        x:10,
        y: 20
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers); */


// Копирование объекта с помощью slice()
/* const numbers = {
    a: 2,
    b: 4
};

const newNumbers = Object.assign({}, numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers); */

// копирование массива с помощью spread
/* const array = [1, 2, 3];
const newArray = [...array];

newArray[1] = 10;

console.log(array);
console.log(newArray); */

// копирование объекта с помощью spread
const obj = {
    one: 1,
    two: 2
};

const newObj = {...obj};
newObj.one = 10;

console.log(obj);
console.log(newObj);