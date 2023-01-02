/**
 * 
 */
let url = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=2';
fetch(url)
	.then(result => result.json())
	.then(data => {
		let movieList = data.results;

			for (let movie of movieList) {
				// 1. 포스터
				let posterPath = movie.poster_path;
				let bgImgUrlString = "background-image: url('https://image.tmdb.org/t/p/w342" + posterPath + "'); background-size: 230px 325px;";
				let pointer = "cursor: pointer;" // 마우스 호버시 손가락 모양 

				let poster = document.querySelector('#poster'); // 새로생성한 emptyDOM 안에 포스터 넣어줄 div태그 선택
				poster.setAttribute("style", bgImgUrlString + pointer);

				// 2. 제목
				let titleA = movie.title;

				let title = document.querySelector('#title'); // 새로생성한 emptyDOM 안에 포스터 넣어줄 a태그 선택
				title.innerText = titleA;
			}
		
	})
