const numbers = document.querySelectorAll(".number");
const segments = Array.from(numbers).map(number => number.querySelectorAll("svg"))

const numbersMap = [
    [1,1,1,1,1,0,1],
	[0,1,1,0,0,0,0],
	[1,1,0,1,1,1,0],
	[1,1,1,1,0,1,0],
	[0,1,1,0,0,1,1],
	[1,0,1,1,0,1,1],
	[1,0,1,1,1,1,1],
	[1,1,1,0,0,0,0],
	[1,1,1,1,1,1,1],
	[1,1,1,1,0,1,1],
];

function setNumber(i, value) {
    segments[i].forEach((segment, j) => {
        segment.children[0].classList.toggle("on", numbersMap[value][j])
    })
}

setInterval(() => {
    updatedTime();
}, 1000);

function getTwoDigits(number) {
    if(number.length === 2) return number;
    return "0" + number;
}

function updatedTime(){
    const now = new Date();
    const hours = getTwoDigits(now.getHours().toString());
    const minutes = getTwoDigits(now.getMinutes().toString());
    const seconds = getTwoDigits(now.getSeconds().toString());
    
    setNumber(0, hours[0])
    setNumber(1, hours[1])
    setNumber(2, minutes[0])
    setNumber(3, minutes[1])
    setNumber(4, seconds[0])
    setNumber(5, seconds[1])
}

updatedTime();