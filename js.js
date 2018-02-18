/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

submitBtn.addEventListener("click", validate);

let results = {
    firstname: false,
    lastname: false,
    tel: false
}

function validate(evt) {


    if (firstname.checkValidity()) results.firstname = true
    else results.firstname = false;

    if (lastname.checkValidity()) results.lastname = true
    else results.lastname = false;

    if (tel.checkValidity()) results.tel = true
    else results.tel = false;

    console.log(results);


    function showResults(results) {

        let row1, row2, row3;
        if (results.firstname) row1 = '<li class = \'success\'>SUCCESS: \'firstname\' passed validation </li>'
        else row1 = '<li class = \'error\'> ERROR: \'firstname\' failed validation </li>';

        if (results.lastname) row2 = '<li class = \'success\'> SUCCESS: \'lastname\' passed validation </li>'
        else row2 = '<li class = \'error\'> ERROR: \'lastname\' failed validation </li>';

        if (results.tel) row3 = '<li class = \'success\'> SUCCESS: \'tel\' passed validation </li>'
        else row3 = '<li class = \'error\'> ERROR: \'tel\' failed validation </li>';

        let res = `${row1}
                   ${row2}
                   ${row3}`;

        resultsList.innerHTML = res;

    }

    showResults(results);

}