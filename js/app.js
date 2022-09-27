



function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");
const burgerClose = document.querySelector(".burger__close");
const modal = document.querySelector(".modal__wr");
const header = document.querySelector("header");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");


burgerClose.addEventListener("click", ()=>{
	document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
});




btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});









window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
})




let btnPush = document.querySelector(".btnPush");
const regName = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ0-9]{3,}$/;
let regEmail = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;

btnPush.addEventListener("click" , ()=>{

if(regName.test(userName.value)){
	userName.style.borderBottom = "1px solid #fff";
}else{
	userName.style.borderBottom = "1px solid red";
}

if(regEmail.test(userEmail.value)){
	userEmail.style.borderBottom = "1px solid #fff";
}else{
	userEmail.style.borderBottom = "1px solid red"; 
}



if(regName.test(userName.value) && regEmail.test(userEmail.value)){
	modal.classList.add("modal__active");
}
});




modal.addEventListener("click", ()=>{
	modal.classList.remove("modal__active");
})







window.addEventListener("scroll", ()=>{
	if(scrollY > 100){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});

















////////////modal






