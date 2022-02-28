window.onload = function () {
    getWeather();
};

function WeatherPromise() {
    return new Promise(function (myResolve, myReject) {
        setTimeout(async function () {
            let response = await fetch("https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=Johannesburg");
            let data = await response.json();
            myResolve(data);
        }, 5000);
    });
}

async function getWeatherPromise() {
    WeatherPromise().then((data) => {
        document.getElementsByTagName("main")[0].innerHTML = `<div>
            <div>Temp: ${data.current.temp_c}</div>
        </div>`;
    });
    document.getElementsByTagName("main")[0].innerHTML = `<div>
      <div>Loading...</div>
    </div>`;
}

async function getWeatherAwaitPromise() {
    var data = await WeatherPromise();
    document.getElementsByTagName("main")[0].innerHTML = `<div>
        <div>Temp: ${data.current.temp_c}</div>
    </div>`;
}

function getWeatherFetchPromise() {
    fetch("https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=Johannesburg")
        .then((response) => response.json())
        .then((data) => {
            document.getElementsByTagName("main")[0].innerHTML = `<div>
           <div>Temp: ${data.current.temp_c}</div>
        </div>`;
        });
}

async function getWeatherAsyncAwait() {
  let response = await fetch("https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=Johannesburg");
  let data = await response.json();
  console.log(data);
  document.getElementsByTagName("main")[0].innerHTML = `<div>
      <div>Temp: ${data.current.temp_c}</div>
  </div>`;
}

function getWeather() {
  $.ajax({
      url: "https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=Johannesburg",
  }).done((data) => {
    console.log("Done")
      document.getElementsByTagName("main")[0].innerHTML = `<div>
      <div>Temp: ${data.current.temp_c}</div>
  </div>`;
  });
}