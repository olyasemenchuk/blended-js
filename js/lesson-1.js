// TASK 1

// const number = Number(prompt('Write a number'));
// const number = +prompt('What is your favorite number?');
// if (number === 10) {
//     alert("Вірно");
// } else {
//     alert("Невірно");
// }
// number === 10 ? alert("Вірно") : alert("Невірно");
// alert(number === 10 ? "Вірно" : "Невірно");

// TASK 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//     alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в четверту чверть`);
// }

// TASK 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Write a number from "1" to "4"');
// let result;
// switch (num) {
//     case '1':
//     result = 'зима';
//     break;
//     case '2':
//     result = 'весна';
//     break; 
//     case '3':
//     result = 'літо';
//     break;
//     case '4':
//     result = 'осінь';
//     default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log(result);
    
// TASK 8. (Math.min)
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a !== 'number' || typeof !b == 'number') {
//         return 'Not a number!';
//     } else {
//         return a < b ? a : b;
//     }
// } 
// console.log(min(1, 6));
// console.log(min('4', 6));
// console.log(min(6, 6));

// TASK 9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return confirm("Are you 18?");
//     }
// }
// console.log(isAdult(17));

function isAdult(age) {
    return age >= 18 || confirm("Are you 18?");
}
console.log(isAdult(17));
console.log(isAdult(19));
