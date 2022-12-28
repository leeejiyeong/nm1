/**
 * categories.js
 */

//영화정보
let mvUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1'
let imgUrl = 'https://image.tmdb.org/t/p/';
let imgUrlSize = "";

fetch(mvUrl)
	.then(result => result.json())
	.then(mvData => {
		//console.log(mvData)

		//포스터 부분
		for (i = 0; i < mvData[results].length; i++) {

			let row = document.querySelector('div .product__page__content').children[1]
			let poster = row.children[i].children[0].children[0];

			imgUrlSize = "w342";
			
			poster.setAttribute('style','background-image: url("' + imgUrl + imgUrlSize + mvData[results][i].poster_path + '"); background-size: 230px 325px;')

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

		let ul = document.querySelector('ul') //장르아이콘(?)
		let li = document.querySelector('li')
		//==============

		//let grLi = row.children[i].children[0].children[1].children[0].children[i] -> (<li>action</li>부분임)
/*
		//장르	
		let grUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR"
		fetch(grUrl)
			.then(result => result.json())
			.then(grData => {
				console.log(mvData.results)
				console.log(mvData.results[0].genre_ids)
				console.log(mvData.results[0].genre_ids.length)
				console.log(grData.genres[0].id, grData.genres[1].name)
				
				let mvList = mvData.results
				let mvGr = mvData.results[0].genre_ids
				let grList = grData.genres
				let grId = grData.genres[0].id
				let grName = grData.genres[1].name
				
				console.log(mvList)
				console.log(mvGr)
				console.log(grList)
				console.log(grId)
				console.log(grName)

//				for (i = 0; i < mvGr.length; i++) {
//					for (j = 0; j <grList.length; j++){
//						if (mvGr[i] == grId[j]){
//						}
//					}
					
//				}


			})
			*/
	})

