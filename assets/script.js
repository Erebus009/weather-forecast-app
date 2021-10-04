var cityInput = [];

var previousSearchEl = document.querySelector(".previous");
var searchBtn = document.querySelector(".searchBtn");
var cityWeatherEL = document.querySelector(".weather-info");
var fiveDayForecast = document.querySelector(".card-weather");
var inputEL = document.querySelector('#city-input')
var lastSearchButtonEl = document.querySelector("#past-search-buttons");

// var url ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&limit=5&appid=0bc4f134f7113eaee48d311d5efa7749";




// handles the input submit from search for city.
var submitHandler = function (event) {
    event.preventDefault();

    var city = inputEL.value.trim();
    
    
    if (city){
      cityInput.unshift({city});
      var forecast = document.querySelector('.day-forecast')
      var Day1 = document.querySelector('.card-body-day1')
      var Day2 = document.querySelector('.card-body-day2');
      var Day3 = document.querySelector('.card-body-day3');
      var Day4 = document.querySelector('.card-body-day4');
      var Day5 = document.querySelector('.card-body-day5');
      var CityEL = document.querySelector('.weather-info')
        forecast.innerHTML='';
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
var saveSearch = function(){
  localStorage.setItem("cityInput", JSON.stringify(cityInput));
};

var appendLastCity = function (city) {


 


    var parent = document.querySelector(".previous");

    var lastCity = document.createElement("button");
    lastCity.classList = "col-12 text-center text-light btn btn-secondary column mt-3 mb-3";
    lastCity.textContent = city;
    lastCity.textContent = city;
    lastCity.setAttribute("input-city",city)
    lastCity.setAttribute("type", "submit");
    
    

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
          CityNameEL.classList.add('icon')
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
  // 5 day forecast h1 element. 
 var dayforecast = document.querySelector('.day-forecast');
 var days = document.createElement('h1')

 days.textContent= 'Five Day Forecast:'
 dayforecast.appendChild(days);
 
 
 

  // refrence to get icon from openweater icon list and append to created elements. 
  var iconcode = data.current.weather[0].icon;
  var iconcode1 = data.daily[0].weather[0].icon;
  var iconcode2 = data.daily[1].weather[0].icon;
  var iconcode3 = data.daily[2].weather[0].icon;
  var iconcode4 = data.daily[3].weather[0].icon;
  var iconcode5 = data.daily[4].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
  var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
  var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
  var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
  var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
  
  

    // city weather box selector.
     var CityEL = document.querySelector('.weather-info')
     
    
    // day 1 forecast selectors. 
    var DatesEl =document.createElement('h4');
    DatesEl.textContent = moment().add(1, 'days').format('D/MM/YY')
    
    var icon1= document.createElement('p')
    icon1.classList.add('icon1');

    var TempEL2 =document.createElement('p')
    TempEL2.textContent = 'Temp : ' + data.current.temp + '°F';
    
    var WindSpeedEL2 =document.createElement('p')
    WindSpeedEL2.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH'
    
    var HumidityEL2 =document.createElement('p')
    HumidityEL2.textContent = 'Humidity ' + data.daily[0].humidity + ' %';
// Day 2 forecast card div box elements
    var DatesEl2 =document.createElement('h4');
    DatesEl2.textContent = moment().add(2,'days').format('D/MM/YY')

    var icon2= document.createElement('p')
    icon2.classList.add('icon2');

    var TempEL3 =document.createElement('p')
    TempEL3.textContent = 'Temp : ' + data.daily[1].temp.day + '°F';
    
    var WindSpeedEL3 =document.createElement('p')
    WindSpeedEL3.textContent = 'Wind: ' + data.daily[1].wind_speed + ' MPH'
    
    var HumidityEL3 =document.createElement('p')
    HumidityEL3.textContent = 'Humidity ' + data.daily[1].humidity + ' %';

    //// Day 3 forecast element selectors and append child creators. 

    var DatesEl3 =document.createElement('h4');
    DatesEl3.textContent = moment().add(3,'days').format('D/MM/YY')

    var icon3= document.createElement('p')
    icon3.classList.add('icon3')

    var TempEL4 =document.createElement('p')
    TempEL4.textContent = 'Temp : ' + data.daily[2].temp.day + '°F';
    
    var WindSpeedEL4 =document.createElement('p')
    WindSpeedEL4.textContent = 'Wind: ' + data.daily[2].wind_speed + ' MPH'
    
    var HumidityEL4 =document.createElement('p')
    HumidityEL4.textContent = 'Humidity ' + data.daily[2].humidity + ' %';

    //// Day 4 Forcast element selectors and appends.

    var DatesEl4 =document.createElement('h4');
    DatesEl4.textContent = moment().add(4,'days').format('D/MM/YY')

    var icon4= document.createElement('p')
    icon4.classList.add('icon4')

    var TempEL5 =document.createElement('p')
    TempEL5.textContent = 'Temp : ' + data.daily[3].temp.day + '°F';
    
    var WindSpeedEL5 =document.createElement('p')
    WindSpeedEL5.textContent = 'Wind: ' + data.daily[3].wind_speed + ' MPH'
    
    var HumidityEL5 =document.createElement('p')
    HumidityEL5.textContent = 'Humidity ' + data.daily[3].humidity + ' %';
//// Day 5 forecast element selectors and appends. 

var DatesEl5 =document.createElement('h4');
DatesEl5.textContent = moment().add(5,'days').format('D/MM/YY')

var icon5= document.createElement('p')
    icon5.classList.add('icon5')

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
    UVindexELColor.classList.add('UV');
    UVindexELColor.textContent = data.current.uvi;
    
    

    // Append childs for the day forecast

    CityEL.appendChild(TempEL)
    CityEL.appendChild(WindSpeedEL);
    CityEL.appendChild(HumidityEL)
    CityEL.appendChild(UVindexEL).appendChild(UVindexELColor)
    // Day 1 forecast appnedchild
    Day1.appendChild(DatesEl)
    Day1.appendChild(icon1);
    Day1.appendChild(TempEL2);
    Day1.appendChild(WindSpeedEL2);
    Day1.appendChild(HumidityEL2);
    
    // day 2 forecast
    Day2.appendChild(DatesEl2)
    Day2.appendChild(icon2);
    Day2.appendChild(TempEL3);
    Day2.appendChild(WindSpeedEL3);
    Day2.appendChild(HumidityEL3);
   // day 3 forecast`
    Day3.appendChild(DatesEl3)
    Day3.appendChild(icon3);
    Day3.appendChild(TempEL4);
    Day3.appendChild(WindSpeedEL4);
    Day3.appendChild(HumidityEL4);
    // day 4 forecast
    Day4.appendChild(DatesEl4)
    Day4.appendChild(icon4);
    Day4.appendChild(TempEL5);
    Day4.appendChild(WindSpeedEL5);
    Day4.appendChild(HumidityEL5);
    // day 5 forecast
    Day5.appendChild(DatesEl5)
    Day5.appendChild(icon5);
    Day5.appendChild(TempEL6);
    Day5.appendChild(WindSpeedEL6);
    Day5.appendChild(HumidityEL6);

    var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
    img.attr('src', iconurl);
    img.appendTo('.icon');

    var img1 = $('<img id="dynamic">'); 
    img1.attr('src', iconurl1);
    img1.appendTo('.icon1');

    var img2 = $('<img id="dynamic">'); 
    img2.attr('src', iconurl2);
    img2.appendTo('.icon2');

    var img3 = $('<img id="dynamic">'); 
    img3.attr('src', iconurl3);
    img3.appendTo('.icon3');

    var img4 = $('<img id="dynamic">'); 
    img4.attr('src', iconurl4);
    img4.appendTo('.icon4');

    var img5 = $('<img id="dynamic">'); 
    img5.attr('src', iconurl5);
    img5.appendTo('.icon5');

    var UV = data.current.uvi;
    console.log(UV);
    if (UV > 3 && UV < 6.99){
      var UvEl= document.querySelector('.UV');
      UvEl.classList.remove('UV')
      UvEl.classList.add('UV2')


    }
    if (UV > 7){
      var UvEl= document.querySelector('.UV');
      UvEl.classList.remove('UV')
      UvEl.classList.add('UV3')


    }

}

var lastSearchBtn = function(lastSearch){
 

  lastSearchEl = document.createElement("button");
  lastSearchEl.textContent = lastSearch;
  lastSearchEl.setAttribute("input-city",lastSearch)
  lastSearchEl.setAttribute("type", "submit");

  lastSearchButtonEl.prepend(lastSearchEl);
}

var LastCitySearch = function(event){
  var city = event.target.getAttribute("input-city")
  if(city){
      getCityCords(city);
      displayCurrent(city);
  }
}



// Search when button is clicked runs submit handler to gather api data about what city was searched.
searchBtn.addEventListener("click", submitHandler);
