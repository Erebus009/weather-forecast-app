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
        var CityEL = document.querySelector('.weather-info')
        CityEL.innerHTML='';
        inputEL.textContent='';
        inputEL.value='';
        appendLastCity(city);
        getCityCords(city);
        
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


 var getCityCords = function (city) {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0bc4f134f7113eaee48d311d5efa7749'
  console.log(url);
  fetch(url)
  .then(function (response) {
    if (response.status === 200) {
      response.json().then(function(data) {
          console.log(data);
          setCurrentWeather(data);
          var CityEL = document.querySelector('.weather-info')

          var CityNameEL = document.createElement('h1');
          CityNameEL.textContent = data.name + moment().format("   (MMM Do YY)");
          

          CityEL.appendChild(CityNameEL);

          
      });
  }else{
      alert('Error ' + response.statusText);
    }
    
  })
  
  .catch(function (error) {
      alert('Unable to connect to Openweather API');
    });
};
   
 
 

 
 
 
 
 
 
 var setCurrentWeather = function(data) {
    var lon = data.coord.lon
    var lat = data.coord.lat


    var url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat  + "&lon=" + lon  + '&exclude=hourly,minutely,alerts&units=imperial&appid=0bc4f134f7113eaee48d311d5efa7749';
    
    console.log(url);
    fetch(url)
    .then(function (response) {
      if (response.status === 200) {
        response.json().then(function(data) {
            console.log(data);
            displayCurrent(data);
            
        });
    }else{
        alert('Error ' + response.statusText);
      }
      
    })
    
    .catch(function (error) {
        alert('Unable to connect to Openweather API');
      });
  };
  
var displayCurrent = function (data, city) {
    
    
    var ForecastEL = document.querySelector('.card-body')
    var CityEL = document.querySelector('.weather-info')
    
    var DatesEl =document.createElement('h4');
    DatesEl.textContent = moment().format('D/MM/YYYY')

    var TempEL2 =document.createElement('p')
    TempEL2.textContent = 'Temp : ' + data.current.temp + '°F';
    
    var WindSpeedEL2 =document.createElement('p')
    WindSpeedEL2.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH'
    
    var HumidityEL2 =document.createElement('p')
    HumidityEL2.textContent = 'Humidity ' + data.daily[0].humidity + ' %';

    


    var TempEL = document.createElement('h3')
    TempEL.textContent = 'Temp : ' + data.current.temp + '°F';

    var WindSpeedEL = document.createElement('h3')
    WindSpeedEL.textContent = 'Wind: ' + data.current.wind_speed + ' MPH'

    var HumidityEL = document.createElement('h3');
    HumidityEL.textContent = 'Humidity ' + data.current.humidity + ' %';

    var UVindexEL = document.createElement('h3'); 
    
    UVindexEL.textContent = 'UV Index: ' 
    
    var UVindexELColor = document.createElement('span')
    UVindexELColor.classList.add('backgroundIndex');
    UVindexELColor.textContent = data.current.uvi;
    
    


    CityEL.appendChild(TempEL)
    CityEL.appendChild(WindSpeedEL);
    CityEL.appendChild(HumidityEL)
    CityEL.appendChild(UVindexEL).appendChild(UVindexELColor)
    
    ForecastEL.appendChild(DatesEl)
    ForecastEL.appendChild(TempEL2);
    ForecastEL.appendChild(WindSpeedEL2);
    ForecastEL.appendChild(HumidityEL2);

}



searchBtn.addEventListener("click", submitHandler);