/**
 * 
 */
console.log("ggg")

let popularOpen1 =
	"https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1"

let imgUrl1 = "https://image.tmdb.org/t/p/";
let imgUrlSize1 = "";
fetch(popularOpen1)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//window.onload = function () {
		//맨앞에 왕대빵 큰 화면(이미지3개 적용)
//	for (let i = 0; i < 3; i++) {
			//for (let j = 0; j < 3; j++) {
//				imgUrlSize = "w1280";
//				let headImg = //document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child(' + (i + 1) + ')');
					//document.querySelector('.hero').children[0].children[0].children[0].children[0].children[i].children[0];	
//					document.querySelector('.owl-stage').children[i];

//				headImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][j].backdrop_path + "');");

				//	let heroText=document.querySelector('.owl-item.cloned:nth-child('+i+1+') .hero__items.set-bg .row .col-lg-6');
				//let heroTitle = heroText.children[0].children[1];
				//let heroOverview = heroText.children[0].children[2];

				//왕대빵큰화면제목
				//heroTitle.innerHTML=data["results"][i].title;
				//왕대빵큰화면줄거리
				//heroOverview.innerHTML=data["results"][i].overview.split(' ');
				//console.log('=======')
				//console.log(heroTitle)
				//console.log(heroOverview)

				// let stageOwl = document.querySelector('.owl-stage').children[]

				//	console.log("h")
				//console.log(headImg)
			
//		}
		//dot 7갠가잇는거 3개로 지우기...
		document.querySelector('.hero__slider.owl-carousel.owl-loaded .owl-dots:nth-child(5)').remove();








		//trending now쪽 영화 포스터,제목 적용

		for (let i = 0; i < 6; i++) {



			imgUrlSize1 = "w342";
			let posterImg = //document.querySelector('div.trending__product div.col-lg-4.col-md-6.col-sm-6:nth-child(' + (i + 1) + ') div.product__item__pic.set-bg');
				document.querySelector('div.row:nth-child(2)').children[i].children[0].children[0];

			//사진에 링크걸기
			let a = document.createElement('a');
			a.setAttribute('href', './movieDetail.do');
			posterImg.parentElement.prepend(a)
			a.prepend(posterImg)


			posterImg.removeAttribute('data-setbg')
			posterImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][i].poster_path + "');")
			posterImg.setAttribute('href', './movieDetail.do')





			//영화 이름 적용
			let title = //document.querySelector('div.trending__product div.col-lg-4.col-md-6.col-sm-6:nth-child(' + (i + 1) + ') div.product__item__text a');
				document.querySelector('div.row:nth-child(2)').children[i].children[0].children[1].children[1].children[0]
			//제목링크
			title.setAttribute('href', 'movieDetails.do')
			title.innerHTML = data["results"][i].title;

		}


	})

	//}
	// <div class="product__item">
	// 	<div class="product__item__picset-bg" data-setbg="img/trending/trend-1.jpg">
	// 		<div class="ep">18 / 18</div>
	// 		<div class="comment">
	// 			<i class="fafa-comments"></i> 11
	// 		</div>
	// 		<div class="view">
	// 			<i class="fafa-eye"></i> 9141
	// 		</div>
	// 	</div>
	// 	<div class="product__item__text">
	// 		<ul>
	// 			<li>Active</li>
	// 			<li>Movie</li>
	// 		</ul>
	// 		<h5>
	// 			<a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
	// 		</h5>
	// 	</div>
	// </div>



	.catch(err => console.log(err))
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


fetch(popularOpen)
	.then((result) => result.json())	//stream -> object.
	.then((data) => {
		console.log(data);
		const parentEl = document.createElement('div');







		//table형식
		//makeTable(data, parentEl);		//만들어진 테이블을( ,__)이위치에다 붙이겠다
		//삭제버튼 이벤트
		//let trs = document.querySelectorAll('#show tbody tr')
		//for (const trElem of trs) {
		//console.log();
		//trElem.addEventListener('click', showModal)
		//trElem.setAttribute('id', 'notice_' + trElem.firstChild.innerText)
		//삭제버튼
		//trElem.querySelector('td:nth-child(6)>button').addEventListener('click', delAjaxFnc);
		//}
	})
	.catch(function(err) {
		console.log(err);
	})
