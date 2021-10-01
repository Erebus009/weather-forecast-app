var previousSearchEl = document.querySelector('.previous')
var searchBtn = document.querySelector('.searchBtn');








var appendLastCity = function (city) {

    console.log('test');

city = document.getElementById('city-input').value;


var parent = document.querySelector('.previous');


var lastCity = document.createElement('button');
lastCity.classList="col-12 text-center text-light btn btn-secondary column mt-3 mb-3";
lastCity.textContent= city;


parent.appendChild(lastCity)




}

searchBtn.addEventListener('click', appendLastCity);