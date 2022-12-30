/**
 * categories.js
 */

//장르 목록 클릭이벤트 함수
function chooseList() {
	console.log(event.target.textContent)	//옵션 목록의 값(장르이름)
	console.log(event.target) //옵션목록 li태그 전체(value로 장르이름을 가지고있다)
	ckEvtTxt = event.target.textContent
	//영화정보url
	let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';

	fetch(mvUrl)
		.then(result => result.json())
		.then(mvData => {

			//장르url
			let grUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR"
			fetch(grUrl)
				.then(result => result.json())
				.then(grData => {
					//영화정보의 장르 id와 장르정보의 장르id가 같은경우 장르 이름이 나오게 출력
					let mvList = mvData.results
					let grList = grData.genres
					console.log(mvList)	//영화url 배열 전체
					console.log(grList)	//장르url 배열 전체


					if (ckEvtTxt == mvList.name) {	//1 클릭이벤트가 걸리는 옵션 목록의 장르이름이랑 영화 url의 장르이름이 같을때

					}

				})

		})
}


//a태그 클릭이벤트 함수 - 해당 이미지의 영화정보를 상세정보 페이지로 넘기기
function test() {
	//포스터 이미지 값 추출하기
	//console.log(event.target.style.cssText)
	imgUrlTxt = event.target.style.cssText
	console.log(imgUrlTxt.substring(54, 86))
	pstPath = imgUrlTxt.substring(54, 86)
	let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';
	fetch(mvUrl)
		.then(result => result.json())
		.then(mvData => {
			//console.log(mvData.results)
			let mvList = mvData.results
			console.log(mvList[0].poster_path)

			//포스터 클릭이벤트의 포스터이름이랑 영화정보 포스터이름이랑 같은지 비교
			for (i = 0; i < mvList.length; i++) {
				if (mvList[i].poster_path == pstPath) {
					//json 키:밸류 형태로 바꿔주기(안바꾸면 못넘김) -> movieDetail.js에서 받음 됨
					let mvInfo = JSON.stringify(mvList[i]);
					window.localStorage.setItem('imgPath', mvInfo)
				}

			}
		})
}

window.onload = function() {

	//영화정보
	let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';

	let imgUrl = 'https://image.tmdb.org/t/p/';
	let imgUrlSize = "";

	fetch(mvUrl)
		.then(result => result.json())
		.then(mvData => {
			//console.log(mvData)

			//포스터 부분
			for (i = 0; i < mvData.results.length; i++) {

				let row = document.querySelector('div .product__page__content').children[1]
				let poster = row.children[i].children[0].children[0];

				imgUrlSize = "w342";

				poster.setAttribute('style', 'background-image: url("' + imgUrl + imgUrlSize + mvData.results[i].poster_path + '"); background-size: 230px 325px;')


				//포스터부분 링크추가(클릭시 연결)
				let a = document.createElement('a');
				a.setAttribute('href', './movieDetail.do'); // ./movieDetail.do
				a.setAttribute('onclick', 'test()')	//a태그에 click이벤트 걸기(함수실행)
				poster.parentElement.prepend(a)
				a.prepend(poster)


			}

			//제목 부분
			for (i = 0; i < mvData["results"].length; i++) {

				let row = document.querySelector('div .product__page__content').children[1]
				let mvtitle = row.children[i].children[0].children[1].children[1].children[0];

				mvtitle.innerText = (mvData.results[i].title);

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
					let grAry = [];
					
					console.log(grList[1].name) 
					//장르url에서 이름 가져오기
					for(i = 0; i < grList.length; i++) {
						grName = grList[i].name
						
						//가져온거 빈 배열에 넣기
						grAry.push(grName)
					}
					console.log(grAry)

//					console.log(mvGr)
//					mvGrAry = mvGr.results	//조회된 영화목록의 장르번호를 mvGrAry에 저장
//					console.log(mvGrAry)

//
//					//영화정보에서 장르 번호만 뽑아서 배열에 모으기(필터링)
//					let filterGenre = [];
//					for (let genre of mvGrAry) {
//						for (i = 0; i < genre.genre_ids.length; i++) {	//장르가 또 배열이라서 for문으로 여러번 push해주기
//							if (filterGenre.indexOf(genre.genre_ids[i]) == -1) {	//중복제거
//								filterGenre.push(genre.genre_ids[i]);
//							}
//						}
//					}
//					console.log('filterGenre', filterGenre)
		
//					//필터링한 장르번호를 option 목록에 추가
//					for (let genreId of filterGenre) {
//						console.log(genreId)
//						//장르id로 장르이름 가져오기
//						let gerLi = document.querySelector('div .product__page__filter').children[2].querySelector('li')
//						for (i = 0; i < grList.length; i++) {
//							if (genreId == grList[i].id) {
//								genreId = grList[i].name
//								console.log(grList[i].name)
//								gerLi.innerText = genreId;
//								gerLi.setAttribute('value', genreId)
//							}
//						}
//						//출력이 안됨 ⭐⭐⭐⭐ 콘솔에는 나오는데 왜 안나옴 - 현재 option 태그 야매로 작동중
//						//let select = document.querySelector('select')
//						//let opt = document.createElement('option')
//						//opt.innerText = genreId;
//						//opt.setAttribute('value',"")
//						//select.append(opt)
//
//						document.querySelector('div > ul').append(gerLi);
//					}
//					console.log("====1")

					//장르 목록에 클릭 이벤트 걸기
					/*document.querySelector('div > ul').addEventListener('change', function() {
						for (let genreId of filterGenre) {
							console.log("====3")	//출력안됨ㅡ
							console.log(genreId)
							for (i = 0; i < mvList.length; i++) {
								if (mvList[i].genre_ids[genre_ids.length] == genreId) {
									console.log(mvList)
									return mvList[i];
								}
							}
						}
					})
					*/



				})	//-> grUrl 괄호 끝

		})	//-> fetch mvUrl 괄호 끝


	//장르 목록 옵션박스 클릭이벤트(함수는 젤 위에있슴)
	document.querySelector('.list').setAttribute('onclick', 'chooseList()');


} // -> window.onload 괄호 끝