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
      var Day1 = document.querySelector('.card-body-day1')
      var Day2 = document.querySelector('.card-body-day2');
      var Day3 = document.querySelector('.card-body-day3');
      var Day4 = document.querySelector('.card-body-day4');
      var Day5 = document.querySelector('.card-body-day5');
        var CityEL = document.querySelector('.weather-info')
        
        Day1.innerHTML='';
        Day2.innerHTML='';
        Day3.innerHTML='';
        Day4.innerHTML='';
        Day5.innerHTML='';
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
    

  
  var iconcode = data.weather[0];
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  
  

    // city weather box selector.
     var CityEL = document.querySelector('.weather-info')
     CityEL.classList.add('cityWeather') 
  $('cityWeather').attr('src',iconurl)
    // day 1 forecast selectors. 
    var DatesEl =document.createElement('h4');
    DatesEl.textContent = moment().add(1, 'days').format('D/MM/YY')
   

    var TempEL2 =document.createElement('p')
    TempEL2.textContent = 'Temp : ' + data.current.temp + '°F';
    
    var WindSpeedEL2 =document.createElement('p')
    WindSpeedEL2.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH'
    
    var HumidityEL2 =document.createElement('p')
    HumidityEL2.textContent = 'Humidity ' + data.daily[0].humidity + ' %';
// Day 2 forecast card div box elements
    var DatesEl2 =document.createElement('h4');
    DatesEl2.textContent = moment().add(2,'days').format('D/MM/YY')

    var TempEL3 =document.createElement('p')
    TempEL3.textContent = 'Temp : ' + data.daily[1].temp.day + '°F';
    
    var WindSpeedEL3 =document.createElement('p')
    WindSpeedEL3.textContent = 'Wind: ' + data.daily[1].wind_speed + ' MPH'
    
    var HumidityEL3 =document.createElement('p')
    HumidityEL3.textContent = 'Humidity ' + data.daily[1].humidity + ' %';

    //// Day 3 forecast element selectors and append child creators. 

    var DatesEl3 =document.createElement('h4');
    DatesEl3.textContent = moment().add(3,'days').format('D/MM/YY')

    var TempEL4 =document.createElement('p')
    TempEL4.textContent = 'Temp : ' + data.daily[2].temp.day + '°F';
    
    var WindSpeedEL4 =document.createElement('p')
    WindSpeedEL4.textContent = 'Wind: ' + data.daily[2].wind_speed + ' MPH'
    
    var HumidityEL4 =document.createElement('p')
    HumidityEL4.textContent = 'Humidity ' + data.daily[2].humidity + ' %';

    //// Day 4 Forcast element selectors and appends.

    var DatesEl4 =document.createElement('h4');
    DatesEl4.textContent = moment().add(4,'days').format('D/MM/YY')

    var TempEL5 =document.createElement('p')
    TempEL5.textContent = 'Temp : ' + data.daily[3].temp.day + '°F';
    
    var WindSpeedEL5 =document.createElement('p')
    WindSpeedEL5.textContent = 'Wind: ' + data.daily[3].wind_speed + ' MPH'
    
    var HumidityEL5 =document.createElement('p')
    HumidityEL5.textContent = 'Humidity ' + data.daily[3].humidity + ' %';
//// Day 5 forecast element selectors and appends. 

var DatesEl5 =document.createElement('h4');
DatesEl5.textContent = moment().add(5,'days').format('D/MM/YY')

var TempEL6 =document.createElement('p')
TempEL6.textContent = 'Temp : ' + data.daily[4].temp.day + '°F';

var WindSpeedEL6 =document.createElement('p')
WindSpeedEL6.textContent = 'Wind: ' + data.daily[4].wind_speed + ' MPH'

var HumidityEL6=document.createElement('p')
HumidityEL6.textContent = 'Humidity ' + data.daily[4].humidity + ' %';

    





var Day1 = document.querySelector('.card-body-day1')
var Day2 = document.querySelector('.card-body-day2');
var Day3 = document.querySelector('.card-body-day3');
var Day4 = document.querySelector('.card-body-day4');
var Day5 = document.querySelector('.card-body-day5');
Day1.classList.add('forecast');
Day2.classList.add('forecast');
Day3.classList.add('forecast');
Day4.classList.add('forecast');
Day5.classList.add('forecast');

    


// City info to display on city border box.
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
    
    

    // Append childs for the day forecast

    CityEL.appendChild(TempEL)
    CityEL.appendChild(WindSpeedEL);
    CityEL.appendChild(HumidityEL)
    CityEL.appendChild(UVindexEL).appendChild(UVindexELColor)
    // Day 1 forecast appnedchild
    Day1.appendChild(DatesEl)
    Day1.appendChild(TempEL2);
    Day1.appendChild(WindSpeedEL2);
    Day1.appendChild(HumidityEL2);

    Day2.appendChild(DatesEl2)
    Day2.appendChild(TempEL3);
    Day2.appendChild(WindSpeedEL3);
    Day2.appendChild(HumidityEL3);

    Day3.appendChild(DatesEl3)
    Day3.appendChild(TempEL4);
    Day3.appendChild(WindSpeedEL4);
    Day3.appendChild(HumidityEL4);

    Day4.appendChild(DatesEl4)
    Day4.appendChild(TempEL5);
    Day4.appendChild(WindSpeedEL5);
    Day4.appendChild(HumidityEL5);

    Day5.appendChild(DatesEl5)
    Day5.appendChild(TempEL6);
    Day5.appendChild(WindSpeedEL6);
    Day5.appendChild(HumidityEL6);

    

}



searchBtn.addEventListener("click", submitHandler);
