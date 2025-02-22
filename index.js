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