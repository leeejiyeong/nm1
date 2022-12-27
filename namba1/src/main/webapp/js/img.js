/**
 * 
 */
console.log("ggg")

let willOpen =
	"https://api.themoviedb.org/3/movie/upcoming?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1&region=KR"
let imgUrl = "https://image.tmdb.org/t/p/";
let imgUrlSize = "";
fetch(willOpen)
	.then((result) => result.json())
	.then(data => {
		console.log(data)
		//window.onload = function () {
		//맨앞에 왕대빵 큰 화면(이미지3개 적용)
		for (let i = 0; i < 3; i++) {
			imgUrlSize = "w1280";
			let headImg = document.querySelector('div.hero__sliderowl-carousel div.hero__itemsset-bg:nth-child(' + (i + 1) + ')');
			//headImg.removeAttribute('data-setbg')
			headImg.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][i].backdrop_path + "');")
		}

		//첫번째 영화 포스터 적용

		let product__item = document.querySelector('div .product__item');
		let product = document.querySelector('div .product__item__picset-bg');
		//let ep = document.querySelector('ep')
		//let comment = document.querySelector('comment')	
		// product.removeAttribute('data-setbg')

		imgUrlSize = "w342";
		product.setAttribute('style', "background-image : url('" + imgUrl + imgUrlSize + data["results"][0].poster_path + "'); background-size: 272px 400px;")

		//이미지태그 적용해보기
		//let imgtg = document.createElement('img');
		//imgtg.setAttribute('src', imgUrl + imgUrlSize + data["results"][0].poster_path)





		//product.append(ep)
		//product.append(comment)
		console.log(product)
		console.log("요기요");
		console.log(data);


		//첫번째 영화 제목 적용
		// let item__text = document.querySelector('div .product__item__text');
		let title = document.querySelector('div .product__item__text a');

		title.innerHTML = data["results"][0].title;



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


fetch(willOpen)
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
