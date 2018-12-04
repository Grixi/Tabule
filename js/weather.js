function repeat(){
  var request = new XMLHttpRequest(); //vytvori novy request
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(request.responseText); //prevadi vraceny JSON na string

      document.getElementById("iconID").src = "Icons/Weather Icons/SVG/" + work.weather[0].icon + ".svg";
      document.getElementById("temperatureID").innerHTML = work.main.temp + "°C";
      document.getElementById("windID").innerHTML = work.wind.speed + 'm/s';
      document.getElementById("humidityID").innerHTML = work.main.humidity + '%';
    }
  };

  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
  request.send(); //odesle request

  setTimeout(repeat, 900*1000);
}

repeat();

function repeatDaily(){
  var daily = new XMLHttpRequest(); //vytvori novy request

  daily.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) { //pokud ma pripojeni - spusti se kod
      var work = JSON.parse(daily.responseText); //prevadi vraceny JSON na string
      //var day1h9Icon = work.list[0].weather[0].icon; //day1 = den 1, h9 = hodina 9:00 (přiklad h12 = 12:00, h0 = 00:00)

      var date = new Date();
      var hoursNow = date.getHours();

      console.log("----------------");
      console.log(hoursNow + ' hoursNow');

      document.getElementById("hours1").innerHTML = moment(work.list[1].dt_txt).format('HH') + ':00';
      document.getElementById("iconID1").src = "Icons/Weather Icons/SVG/" + work.list[1].weather[0].icon + ".svg";
      document.getElementById("tempID1").innerHTML = work.list[1].main.temp + "°C";
      document.getElementById("windID1").innerHTML = work.list[1].wind.speed + 'm/s';
      document.getElementById("humidityID1").innerHTML = work.list[1].main.humidity + '%';

      document.getElementById("hours2").innerHTML = moment(work.list[2].dt_txt).format('HH') + ':00';
      document.getElementById("iconID2").src = "Icons/Weather Icons/SVG/" + work.list[2].weather[0].icon + ".svg";
      document.getElementById("tempID2").innerHTML = work.list[2].main.temp + "°C";
      document.getElementById("windID2").innerHTML = work.list[2].wind.speed + 'm/s';
      document.getElementById("humidityID2").innerHTML = work.list[2].main.humidity + '%';

      document.getElementById("hours3").innerHTML = moment(work.list[3].dt_txt).format('HH') + ':00';
      document.getElementById("iconID3").src = "Icons/Weather Icons/SVG/" + work.list[3].weather[0].icon + ".svg";
      document.getElementById("tempID3").innerHTML = work.list[3].main.temp + "°C";
      document.getElementById("windID3").innerHTML = work.list[3].wind.speed + 'm/s';
      document.getElementById("humidityID3").innerHTML = work.list[3].main.humidity + '%';

      document.getElementById("hours4").innerHTML = moment(work.list[4].dt_txt).format('HH') + ':00';
      document.getElementById("iconID4").src = "Icons/Weather Icons/SVG/" + work.list[4].weather[0].icon + ".svg";
      document.getElementById("tempID4").innerHTML = work.list[4].main.temp + "°C";
      document.getElementById("windID4").innerHTML = work.list[4].wind.speed + 'm/s';
      document.getElementById("humidityID4").innerHTML = work.list[4].main.humidity + '%';

      document.getElementById("hours5").innerHTML = moment(work.list[5].dt_txt).format('HH') + ':00';
      document.getElementById("iconID5").src = "Icons/Weather Icons/SVG/" + work.list[5].weather[0].icon + ".svg";
      document.getElementById("tempID5").innerHTML = work.list[5].main.temp + "°C";
      document.getElementById("windID5").innerHTML = work.list[5].wind.speed + 'm/s';
      document.getElementById("humidityID5").innerHTML = work.list[5].main.humidity + '%';

      document.getElementById("hours6").innerHTML = moment(work.list[6].dt_txt).format('HH') + ':00';
      document.getElementById("iconID6").src = "Icons/Weather Icons/SVG/" + work.list[6].weather[0].icon + ".svg";
      document.getElementById("tempID6").innerHTML = work.list[6].main.temp + "°C";
      document.getElementById("windID6").innerHTML = work.list[6].wind.speed + 'm/s';
      document.getElementById("humidityID6").innerHTML = work.list[6].main.humidity + '%';
    }
  };

  daily.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=3067696&units=metric&APPID=d42d44c7725ef3262944099e86680c98', true); //adresa na kterou se ma pripojit
  daily.send(); //odesle request

  setTimeout(repeat, 900*1000);
}

repeatDaily();
