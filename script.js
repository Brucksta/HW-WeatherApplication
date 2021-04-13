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
    //day1
    document.querySelector('#date1').innerText = data.list[2].clouds.dt_txt
    document.querySelector('#emoji1').innerText = data.list[2].weather[0].icon
    document.querySelector('#maxTemp1').innerText = "Max Temp: " + data.list[2].main.temp_max
    document.querySelector('#humidity1').innerText = "Humidity: " + data.list[2].main.humidity + '%'
    
    //day2
    document.querySelector('#emoji2').innerText = data.list[10].weather[0].icon
    document.querySelector('#maxTemp2').innerText = "Max Temp: " + data.list[10].main.temp_max
    document.querySelector('#humidity2').innerText = "Humidity: " + data.list[10].main.humidity + '%'
    
    //day3
    document.querySelector('#emoji3').innerText = data.list[18].weather[0].icon
    document.querySelector('#maxTemp3').innerText = "Max Temp: " + data.list[18].main.temp_max
    document.querySelector('#humidity3').innerText = "Humidity: " + data.list[18].main.humidity + '%'
    
    //day4
    document.querySelector('#emoji4').innerText = data.list[26].weather[0].icon
    document.querySelector('#maxTemp4').innerText = "Max Temp: " + data.list[26].main.temp_max
    document.querySelector('#humidity4').innerText = "Humidity: " + data.list[26].main.humidity + '%' 
  });

}

  
//fetch



    searchFormEl.addEventListener('submit', searchWeather);

//fetch(url)
 // .then(response => response.json())
 // .then(data => {
    // do stuff with the data
  


  //dayjs to get days

//citiesString = JSONstringify(cities)
//localStorage.setItem("cities", [citiesString])
  //renderCities()
 //saveCity()
  //clickSavedCity(event listener)

 // getItem("cities")
 // JSON.parse()