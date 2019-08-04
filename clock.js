document.querySelector('.clock').style.backgroundImage = "url('./clocks/clock1.png')";

const secondHand = document.querySelector('.hand.sec');
const minsHand = document.querySelector('.hand.min');
const hourHand = document.querySelector('.hand.hour');

function currentTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(currentTime, 1000);

currentTime();