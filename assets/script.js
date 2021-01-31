moment().format("MMM Do YYYY");

function cityWeather(cityName) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=9b6c8a8160aa231f0498a6fbd0630965";
    var queryURLforecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&appid=9b6c8a8160aa231f0498a6fbd0630965";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        //we need these to dump content into it
        $("#current").empty();
        var mainDate = moment().format("MMM Do YYYY");

        //creating variables for        
        var cityNameEl = $("<h2>").text(response.name);
        var displayMainDate = cityNameEl.append(" " + mainDate);
        var tempEL = $("<p>").text("Temperature: " + response.main.temp + "C");
        var humidityEl = $("<p>").text("Humidity: " + response.main.humidity);
        var windEl = $("<p>").text("Wind Speed: " + response.wind.speed);
        var currentWeather = response.weather[0].main;

    });
}

