var apiKey = "7272f490779998b5e7d5c7ecc5fd3a2b";
var forAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
var searchBtn = document.querySelector(".searchBtn");
var cityInput = $(".searchBox");
var cityOutput = $(".location");
var weather = $("#weather");
var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");

searchBtn.addEventListener('click', function getInfo(){
    console.log(cityInput.val());
    
    fetch(forAPI + cityInput.val() + "&appid=" + apiKey + "&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var location = $("#location");
        var cityName = data.name;
        var weatherDesc = data.weather;
        var tempVal = data.main.temp;
        var windSpd = data.wind.speed;
        var icon = 'https://openweathermap.org/img/wn/' + icon2 + '@2x.png';
        var iconPic = $('<img src="' + icon + '">');
        

        location.append(cityName);
        icon.append(iconPic);
        weather.text(weatherDesc);
        temp.text(tempVal + "°F");
        wind.text("Wind: " + (windSpd * 2.23694).toFixed(2) + " mph");
        
        console.log(cityName);
    })
    for (var i=0; i < 40; i += 8) {
        
    }
})

