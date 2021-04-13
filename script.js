const apiKey = "235b472270a3a3cb64630ff33acef02a";
const searchInputEl = document.querySelector('#search');
const searchFormEl = document.querySelector('#searchForm');

//searching
const getSearchTerm = () => searchInputEl.value

const searchWeather = (event) => {
  event.preventDefault()
  const searchTerm = getSearchTerm();
  const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${apiKey}&units=metric`;

 

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //main
    document.querySelector('#city').innerText = data.city.name + ", " + data.city.country
    document.querySelector('#main-temp').innerText = "Max Temp: " + data.list[1].main.temp_max + "°"
    document.querySelector('#main-humidity').innerText = "Humidity: " + data.list[1].main.humidity + '%'
    document.querySelector('#main-wind').innerText = "Wind Speed: " + data.list[1].wind.speed + "m/s"
    //document.querySelector('#"main-uv').innerText = data.list[2].wind.speed
    
    //day1
    document.querySelector('#date1').innerText = data.list[10].dt_txt
    document.querySelector('#emoji1').innerText = data.list[10].weather[0].icon
    document.querySelector('#maxTemp1').innerText = "Max Temp: " + data.list[10].main.temp_max + "°"
    document.querySelector('#humidity1').innerText = "Humidity: " + data.list[10].main.humidity + '%'
    
    //day2
    document.querySelector('#date2').innerText = data.list[18].dt_txt
    document.querySelector('#emoji2').innerText = data.list[18].weather[0].icon
    document.querySelector('#maxTemp2').innerText = "Max Temp: " + data.list[18].main.temp_max + "°"
    document.querySelector('#humidity2').innerText = "Humidity: " + data.list[18].main.humidity + '%'
    
    //day3
    document.querySelector('#date3').innerText = data.list[26].dt_txt
    document.querySelector('#emoji3').innerText = data.list[26].weather[0].icon
    document.querySelector('#maxTemp3').innerText = "Max Temp: " + data.list[26].main.temp_max + "°"
    document.querySelector('#humidity3').innerText = "Humidity: " + data.list[26].main.humidity + '%'
    
    //day4
    document.querySelector('#date4').innerText = data.list[34].dt_txt
    document.querySelector('#emoji4').innerText = data.list[34].weather[0].icon
    document.querySelector('#maxTemp4').innerText = "Max Temp: " + data.list[34].main.temp_max + "°"
    document.querySelector('#humidity4').innerText = "Humidity: " + data.list[34].main.humidity + '%' 
  });

}

searchFormEl.addEventListener('submit', searchWeather);
  
localStorage.setItem(searchWeather)

//citiesString = JSONstringify(cities)
//localStorage.setItem("cities", [citiesString])
  //renderCities()
 //saveCity()
  //clickSavedCity(event listener)

 // getItem("cities")
 // JSON.parse()