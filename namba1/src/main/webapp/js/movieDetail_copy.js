/**
 * movieDetail.js
 */
window.onload = function() {
//영화정보
let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';

let imgUrl = 'https://image.tmdb.org/t/p/';
let imgUrlSize = "";


fetch(mvUrl)
	.then(result => result.json())
	.then(mvData => {
		console.log(mvData)
//		//categories.js에서 json형태로 영화코드 보낸거 호출하기
//		let mvInfoAry = window.localStorage.getItem('imgPath');
//		let mvArr = JSON.parse(mvInfoAry);
//		console.log(mvArr);
//		//=================

		let mvList = mvData.results
		
		let url = new URL(window.location.href);
		let urlParam = url.searchParams;
		let movieId = urlParam.get('movieId');
		
		console.log(movieId)
		//포스터
		for (i = 0; i < mvList.length; i++) {
			let poster = document.querySelector('div .anime__details__content').children[0].children[0].children[0];
			imgUrlSize = "w342";
//			//categories에서 불러온 이미지 이름이랑 detail영화정보에서의 이미지 이름이랑 같을때 
//			if (mvArr.poster_path == mvList[i].poster_path) {
//				poster.setAttribute('style', 'background-image: url("' + imgUrl + imgUrlSize + mvList[i].poster_path + '"); background-size: 275px 420px;')
//			}
			if(movieId == mvList[i].id){
				poster.setAttribute('style', 'background-image: url("' + imgUrl + imgUrlSize + mvList[i].poster_path + '"); background-size: 275px 420px;')
			}
		}

		//제목
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let title = document.querySelector('div .anime__details__title > h3')
				title.innerText = mvList[i].title;
			}
		}

		//소제목
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let smallTitle = document.querySelector('div .anime__details__title > span')
				smallTitle.innerText = mvList[i].original_title;
			}
		}

		//평점별표

		//평점투표수
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let voteCnt = document.querySelector('div .anime__details__rating >span')
				voteCnt.innerText = mvList[i].vote_count + ' Votes';
			}
		}

		//코멘트 부분
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let overview = document.querySelector('div .anime__details__text > p')
				overview.innerText = mvList[i].overview;
			}
		}

		//감독.배우 - 영화코드값 어케바꿈?
		//creditUrl = 'https://api.themoviedb.org/3/movie/76600/credits?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'

		//영화코드 url에 맞게 나오게 바꾸기
		let creditUrl = "";
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				movieId = mvList[i].id
				crdUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'
				console.log(crdUrl)
				creditUrl = crdUrl
			}
		}
		console.log(creditUrl)

		fetch(creditUrl)
			.then(result => result.json())
			.then(cdData => {
				console.log(cdData)

				let crewAry = cdData.crew
				let castAry = cdData.cast

				//감독
				let dirAry = []; //감독이 여러명이라 배열에 담기
				for (i = 0; i < crewAry.length; i++) {
					if (crewAry[i].known_for_department == 'Directing') {
						//console.log(crewAry[i].name) //감독이름만 뽑기
						dirAry.push(crewAry[i].name)
					}
				}
				console.log(dirAry[0])	//배열에서 첫번째 감독 이름 가져오기
				//console.log(crewAry)

				for (i = 0; i < mvList.length; i++) {
					if (mvArr.poster_path == mvList[i].poster_path) {
						let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(1)')
						let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(1)').children[0]

						console.log(li)
						li.innerText = " " + dirAry[0];
						li.prepend(span)
					}
				}

				//배우
				let actAry = [];
				//console.log(castAry)
				for (i = 0; i < castAry.length; i++) {
					//console.log(castAry[i].name)
					actAry.push(castAry[i].name)
				}
				//console.log(actAry)

				for (i = 0; i < mvList.length; i++) {
					if (mvArr.poster_path == mvList[i].poster_path) {
						let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(2)')
						let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(2)').children[0]

						console.log(li)
						li.innerText = " " + actAry[0] + ', ' + actAry[1] + ', ' + actAry[2] + ', ' + actAry[3];
						li.prepend(span)
					}
				}
			}) //-> creditUrl 괄호 끝

		//장르
		let grUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR"
		fetch(grUrl)
			.then(result => result.json())
			.then(grData => {
				console.log(grData)
				let grList = grData.genres
				console.log(grList)

				//일단 번호로라도 나열, 출력 하기
				for (i = 0; i < mvList.length; i++) {
					if (mvArr.poster_path == mvList[i].poster_path) {
						let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(3)')
						let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(3)').children[0]

						//console.log(li)
						//li.innerText = " " + mvList[i].genre_ids;
						//li.prepend(span)	//장르 번호로 나열 됨

						let grAry = [];	//장르 이름 뽑은거 담아놓을 빈 배열 만들어줌
						//번호를 이름으로 바꾸기
						for (j = 0; j < grList.length; j++) {
							//console.log(mvList[i].genre_ids.length)
							let grLeng = mvList[i].genre_ids.length

							//영화목록 안에 장르배열 수만큼 돌려서 찾아내기
							for (k = 0; k < grLeng; k++) {
								//console.log(mvList[i].genre_ids[k])
								//console.log(grList[j].id)
								//console.log(grList[j].name)
								if (mvList[i].genre_ids[k] == grList[j].id) {
									grName = " " + grList[j].name
									grAry.push(grName)

									li.innerText = " " + grAry
									li.prepend(span)
								}
							}
						}
						console.log(grAry)
					}
				}

			})	//-> grUrl 괄호 끝

		//개봉일
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let li = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(1)')
				let span = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(1)').children[0]

				console.log(li)
				li.innerText = " " + mvList[i].release_date;
				li.prepend(span)
			}
		}

		//상영시간

		//평점
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let li = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(3)')
				let span = document.querySelector('div .anime__details__widget').children[0].children[1].querySelector('li:nth-child(3)').children[0]

				console.log(li)
				console.log(mvList[i].vote_average)
				li.innerText = " " + mvList[i].vote_average + " / " + mvList[i].vote_count;
				li.prepend(span)
			}
		}

		//좋아할만한 영화(사이드부분)
		let recommendUrl = "";
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				movieId = mvList[i].id
				rcmdUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1'
				//console.log(rcmdUrl)
				recommendUrl = rcmdUrl
			}
		}
		console.log(recommendUrl)

		fetch(recommendUrl)
			.then(result => result.json())
			.then(rcData => {
				console.log(rcData)
				let rcList = rcData.results
				console.log(rcList)


				//포스터
				for (i = 1; i < 5; i++) {
					let poster = document.querySelector('div .anime__details__sidebar').children[i]
					console.log(poster)

					imgUrlSize = "w300";
					poster.setAttribute('style', 'background-image: url("' + imgUrl + imgUrlSize + rcList[i].poster_path + '"); background-size: 200px 330px;')

					//포스터 링크
					//poster.setAttribute('href','./main.do') //링크바꾸기
					
				}


				//제목
				for (i = 1; i < 5; i++) {
					let title = document.querySelector('div .anime__details__sidebar').children[i].children[1].children[0]
					//console.log(title)
					console.log(rcList[i].title)
					title.innerText = rcList[i].title;

					//제목부분 링크 수정
					title.setAttribute('href', '#')	//링크넣기

				}


			})	// -> recommendUrl 괄호 끝


	})	//-> mvUrl 괄호 끝
} // -> window.onload 괄호 끝