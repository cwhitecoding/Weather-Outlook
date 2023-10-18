var apiKey = "7272f490779998b5e7d5c7ecc5fd3a2b";
var forAPI = "api.openweathermap.org/data/2.5/forecast?q=";
var dailyAPI = "api.openweathermap.org/data/2.5/forecast?q=";
var searchBtn = document.querySelector(".searchBtn");
var cityInput = document.querySelector(".searchBox");
var cityOutput = document.querySelector(".location");
var weather = document.querySelector("#weather");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");


searchBtn.addEventListener('click', function(){
    fetch(forAPI+cityInput+"&appid="+apiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
})

