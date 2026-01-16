const button = document.getElementById("btn");
const cityId = document.getElementById("cityId");
const result = document.getElementById("result");

const apiKey = "cccb550727e48a49776eba2b2ef396f3";

button.addEventListener("click", function() {
    const city=cityId.value;
    if (city == ""){
            result.innerText= "Please enter a city name ";
            return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`) 
        .then (function(response){
            return response.json();
        })
        .then(function(data){
            const temp = data.main.temp;
            const weather = data.weather[0].description;

            result.innerText = `Temperature: ${temp} °C\nCondition: ${weather}`;
        })
        .catch(function(error){
            result.innerText = "City not found";
        });
});


