var x = setInterval(function() {
  var date = new Date();

  var hToday = date.getHours();
  var minToday = date.getMinutes();
  var secToday = date.getSeconds();

  var secRemaining = 59 - secToday; //Seconds remaining
  var timeNow = (hToday * 60) + minToday; //Minutes from start of the day

  if (timeNow < 480){  //8:00 ZACATEK SKOLY
    var countdown = 480 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do začátku školy";
    document.getElementById("countdownIDText").textContent = "Čas do začátku školy";
  } else if (timeNow < 525) { //8:45
    var countdown = 525 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 535 ) { //8:55
    var countdown = 535 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 580) { //9:40
    var countdown = 580 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 600 ) { //10:00
    var countdown = 600 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 645) { //10:45
    var countdown = 645 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 655 ) { //10:55
    var countdown = 655 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 700) { //11:40
    var countdown = 700 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 710 ) { //11:50
    var countdown = 710 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 755) { //12:35
    var countdown = 755 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 765 ) { //12:45
    var countdown = 765 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 810) { //13:30
    var countdown = 810 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 815 ) { //13:35
    var countdown = 815 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 860) { //14:20
    var countdown = 860 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 865 ) { //14:25
    var countdown = 865 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 910) { //15:10
    var countdown = 910 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 915 ) { //15:15
    var countdown = 915 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 960) { //16:00
    var countdown = 960 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 965 ) { //16:05
    var countdown = 965 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 1010) { //16:50
    var countdown = 1010 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 1015 ) { //16:55
    var countdown = 1015 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 1060) { //17:40
    var countdown = 1060 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce hodiny";
    document.getElementById("countdownIDText").textContent = "Čas do konce hodiny";
  } else if (timeNow < 1065 ) { //17:45
    var countdown = 1065 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do konce přestávky";
    document.getElementById("countdownIDText").textContent = "Čas do konce přestávky";
  } else if (timeNow < 1110) { //18:30
    var countdown = 1110 - timeNow;
    document.getElementById("countdownIDText").innerText = "Jestli máš ještě školu tak mi je tě líto..";
    document.getElementById("countdownIDText").textContent = "Jestli máš ještě školu tak mi je tě líto..";
  } else if (timeNow > 1110 ) { //KONEC SKOLY
    var countdown = 1920 - timeNow;
    document.getElementById("countdownIDText").innerText = "Čas do začátku školy";
    document.getElementById("countdownIDText").textContent = "Čas do začátku školy";
  }

  secRemaining = (secRemaining < 10) ? "0" + secRemaining : secRemaining;

  countdownRight = countdown - 1; //odecte na spravny cas

  document.getElementById("countdownID").innerText = countdownRight + ":" + secRemaining;
  document.getElementById("countdownID").textContent = countdownRight + ":" + secRemaining;
}, 1000);
function test(){
  var currentTime = moment().format('YYYY MM DD');
}

test();
