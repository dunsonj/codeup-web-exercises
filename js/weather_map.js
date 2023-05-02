(function (){
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "New York City, US",
        units: 'imperial',
    }).done(function (weatherForecast) {
        console.log(weatherForecast);
    });

    function gatherCityLocation() {
        const newName = document.getElementById('cityInput');
        const cityName = document.getElementById('cityName');
        cityName.innerHTML = "" + newName.value + "";


        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&appid=${OPEN_WEATHER_APPID}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + (data.list[i].main.temp_min - 57.99).toFixed(1) + "°";
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max:" + (data.list[i].main.temp_max - 58.96).toFixed(1) + "°";
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
                }
            })
            .catch(error => alert("Error"))
    }

    function defaultPage() {
        document.getElementById('cityInput').defaultValue = 'New York City';
        gatherCityLocation();
    }

    const d = new Date();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function checkDay(day) {
        if (day + d.getDay() > 6) {
            return day + d.getDay() - 7;
        } else {
            return day + d.getDay();
        }
    }

    for (i = 0; i < 5; i++) {
        console.log(weekday[i])

        document.getElementById("day" + (i + 1)).innerHTML = weekday[i];
    }


})()