const marioRun = document.querySelector(".marioRun");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const score = document.querySelector(".score");
const restart = document.querySelector(".restart");
const start = document.querySelector(".start");
const time = document.querySelector(".time");

start.addEventListener("click", ()=>{
	pipe.classList.add("pipe-animation");
	clouds.classList.add("clouds-animation");
	if(start){
		start.style.display = "none";
	}
});
const jump = () =>{	
	marioRun.classList.add("jump");
	setTimeout(() => {
		marioRun.classList.remove("jump");
	}, 800);
}
document.addEventListener("keydown", jump);

const loopScore = setInterval(()=>{
	const pipePositions = pipe.offsetLeft;
	if(pipePositions < 90){
		console.log(pipePositions)
		score.innerHTML ++;
	}
}, 650);

const loop = setInterval(()=>{
	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(marioRun).bottom.replace("px", " ");
	const cloudsPosition = clouds.offsetLeft;

	if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
		
		clouds.style.animation = "none";
		clouds.style.left = `${cloudsPosition}px`;

		pipe.style.animation = "none";
		pipe.style.left = `${pipePosition}px`;

		marioRun.style.animation = "none";
		marioRun.style.bottom = `${marioPosition}px`;

		marioRun.src = "./img/game-over.png";
		marioRun.style.width = "70px";
		marioRun.style.marginLeft = "50px";
		clearInterval(loop);
		clearInterval(loopScore);

		start.style.display = "none";
		restart.style.display = "flex";
		
		setTimeout(() => {
			location.reload()
		}, 2000);
	}
});


