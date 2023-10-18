var apiKey = "7272f490779998b5e7d5c7ecc5fd3a2b";
var forAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
var searchBtn = document.querySelector(".searchBtn");
var cityInput = $(".searchBox");
var cityOutput = $(".location");
var weather = $("#weather");
var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");

// api.openweathermap.org/data/2.5/forecast?q=

// {city name}

// &appid={API key}


searchBtn.addEventListener('click', function(){
    console.log(cityInput.val());
    fetch(forAPI + cityInput.val() + "&appid=" + apiKey + "&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
})

