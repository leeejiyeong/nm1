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
		console.log(mvData)
		//categories.js에서 json형태로 영화코드 보낸거 호출하기
		let mvInfoAry = window.localStorage.getItem('imgPath');
		let mvArr = JSON.parse(mvInfoAry);
		console.log(mvArr);
		//=================

		let mvList = mvData.results

		//포스터
		for (i = 0; i < mvList.length; i++) {
			let poster = document.querySelector('div .anime__details__content').children[0].children[0].children[0];
			imgUrlSize = "w342";
			//categories에서 불러온 이미지 이름이랑 detail영화정보에서의 이미지 이름이랑 같을때 
			if (mvArr.poster_path == mvList[i].poster_path) {
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
		/*
		//감독.배우 - 영화코드값 어케바꿈?
		creditUrl = 'https://api.themoviedb.org/3/movie/'+76600+'/credits?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'
		fetch(creditUrl)
			.then(result => result.json())
			.then(cdData =>{
				console.log(cdData)
				
			})
		*/

		//개봉일
		for (i = 0; i < mvList.length; i++) {
			if (mvArr.poster_path == mvList[i].poster_path) {
				let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(3)')
				let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(3)').children[0]

				console.log(li)
				li.innerText = " " + mvList[i].release_date;
				li.prepend(span)
			}
		}

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
						let li = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(4)')
						let span = document.querySelector('div .anime__details__widget').children[0].children[0].querySelector('li:nth-child(4)').children[0]

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

	})	//-> mvUrl 괄호 끝
