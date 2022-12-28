/**
 * movieDetail.js
 */
//영화정보
let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';

let imgUrl = 'https://image.tmdb.org/t/p/';
let imgUrlSize = "";

fetch(mvUrl)
	.then(result => result.json())
	.then(mvData => {
		//categories.js에서 json형태로 영화코드 보낸거 받아오기
		let idString = window.localStorage.getItem('id');
		let cdArr = JSON.parse(idString);
		console.log(cdArr);
		//===

		console.log(mvData)

		//포스터 부분
		for (i = 0; i < mvData.results.length; i++) {
			let row = document.querySelector('div .anime__details__content').children[0]
			let poster = row.children[0].children[0];

			imgUrlSize = "w342";
			poster.setAttribute('style', 'background-image: url("' + imgUrl + imgUrlSize + mvData.results[i].poster_path + '"); background-size: 275px 420px;')

		}
		//제목 부분
		for (i = 0; i < mvData.results.length; i++) {
			let title = document.querySelector('div .anime__details__title > h3')
			title.innerText = mvData.results[i].title;
		}
		//소제목
		for (i = 0; i < mvData.results.length; i++) {
			let smallTitle = document.querySelector('div .anime__details__title > span')
			smallTitle.innerText = mvData.results[i].original_title;
		}
		
		//코멘트 부분
		for(i=0;i<mvData.results.length;i++){
			let overview = document.querySelector('div .anime__details__text > p')
			overview.innerText = mvData.results[i].overview;
		}

	})