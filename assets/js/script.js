var APIKey = '1771befcd9ad6b3d3ca2ec762bf8b2db';
var city = '';
var cityData = [];




    function fetchData() {
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

        fetch(queryURL)
            .then(function (response) {
                return response.json();
                // console.log(response);
            })
            .then(function (data) {
                console.log(data);
                var iconCurrent = data.list[0].weather[0].icon;
                var iconLink = `http://openweathermap.org/img/w/${iconCurrent}.png`;
                var date = data.list[0].dt_txt.split(" ");
                $('#weather-icon').removeClass('d-none');
                $('#weather-icon').attr('src', iconLink);
                $('#currentCity').text(data.city.name);
                $('#currentDate').text(date[0]);
                $('#currentTemp').text('Current Temp: ' + data.list[0].main.temp + ' °F');
                $('#currentWind').text('Current Win: ' + data.list[0].wind.speed + ' MPH');
                $('#currentHumidity').text('Current Humidity: ' + data.list[0].main.humidity + ' %');
                
                for (var i = 7; i < data.list.length; i += 8) {
                    console.log(data.list[i].main.temp);
                    var futureDate = data.list[i].dt_txt.split(" ");
                    var newDate = futureDate[0];
                    var futureTemp = data.list[i].main.temp;
                    var futureWind = data.list[i].wind.speed;
                    var futureHumidity = data.list[i].main.humidity;
                    var futureIcon = data.list[i].weather[0].icon;
                    var futureIconLink = `http://openweathermap.org/img/w/${futureIcon}.png`;
                    console.log(futureTemp);
                    console.log(futureWind);
                    console.log(newDate);
                    if (i == 7) {

                        $('#day2Date').text(newDate);
                        $('#day2Temp').text('Temp: ' + futureTemp + ' °F');
                        $('#day2Wind').text('Wind: ' + futureWind + ' MPH');
                        $('#day2Humidity').text('Humidity: ' + futureHumidity + ' %');
                        $('#day2Icon').attr('src', futureIconLink);
                    } else if (i == 15) {

                        $('#day3Date').text(newDate);
                        $('#day3Temp').text('Temp: ' + futureTemp + ' °F');
                        $('#day3Wind').text('Wind: ' + futureWind + ' MPH');
                        $('#day3Humidity').text('Humidity: ' + futureHumidity + ' %');
                        $('#day3Icon').attr('src', futureIconLink);
                    } else if (i == 23) {

                        $('#day4Date').text(newDate);
                        $('#day4Temp').text('Temp: ' + futureTemp + ' °F');
                        $('#day4Wind').text('Wind: ' + futureWind + ' MPH');
                        $('#day4Humidity').text('Humidity: ' + futureHumidity + ' %');
                        $('#day4Icon').attr('src', futureIconLink);
                    } else if (i == 31) {

                        $('#day5Date').text(newDate);
                        $('#day5Temp').text('Temp: ' + futureTemp + ' °F');
                        $('#day5Wind').text('Wind: ' + futureWind + ' MPH');
                        $('#day5Humidity').text('Humidity: ' + futureHumidity + ' %');
                        $('#day5Icon').attr('src', futureIconLink);
                    } else {
                        console.log('GOOD');
                        $('#day6Date').text(newDate);
                        $('#day6Temp').text('Temp: ' + futureTemp + ' °F');
                        $('#day6Wind').text('Wind: ' + futureWind + ' MPH');
                        $('#day6Humidity').text('Humidity: ' + futureHumidity + ' %');
                        $('#day6Icon').attr('src', futureIconLink);
                    }

                }
            })


    };



function getCity() {
    city = $('#chosenCity').val();
    console.log(city);
}

function savePrev() {
    $('#previousList').append($('<button>' + city + '</button>'));
    $('#previousList').children().addClass('m-2');
    $('#previousList').children().addClass('btn-dark');

}


$('#testBtn').on('click', function () {
    event.preventDefault();
    getCity();
    fetchData();
    savePrev();

});

$('#previousList').on('click', 'button', function (event) {
    event.preventDefault();
    var city = $(this).text();
    console.log(city);
    fetchData();

});
