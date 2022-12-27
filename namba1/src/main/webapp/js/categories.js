/**
 * movie.js - top view
 */
let url = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1'
let imgUrl = 'https://image.tmdb.org/t/p/';
let imgUrlSize = "";

fetch(url)
	.then(result => result.json())
	.then(data => {
		console.log(data)
		
		//포스터 부분
		for(i = 0 ; i < data["results"].length ; i++){
		
		let row = document.querySelector('div .product__page__content').children[1];	
		let poster = row.children[i].children[0].children[0];
		
		imgUrlSize = "w342";
		console.log(data["results"][i].poster_path);
		
		poster.setAttribute('style','background-image: url("'+ imgUrl + imgUrlSize + data["results"][i].poster_path + '"); background-size: 230px 325px;')
		
		console.log(poster);
		
		}
		//아이콘 부분
		let comment = document.querySelector('div .comment'); //댓글 아이콘부분
		let view = document.querySelector('div .view'); //조회수 부분
		
		
		//텍스트부분
		let title = document.querySelector('div .product__item__text > a');	//제목
		
		let ul = document.querySelector('ul') //장르아이콘(?)
		let li = document.querySelector('li')
		
		//title.innerText = data["results"][0].title;
})