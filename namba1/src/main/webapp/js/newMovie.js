/**
 * 
 */
console.log("ggg")
//이미지창baseUrl
let imgUrl = "https://image.tmdb.org/t/p/";
//포스터사이즈;
let imgUrlSize = "w342";

//개봉예정영화
let movie =
	"https://api.themoviedb.org/3/movie/upcoming?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1&region=KR"


fetch(movie)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//슬라이드 화면에 다트표시 넘 마는거 좀 줄이기....
		//document.querySelector('.hero__slider.owl-carousel.owl-loaded .owl-dots:nth-child(5)').remove();



		//coming soon부분 경로~
		let load = document.querySelector('.live__product .row:nth-child(2)');

		//포스터이미지~
		mainPosterView(data, load)

		//영화이름~
		mainMovieTitleView(data, load)

		//장르부분~
		mainGenreView(data, load);

		//d-day부분~
		movieReleaseDate(data, load);


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
//개봉Dday~구하기 //12는 화면에 보여주는 영화갯수~
function movieReleaseDate(data, load) {
	//data 바탕되는 api
	for (let i = 0; i < 15; i++) {
		//개봉정보API
		let dateAPI =
			"https://api.themoviedb.org/3/movie/" + data.results[i].id + "/release_dates?api_key=b96ed5ac7fac8cd9c2670c50e891b392"

		fetch(dateAPI)
			.then((result) => result.json())
			.then(dateInfo => {
				//console.log(dateInfo)
				//dDay 적을 곳
				let dDayload = load.children[i].querySelector('.ep')
				for (let j = 0; j < dateInfo.results.length; j++) {
					//console.log(dateInfo.results[j]["iso_3166_1"])//나라 표기
					//releaseData.results.filter(function(e) {
					//return e[j]["iso_3166_1"] === "KR";})//KR인 배열 가져오기

					if (dateInfo.results[j]["iso_3166_1"] == "KR") {
						let mov = dateInfo.results[j]["release_dates"];
						//console.log(mov)//개봉날짜 정보 들어있는 배열
						for (let k = 0; k < mov.length; k++) {
							//	console.log(mov[k]["release_date"]) //개봉일 ////2023-01-04T00:00:00.000Z형태.
							let ddat = mov[k]["release_date"]
							let a = ddat.split("T")
							//console.log(a[0])//날짜만 뽑기


							//개봉예정영화일 때 (이미 개봉 한 영화는 식 바꾸기)
							let restDay = new Date(a[0]) - new Date()//개봉까지 남은 날(밀리세컨드)								
							if (restDay > 0 && Math.floor(restDay / (1000 * 60 * 60 * 24)) < 66) {
								result = Math.floor(restDay / (1000 * 60 * 60 * 24))//일수계산
								dDayload.innerHTML = 'D-' + result;
							} else if (restDay == 0 ) {
							
								dDayload.innerHTML = 'D-day';
							} else if (restDay > 0 && Math.floor(restDay / (1000 * 60 * 60 * 24)) > 66) {
								result = Math.floor(restDay / (1000 * 60 * 60 * 24 * 30))//달수계산
								dDayload.innerHTML = '약 ' + result + '달 남음';
							}
						}
					}
				}
			})
	}
}


//메인 페이지 구간별 포스터이미지 넣어주기
function mainPosterView(data, load) {
	for (let i = 0; i < 12; i++) {


		let posterImg = //document.querySelector('div.trending__product div.col-lg-4.col-md-6.col-sm-6:nth-child(' + (i + 1) + ') div.product__item__pic.set-bg');
			load.children[i].querySelector('.product__item__pic.set-bg')

		//사진에 링크걸기
		//let a = document.createElement('a');
		//a.setAttribute('href', './movieDetail.do');
		//posterImg.parentElement.prepend(a)
		//a.prepend(posterImg)
 console.log(data["results"][i].poster_path)
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
	for (let i = 0; i < 12; i++) {
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
	//data=영화정보API.json()
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
			for (k = 0; k < 12; k++) {


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