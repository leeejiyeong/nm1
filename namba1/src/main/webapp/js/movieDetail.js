/**
 * movieDetail.js
 */

console.log(location.href)

window.onload = function() {
	let url = new URL(window.location.href);
	let urlParam = url.searchParams;
	let movieId = urlParam.get('movieId');
	console.log(movieId)

	movieDetailInfo();

	//영화 상세정보 내용 가져오기
	function movieDetailInfo() {
		let url = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR';
		fetch(url)
			.then(result => result.json())
			.then(data => {
				let movie = data;
				console.log(movie)

				//영화 리스트 불러오기
				if (movieId == movie.id) {
					//1. 포스터
					let posterPath = movie.poster_path;
					let bgImgUrlString = "background-image: url('https://image.tmdb.org/t/p/w342" + posterPath + "'); background-size: 230px 325px;";
					let posterDiv = document.querySelector('div #posterDiv')
					posterDiv.setAttribute('style', bgImgUrlString)

					//2. 제목
					let title = movie.title;
					let titleTag = document.querySelector('div .anime__details__title > h3')
					titleTag.innerText = title;

					//3. 소제목
					let engTitle = movie.original_title;
					let engTitleTag = document.querySelector('div .anime__details__title > span')
					engTitleTag.innerText = engTitle;

					//4. 평점 투표수(별 밑에)
					let voteCnt = movie.vote_count;
					let voteCntTag = document.querySelector('div .anime__details__rating >span')
					voteCntTag.innerText = voteCnt + " Votes"

					//5. 코멘트
					let overview = movie.overview;
					let overviewTag = document.querySelector('div .anime__details__text > p')
					overviewTag.innerText = overview;

					//6. 감독
					directorInfo();

					//7. 배우
					actorInfo();

					//8. 장르
					console.log(movie.genres)
					let movieGenreAry = movie.genres
					let genreList = [];
					let genreLi = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(3)')
					let genreSpan = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(3)').children[0]
					for(let genre of movieGenreAry){
						genreList.push(' '+ genre.name)
						genreLi.innerText = genreList
					}
					genreLi.prepend(genreSpan);
					

					//9. 개봉일
					let releaseDate = movie.release_date;
					let relDateLi = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(1)')
					let relDateSpan = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(1)').children[0]

					relDateLi.innerText = " " + releaseDate;
					relDateLi.prepend(relDateSpan);

					//10. 상영시간
					let runtime = movie.runtime;
					let runtimeLi = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(2)')
					let runtimeSpan = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(2)').children[0]

					runtimeLi.innerText = " " + runtime + "분";
					runtimeLi.prepend(runtimeSpan);

					//11. 평점
					let voteAvg = movie.vote_average;

					let voteLi = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(3)')
					let voteSpan = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(3)').children[0]
								
					voteLi.innerText = " " + voteAvg + " / " + voteCnt;
					voteLi.prepend(voteSpan);


					//12. 사이드부분(좋아할만한 영화)
					recommendMovieList();
					
					//watch now버튼
					let watchBtn = document.querySelector('div .anime__details__btn > a > span')
					watchBtn.setAttribute("onclick", "movieWatching('"+movieId+"')");


				}
			})
		//감독 정보 api 가져오기			
		function directorInfo() {
			let crewList = [];

			let creditUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'
			fetch(creditUrl)
				.then(result => result.json())
				.then(data => {
					crewAry = data.crew
					for (let crew of crewAry) {
						let department = crew.known_for_department;
						let directorName = crew.name;

						if (department == 'Directing') {
							crewList.push(directorName);
						}
					}

					let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(1)')
					let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(1)').children[0]
					li.innerText = " " + crewList[0];
					li.prepend(span)
				})
		}

		//배우정보 가져오기
		function actorInfo() {
			let castList = [];

			let creditUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'
			fetch(creditUrl)
				.then(result => result.json())
				.then(data => {
					castAry = data.cast
					for (let cast of castAry) {
						let actorName = cast.name;
						castList.push(actorName);
					}

					let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(2)')
					let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(2)').children[0]
					li.innerText = " " + castList[0] + ', ' + castList[1];
					li.prepend(span)
				})

		}
		
		//추천영화
		function recommendMovieList() {
			recommendUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1'
			fetch(recommendUrl)
				.then(result => result.json())
				.then(data => {
					recommendMovieAry = data.results
					console.log(recommendMovieAry)

					//포스터
					for (i = 1; i < 5; i++) {
						let sidePoster = document.querySelector('div .anime__details__sidebar').children[i]
						let posterPath = recommendMovieAry[i].poster_path
						let bgImgUrlString = "background-image: url('https://image.tmdb.org/t/p/w300" + posterPath + "'); background-size: 200px 330px;";

						sidePoster.setAttribute('style', bgImgUrlString)

						//제목
						let sideTitle = document.querySelector('div .anime__details__sidebar').children[i].children[1].children[0]
						sideTitle.innerText = recommendMovieAry[i].title

						//링크
						let sideMovieId = recommendMovieAry[i].id
						sidePoster.setAttribute('onclick', "selectDetail('" + sideMovieId + "')")
						sideTitle.setAttribute('onclick', "selectDetail('" + sideMovieId + "')")

					}


				})

		}
	}
}
function selectDetail(sideMovieId) {
	location.href = "./movieDetail.do?movieId=" + sideMovieId;
}

function movieWatching(movieId){
	location.href = "./movieWatching.do?movieId="+ movieId;
}
