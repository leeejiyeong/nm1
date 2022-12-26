/**
 * 
 */

let willOpen =
	"https://api.themoviedb.org/3/movie/upcoming?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1&region=KR"
let imgUrl = "https://image.tmdb.org/t/p/w92";
fetch(willOpen)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//window.onload = function () {

		//첫번째 영화 포스터 적용
		let product__item = document.querySelector('div .product__item');

		let ep = document.getElementById('ep');
		let comment = document.getElementById('comment');
		let view = document.getElementById('view');

		// console.log(data["results"][i].poster_path) 
		let div = document.createElement('div');
		div.setAttribute('class', "product__item__picset-bg");

		div.setAttribute('style', "background-image : url('" + imgUrl + data["results"][1].poster_path + "')")
		//  <div style="background-image : url(이미지경로); background-size : cover;">
		//console.log(div);
		product__item.prepend(div);
		div.append(ep);
		div.append(comment);
		div.append(view);

		//console.log(data["results"][i].title) //제목가져오는 것
		//console.log(data["results"][i].poster_path) //사진가져오는 것
	})


