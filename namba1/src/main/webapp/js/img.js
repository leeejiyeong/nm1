/*
 * 메인페이지 세부영화 부분!(slide제외)
 */
console.log("ggg")
//이미지창baseUrl
let imgUrl = "https://image.tmdb.org/t/p/";
//포스터사이즈;
let imgUrlSize = "w342";



//populer
//인기영화부분 main movie part1
let movie =
	"https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1"

fetch(movie)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//슬라이드 화면에 다트표시 넘 마는거 좀 줄이기....
		//document.querySelector('.hero__slider.owl-carousel.owl-loaded .owl-dots:nth-child(5)').remove();

		//trending부분 경로~
		let load = document.querySelector('.trending__product .row:nth-child(2)');

		//포스터이미지~
		mainPosterView(data, load)
		//영화이름~
		mainMovieTitleView(data, load)
		//장르부분~
		mainGenreView(data, load);

		/*--------------
		링크걸라고 추가한 코드 - 왜 한개만됨?
		---------------*/
		let movieList = data.results;
		for (let movie of movieList) {
			let movieId = movie.id;
			console.log(movieId)
			let poster = document.querySelector('div #poster')
			let title = document.querySelector('div #title')
			poster.setAttribute("onclick", "selectDetail('" + movieId + "')");
			title.setAttribute("onclick", "selectDetail('" + movieId + "')");
		}

	})




//top rated
movie = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1'
//document.querySelector('.popular__product .row:nth-child(2)')//popular부분

fetch(movie)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//슬라이드 화면에 다트표시 넘 마는거 좀 줄이기....
		//document.querySelector('.hero__slider.owl-carousel.owl-loaded .owl-dots:nth-child(5)').remove();


		//popular부분 경로~
		load = document.querySelector('.popular__product .row:nth-child(2)');

		//포스터이미지~
		mainPosterView(data, load)
		//영화이름~
		mainMovieTitleView(data, load)
		//장르부분~
		mainGenreView(data, load);
		
		
	})




//const showFields = {
//'data["results"][0]["backdrop_path"]' : "공지번호",
//	noticeWriter: "작성자",
//	noticeTitle: "제목",
//	noticeDate: "작성일자",
//	noticeHit: "조회수"
//}
//function makeTable(aryData = [], parent) {
//let tbl = document.createElement('table');
//tbl.setAttribute('border', 1)
//let thd = document.createElement('thead');
//let tbd = document.createElement('tbody');
//	let tr = document.createElement('tr');

//let fields = showFields;	//보여줄 항목을 지정(전체항목);											//<-로 바뀜  let fields = aryData[0];
//head영역.
//for (const field in fields) {
//	let th = document.createElement('th')
//th.innerText =field; //id값이 보이고	ex)noticeId
//	th.innerText = fields[field];	//그안의 텍스트값이보임	ex)공지번호
//	tr.append(th);
//	}
//추가항목.
//	for (const col in addColumn) {
//	let th = document.createElement('th')
//	th.innerHTML = addColumn[col][0] == 'button' ? addColumn[col][1] : '<input type="checkbox">';
//	tr.append(th);
//}
//	thd.append(tr);
//tbl.append(thd);

//body영역
//	for (const data of aryData) {
//	let tr = makeTr(data);
//	tbd.append(tr);
//	}
//tbl.append(tbd);

//	parent.append(tbl);	//생성된 테이블요소 매개값으로 사용된 위치 appen


//}



//메인 페이지 구간별 포스터이미지 넣어주기
function mainPosterView(data, load) {
	for (let i = 0; i < 6; i++) {


		let posterImg = //document.querySelector('div.trending__product div.col-lg-4.col-md-6.col-sm-6:nth-child(' + (i + 1) + ') div.product__item__pic.set-bg');
			load.children[i].querySelector('.product__item__pic.set-bg')

		//사진에 링크걸기
		//let a = document.createElement('a');
		//a.setAttribute('href', './movieDetail.do');
		//posterImg.parentElement.prepend(a)
		//a.prepend(posterImg)

		posterImg.setAttribute('data-setbg', imgUrl + imgUrlSize + data["results"][i].poster_path)

		posterImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][i].poster_path + "');")
		//posterImg.setAttribute('href', './movieDetail.do')

		//영화코드 값 movieDetail.jsp에 넘기는 method
		posterImg.addEventListener('click', function() {
			document.getElementById('movieCode').value = data["results"][i].id

			document.movieInfo.submit();
			return data["results"][i].id;
		})

	}

}






//메인 페이지 구간별  제목 넣어주기
function mainMovieTitleView(data, load) {
	for (let i = 0; i < 6; i++) {
		//영화 이름 적용
		let title = //document.querySelector('div.trending__product div.col-lg-4.col-md-6.col-sm-6:nth-child(' + (i + 1) + ') div.product__item__text a');
			//document.querySelector('.popular__product .row:nth-child(2)')
			load.children[i].querySelector('.product__item__text a');
		//제목링크
		//title.setAttribute('href', 'movieDetail.do')
		title.innerHTML = data["results"][i].title;

		title.addEventListener('click', function() {
			document.getElementById('movieCode').value = data["results"][i].id

			document.movieInfo.submit();

			return data["results"][i].id;
		})
	}
}





//메인 페이지 구간별 제목윗부분에 장르아이콘 넣어주기
function mainGenreView(data, load) {
	//data=영화정보API
	//load= document.querySelector('.trending__product .row:nth-child(2)') 프로덕트구간...?경로?

	//메인 페이지 구간별 제목위에 장르 표시하기
	let grUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR"
	fetch(grUrl)
		.then(result => result.json())
		.then(grData => {

			let mvList = data.results
			mvList[1].genre_ids	//영화정보배열의 장르정보
			let grList = grData.genres
			grData.genres[0].id	//장르배열 장르id
			grData.genres[1].name	//장르배열 장르 이름

			//영화정보의 장르 id와 장르정보의 장르id가 같은경우 장르 이름이 나오게 출력
			for (k = 0; k < 6; k++) {


				for (j = 0; j < grList.length; j++) {
					for (i = 0; i < mvList.length; i++) {

						if (mvList[k].genre_ids[i] == grList[j].id) {


							let ul = load.children[k].querySelector('ul')
							let li = document.createElement('li')
							li.innerText = grList[j].name
							ul.append(li)
						}
					}
				}
			}

		})
		.catch(err => console.log(err))
}
function selectDetail(movieId) {
	location.href = "./movieDetail.do?movieId=" + movieId;
}