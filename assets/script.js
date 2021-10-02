var previousSearchEl = document.querySelector(".previous");
var searchBtn = document.querySelector(".searchBtn");
var cityWeatherEL = document.querySelector(".weather-info");
var fiveDayForecast = document.querySelector(".card-weather");
var inputEL = document.querySelector('#city-input')

// var url ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&limit=5&appid=0bc4f134f7113eaee48d311d5efa7749";




// handles the input submit from search for city.
var submitHandler = function (event) {
    event.preventDefault();

    var city = inputEL.value.trim();
    
    if (city){
        inputEL.textContent='';
        inputEL.value='';
        appendLastCity(city);
        getCityWeather(city);
        
    } 
    
};

// create button of last user input.
var appendLastCity = function (city) {

  console.log("test");

  

    var parent = document.querySelector(".previous");

    var lastCity = document.createElement("button");
    lastCity.classList = "col-12 text-center text-light btn btn-secondary column mt-3 mb-3";
    lastCity.textContent = city;

    parent.appendChild(lastCity);

    document.getElementById("city-input").textContent = null;

    return;
  }


 var getCityWeather = function(city) {
    
    var url ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&limit=5&appid=0bc4f134f7113eaee48d311d5efa7749";
    
    console.log(url);
    fetch(url)
    .then(function (response) {
      if (response.status === 200) {
        response.json().then(function(data) {
            console.log(data);
            // displayCityWeather(data,city);
            
        });
    }else{
        alert('Error ' + response.statusText);
      }
      
    })
    
    
  return;
    
        
}

// var displayCityWeather = function (params) {
    
// }

searchBtn.addEventListener("click", submitHandler);


