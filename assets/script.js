const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.getElementsByClassName("arrow_left");
const arrow_right = document.getElementsByClassName("arrow_right");
const dots = document.getElementsByClassName("dots");
const NumSlides = slides.length
let pos = 0


updateCarrousel(pos)
createDots()
updateDots()



arrow_left[0].addEventListener("click", function () {
	if (pos == 0) {
		pos = NumSlides - 1;
	} else {
		pos--;
	}
	updateCarrousel(pos);
});

arrow_right[0].addEventListener("click", function () {
	if (pos == NumSlides - 1) {
		pos = 0;
	} else {
		pos++;
	}
	updateCarrousel(pos);
});

function createDots(){
	const dots = document.querySelector(".dots");	
   for (let i = 0; i < slides.length; i++) {
	   const dot = document.createElement("div");
	   dot.setAttribute("class", "dot");
	   dots.appendChild(dot);
   } 
}

function updateDots(){
	const toutlesdot = document.querySelectorAll(".dot");
	for (let i = 0; i < toutlesdot.length; i++ ) {
		const dot = toutlesdot[i];
		if (i == pos){
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	}
}

function updateCarrousel(pos) {
	const caroussel = slides[pos];
	const bannertxt = document.querySelector("#banner p");
	const bannerimg = document.querySelector(".banner-img");
	bannerimg.setAttribute("src", "./assets/images/slideshow/" + caroussel.image);
	bannertxt.innerHTML = caroussel.tagLine;
	updateDots();
	
}
