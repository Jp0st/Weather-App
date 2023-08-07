var APIKey = '1771befcd9ad6b3d3ca2ec762bf8b2db';
var city = '';

function getAPI(){
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

fetch(queryURL)
    .then(function(response){
        return response.json();
       // console.log(response);
    })
    .then(function(data){
        console.log(data);
    })
};

function getCity(){
    city = $('#chosenCity').val();
    console.log(city);
}



$('#testBtn').on('click', function(){
    event.preventDefault();
    getCity();
    getAPI(); 
});