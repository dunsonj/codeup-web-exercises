(function () {
    "use strict"

    $('#inputSubmit').on('click', () => {
        console.log('click')
        console.log($('#cityInput').val());
        const input = $('#cityInput').val();
        geocode(input, MAP_BOX_KEY);
    })

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 40.85044,
        lon: -73.93315,
        units: "imperial"
    }).done(function (data) {
        // console.log('The entire response:', data);
        // console.log('Diving in - here is current information: ', data.current);
        // console.log('A step further - information for tomorrow: ', data.daily[1]);
        console.log(data.daily)
        let markUp = '';
        data.daily.forEach((day, i) => {

            if (i < 5) {
                const dayTemp = day.temp.day;
                const dayMin = day.temp.min;
                const dayMax = day.temp.max;
                const dayHumidity = day.humidity;
                const dayIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
                const dayMain = day.weather[0].main;

                markUp += `
                            <div class="card text-center">
                                <div class="card-header">
                                    ${dayMain}
                                </div>
                                <div class="card-body">
                                <img src="${dayIcon}">
                                    <h1>${dayTemp}</h1>
                                    <p>Minimum: ${dayMin} </p>
                                    <p>Maximum: ${dayMax} </p>
                                    <p>Humidity: ${dayHumidity}</p>
                                </div>
                            </div>
                            `
            }

        })
        console.log(markUp)
        $('.weatherCards').html(markUp)


        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyaWxlbmoxMzMiLCJhIjoiY2xnemhrenk2MGpjcjNrcnQxYTNlY2NlYyJ9.Ram9dmI6mQzUElNWQ3S87A';
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            zoom: 14, // starting zoom
            center: [-73.93315, 40.85044] // [lng, lat]
        });

    });
// map.on('click', (e) => {
//     console.log(e)
//     })
//



})()