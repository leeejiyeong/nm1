/**
 * 
 */

let willOpen =
	"https://api.themoviedb.org/3/movie/upcoming?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1&region=KR"
let imgUrl = "https://image.tmdb.org/t/p/";
let imgUrlSize = "";
fetch(willOpen)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//window.onload = function () {
		//맨앞에 왕대빵 큰 화면(이미지3개 적용)
		for (let i = 0; i < 3; i++) {
			imgUrlSize = "w1280";
			let headImg = document.querySelector('div.hero__sliderowl-carousel div.hero__itemsset-bg:nth-child(' + (i + 1) + ')');
			//headImg.removeAttribute('data-setbg')
			headImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][i].backdrop_path + "');")
		}

		//첫번째 영화 포스터 적용

		let product__item = document.querySelector('div .product__item');
		let product = document.querySelector('div .product__item__picset-bg');
		//let ep = document.querySelector('ep')
		//let comment = document.querySelector('comment')   
		// product.removeAttribute('data-setbg')

		imgUrlSize = "w342";
		product.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][0].poster_path + "'); background-size: 272px 400px;")

		//이미지태그 적용해보기
		//let imgtg = document.createElement('img');
		//imgtg.setAttribute('src', imgUrl + imgUrlSize + data["results"][0].poster_path)


		console.log(product)
		console.log(data);


		//첫번째 영화 제목 적용
		// let item__text = document.querySelector('div .product__item__text');
		let title = document.querySelector('div .product__item__text a');

		title.innerHTML = data["results"][0].title;


		//trending now쪽 영화 포스터,제목 적용

		for (let i = 0; i < 6; i++) {

			imgUrlSize = "w342";
			let posterImg = document.querySelector('div.trending__product div.col-lg-4col-md-6col-sm-6:nth-child(' + (i + 1) + ') div.product__item__picset-bg');


			//사진에 링크걸기
			let a = document.createElement('a');
			a.setAttribute('href', 'movieDetails.do');
			console.log("-----------")
			console.log(posterImg.parentElement)
			posterImg.parentElement.prepend(a)
			a.prepend(posterImg)
			console.log(a)


			//headImg.removeAttribute('data-setbg')
			posterImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][i].poster_path + "');")
			posterImg.setAttribute('href', 'movieDetails.tiles')

			//console.log(posterImg)



			//영화 이름 적용
			let title = document.querySelector('div.trending__product div.col-lg-4col-md-6col-sm-6:nth-child(' + (i + 1) + ') div.product__item__text a');
			title.setAttribute('href', 'movieDetails.tiles')
			title.innerHTML = data["results"][i].title;

		}


	})

