const secondHand = document.querySelector('.hand.sec');
const minsHand = document.querySelector('.hand.min');
const hourHand = document.querySelector('.hand.hour');
var addHours = 0;
var addMins = 0;

function tiking(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes() + addMins;
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours() + addHours;
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function currentTime(country) {
    const countries = {
        'india': {"mins":0,"hours":0},
        'japan': {"mins":33,"hours":3},
        'australia': {"mins":33,"hours":4},
        'usa': {"mins":-30,"hours":-9},
    };
    addHours = countries[country].hours;
    addMins = countries[country].mins;
    document.getElementById('countryName').innerHTML  = country;
    tiking();
}

setInterval(tiking, 1000);

currentTime('india');

function addActive(clock){
    const selectedClock = document.querySelector("#"+clock);
    selectedClock.classList.add('active-theme');
}

function removeActive(){
    const selectedClock = document.querySelector(".active-theme");
    if(selectedClock != null){
        selectedClock.classList.remove('active-theme');
    }
}

function changeClock(clockName){
    removeActive();
    const clocks = {
        'clock1':{
            'imageUrl': "./clocks/clock1.png",
            'handColor': "#ebe8e8"
        },
        'clock2':{
            'imageUrl': "./clocks/clock2.png",
            'handColor': "#222122"
        },
        'clock3':{
            'imageUrl': "./clocks/clock3.png",
            'handColor': "#ea70b8"
        },
    };
    document.querySelector('.clock').style.backgroundImage = "url('"+clocks[clockName].imageUrl+"')";
    document.querySelector('.hand.hour').style.borderColor = clocks[clockName].handColor;
    document.querySelector('.hand.min').style.borderColor = clocks[clockName].handColor;
    document.querySelector('.hand.sec').style.borderColor = clocks[clockName].handColor;
    document.querySelector('.place').style.color = clocks[clockName].handColor;
    addActive(clockName);
}

changeClock('clock1');