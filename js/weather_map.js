(function () {
    "use strict"

    $('#inputSubmit').on('click', () => {
        console.log('click')
        console.log($('#cityInput').val());
        const input = $('#cityInput').val();
        geocode(input, MAP_BOX_KEY);
    })
//function to be able to gather the info from the array, displaying it on a bootstrap card.
const getWeatherData = (lon, lat, key) => {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: key,
        lat: lat,
        lon: lon,
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
                    const dayDate = day.dt

                    const date = new Date(dayDate * 1000);

                    markUp += `
                            <div class="card text-center">
                                <div class="card-header">
                                    ${date}
                                </div>
                                <div class="card-body">
                                <img src="${dayIcon}">
                                    <h1>${dayTemp}&#8457;</h1>
                                    <p>Minimum: ${dayMin}&#8457; </p>
                                    <p>Maximum: ${dayMax}&#8457; </p>
                                    <p>Humidity: ${dayHumidity}&#8457;</p>
                                </div>
                            </div>
                            `
                }

            })
            // console.log(markUp)
            $('.weatherCards').html(markUp)
        });
}



//creatng marker on the map
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyaWxlbmoxMzMiLCJhIjoiY2xnemhrenk2MGpjcjNrcnQxYTNlY2NlYyJ9.Ram9dmI6mQzUElNWQ3S87A';
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            zoom: 16, // starting zoom
            center: [-73.93315, 40.85044] // [lng, lat]
        });

        let marker;

        marker = new mapboxgl.Marker()
            .setLngLat([-73.93315, 40.85044])
            .addTo(map)

        map.on('click', (e) => {
            console.log(e)
            const lat = e.lngLat.lat
            const lng = e.lngLat.lng

            let coordinate = [lng, lat];

            if (marker){
                marker.remove()
            }

            marker =  new mapboxgl.Marker()
                .setLngLat(coordinate)
                .addTo(map)


            getWeatherData(lng, lat, OPEN_WEATHER_APPID);


        })
//getting the location and weather to change on the page once a new location is searched
    const btnInput = $('#buttonAddress')
    btnInput.on('click', function (e){
        e.preventDefault()

        const addressInput = $('#inputAddress').val()
        console.log($('#inputAddress'));
        console.log('click');
        console.log(addressInput);
        geocodeAddressMarker(addressInput, MAP_BOX_KEY );
        // geocodeAddressMarker(addressInput, OPEN_WEATHER_APPID);

    });

    let coords;

    function geocodeAddressMarker(address, token){
        geocode(address, token).then(res => {

            if (marker){
                marker.remove()
            }

            marker = new mapboxgl.Marker()
                .setLngLat(res)
                .addTo(map)
            map.setCenter(res)
            map.setZoom(16)
            console.log(res)

            const lon = res[0]
            const lat = res[1]


            getWeatherData(lon, lat, OPEN_WEATHER_APPID);





        } )
    }



    //
    // geocode(addressInput, MAP_BOX_KEY );
//add zoom buttons to map
map.addControl(new mapboxgl.NavigationControl())


getWeatherData(-73.93315, 40.85044, OPEN_WEATHER_APPID)



})()