/**
 * categories.js
 */

//영화정보
let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';

let imgUrl = 'https://image.tmdb.org/t/p/';
let imgUrlSize = "";

fetch(mvUrl)
	.then(result => result.json())
	.then(mvData => {
		//console.log(mvData)

		//포스터 부분
		for (i = 0; i < mvData["results"].length; i++) {

			let row = document.querySelector('div .product__page__content').children[1]
			let poster = row.children[i].children[0].children[0];

			imgUrlSize = "w342";

			poster.setAttribute('style', 'background-image: url("' + imgUrl + imgUrlSize + mvData["results"][i].poster_path + '"); background-size: 230px 325px;')

			//포스터부분 링크추가(클릭시 연결)
			let a = document.createElement('a');
			a.setAttribute('href', './movieDetail.do');
			poster.parentElement.prepend(a)
			a.prepend(poster)
		}

		//제목 부분
		for (i = 0; i < mvData["results"].length; i++) {

			let row = document.querySelector('div .product__page__content').children[1]
			let mvtitle = row.children[i].children[0].children[1].children[1].children[0];

			mvtitle.innerText = (mvData["results"][i].title);

			//제목부분 링크 수정
			//let txtTag = document.querySelector('div .product__item__text h5').children[0]
			txtTag = row.children[i].children[0].children[1].children[1].children[0]
			txtTag.setAttribute('href', './movieDetail.do')

		}

		//아이콘 부분
		let comment = document.querySelector('div .comment'); //댓글 아이콘부분
		let view = document.querySelector('div .view'); //조회수 부분

		//==============

		//let grLi = row.children[i].children[0].children[1].children[0].children[i] -> (<li>action</li>부분임)

		//제목위에 장르 표시하기
		let grUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR"
		fetch(grUrl)
			.then(result => result.json())
			.then(grData => {
				console.log(mvData.results[0].genre_ids.length)	//영화정보 장르 배열 길이(수)
				console.log(grData.genres[0].id, grData.genres[1].name)	//장르정보에서 번호, 장르이름

				let mvList = mvData.results
				mvList[1].genre_ids	//영화정보배열의 장르정보
				let grList = grData.genres
				grData.genres[0].id	//장르배열 장르id
				grData.genres[1].name	//장르배열 장르 이름

				console.log(mvList[1].genre_ids)	//영화정보 전체 배열
				console.log(grList)	//장르정보 배열

				console.log(mvList.length)

				//영화정보의 장르 id와 장르정보의 장르id가 같은경우 장르 이름이 나오게 출력
				for (k = 0; k < mvList.length; k++) {
					let row = document.querySelector('div .product__page__content').children[1]

					for (j = 0; j < grList.length; j++) {
						for (i = 0; i < mvList.length; i++) {

							if (mvList[k].genre_ids[i] == grList[j].id) {
								//console.log(grList)
								//console.log(mvList[k].genre_ids[0])	///////
								//console.log(grList[j].name)
								let ul = row.children[k].children[0].children[1].querySelector('ul')
								let li = document.createElement('li')
								li.innerText = grList[j].name
								ul.append(li)

							}
						}
					}
				}
				//장르 선택 옵션빡스
				let mvGrAry = [];
				fetch(mvUrl)
					.then(result => result.json())
					.then(mvGr => {
						console.log(mvGr)
						mvGrAry = mvGr.results	//조회된 영화목록의 장르번호를 mvGrAry에 저장
						console.log(mvGrAry)

						//영화정보에서 장르 번호만 뽑아서 배열에 모으기
						let filterGenre = [];
						for (let genre of mvGrAry) {
							for (i = 0; i < genre.genre_ids.length; i++) {	//장르가 또 배열이라서 for문으로 여러번 push해주기
								if (filterGenre.indexOf(genre.genre_ids[i]) == -1) {	//중복제거
									filterGenre.push(genre.genre_ids[i]);
								}
							}
						}
						console.log('filterGenre', filterGenre)
					})

			})	//-> grUrl 괄호 끝


		//장르별로 분류하기
		//		let mvFilter = [];
		//		fetch(mvUrl)
		//			.then(result => result.json())
		//			.then(ftData => {

		//				console.log(ftData)
		//			})

	})



