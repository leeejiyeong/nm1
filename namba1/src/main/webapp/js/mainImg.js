/**
 * 
 */
let popularOpen =
	"https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1";

let imgUrl = "https://image.tmdb.org/t/p/";
let imgUrlSize = "";
fetch(popularOpen)
	.then((result) => result.json())
	.then(data => {
		console.log(data);
		//window.onload = function () {
		//맨앞에 왕대빵 큰 화면(이미지3개 적용)
		for (let i = 1; i < 4; i++) {
			imgUrlSize = "w1280";


			let headImg = document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child('+i+')');


			//이미지 적용
			headImg.setAttribute('data-setbg', imgUrl + imgUrlSize + data["results"][i-1].backdrop_path);
			headImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][i-1].backdrop_path + "');");
			
			
			
			//let heroTitle = document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child('+i+')').children[1];
			//heroTitle.textContent = data["results"][i-1].title;

			//let heroOverview = document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child(' + i + 1 + ') p');
			//heroOverview.innerHTML = data["results"][i].overview;
			//console.log(heroTitle);
			//console.log(heroOverview);
		


			
		}
		
		
	})