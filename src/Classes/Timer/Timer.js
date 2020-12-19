/*
  Получаем значение из инпута в форме
  Считываем со значения числа (игнорируя иные символы)

  время хранить в отдельном состоянии (оно должно продолжать отсчитывать себя даже после перезагрузки страницы) 

  через setTimeout раз в секунду уменьшаем значение секунд на 1 (сетаем по ключу в localstorage новое значение времени)
*/

const moment = require('moment');
const countdown = require('moment-countdown');
const currentDate = moment("1982-05-25").countdown("1955-08-21").toString();
moment.locale('ru');
console.log(currentDate);