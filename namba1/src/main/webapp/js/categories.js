
// jsp페이지가 모두 로딩되고 난 다음에 함수 실행
window.onload = function(){
   
   // 장르 선택 요청인지 url 검증
   let url = new URL(window.location.href);
   let urlParam = url.searchParams;
   let genreId = urlParam.get('genreId');	//장르id를 파라미터로 가져와서 변수에 저장
   if(genreId == null || genreId == ""){	//비었으면 false, 아니면 true반환
      searchGenreFlag = false;
   }else{
      searchGenreFlag = true;
      searchGenreId = genreId;		//파라미터로 가져온 장르id를 변수에 넣어줌
   }
   
   // 장르 정보 가져오는 함수 호출
   getGenreList();
}


// 전역 변수 생성
let searchGenreFlag = false;   // 장르 선택한 페이지 여부
let searchGenreId = "";        // 선택된 장르 id
let genreList = [];            // 장르리스트를 저장할 변수 생성


// 영화 장르 목록 API호출로 가져오기
function getGenreList(){
   let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR";
   fetch(url)
      .then(result => result.json())
      .then(data   => {
         // API로 불러온 장르데이터를 genreList 배열 변수에 저장
         genreList = data.genres;  // ※ genreList 변수 = 전역변수 (함수가 끝나도 데이터가 사라지지 않음)
         
         // 셀렉박스 옵션 생성하기
         makeSelectboxOptions();
      })
      .then(getMovieList); // 장르목록 API호출이 끝난 후에는 영화리스트 가져오기 
}


// 셀렉박스 옵션 생성하기
function makeSelectboxOptions(){
   let niceSelectUl = document.querySelector("ul.list"); // nice-select ul 선택자 잡기(클래스이름이 list)
   
   let searchGenreName = "";	//장르 이름 담을 변수
   
   for (let genre of genreList) {
      let genreId = genre.id;
      let genreName = genre.name;
      
      // 장르 옵션 li 생성
      let elementLi = document.createElement("li");
      elementLi.innerText = genreName;
      elementLi.setAttribute("id", "option_" + genreId);
      elementLi.className = "option";
      elementLi.setAttribute("onclick", "selectGenre('"+genreId+"')"); // 장르 선택 이동 온클릭 이벤트 추가
      
      // 생성한 장르 옵션 li 붙여주기
      niceSelectUl.appendChild(elementLi);
      
      // 옵션선택한 장르명 변수에 저장
      if(searchGenreId == genreId){		//파라미터로 가져온 장르id가 api에서 가져온 장르id와 같을때 이름을 변수에 담아줌
         searchGenreName = genreName;
      }
   }
   // 기본 선택 옵션에도 기본 카테고리 호출 이벤트 추가(전체보이기)
   niceSelectUl.firstChild.setAttribute("onclick", "selectGenre('default')");
   
   // 장르검색 시 셀렉박스 옵션 선택 클래스 추가
   if(searchGenreFlag == true){		//선택된 장르가 있으면
      // 선택된 장르 옵션에 포커스 클래스 주기
      let selectedOption = niceSelectUl.querySelector("#option_"+searchGenreId+"");
      selectedOption.classList.add("selected", "focus");
      
      // 기본 선택 옵션에 포커스 클래스 삭제
      niceSelectUl.firstChild.classList.remove("selected", "focus");
      
      // 기본 선택 옵션 이름을 검색한 장르 이름으로 변경(선택되면 장르이름이 나오는 span태그 영역이 ul과 형제라인임)
      niceSelectUl.previousSibling.innerText = searchGenreName;
   }
}


// 장르 옵션 선택시 이동
function selectGenre(genreId){
   if(genreId == "default"){  
      location.href = "./categories.do";		// 기본 선택시 기본 카테고리 페이지 이동(전체선택)
   }else{						
      location.href = "./categories.do?genreId=" + genreId;		//그 이외는 장르id값을 파라미터로 가져옴
   }
}


// 영화 리스트 가져오기
function getMovieList(){
   
   let url = 'https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1';
   fetch(url)
   .then(result => result.json())
   .then(data   => {
      let movieList = data.results;		//영화api에서 영화정보만 따로 빼줌
	  console.log(movieList)

      // 장르 선택 여부에 따라서 리스트 다르게 생성
      if(searchGenreFlag == true){
         movieList = editMovieList(movieList);
      }
      
      
      // emptyDOM HTML로 작성
      let emptyDOMHtml = "";
      emptyDOMHtml += '<div class="col-lg-3 col-md-6 col-sm-6">                      '    
      emptyDOMHtml += '   <div class="product__item">                                '
      emptyDOMHtml += '      <div id="posterDiv" class="product__item__pic set-bg"> '
      emptyDOMHtml += '         <div class="comment">                              '
      emptyDOMHtml += '            <i class="fa fa-comments" ></i>                '
      emptyDOMHtml += '            <span id="commentsCnt"><span>                  '
      emptyDOMHtml += '         </div>                                             '
      emptyDOMHtml += '         <div class="view">                                 '
      emptyDOMHtml += '            <i class="fa fa-eye"></i>                      '
      emptyDOMHtml += '            <span id="viewCnt"><span>                      '
      emptyDOMHtml += '         </div>                                             '
      emptyDOMHtml += '      </div>                                                 '
      emptyDOMHtml += '      <div class="product__item__text">                      '
      emptyDOMHtml += '         <ul id="genreUl">                                  '
      emptyDOMHtml += '         </ul>                                              '
      emptyDOMHtml += '         <h5>                                               '
      emptyDOMHtml += '            <a href="#" id="titleAnchor"></a>              '
      emptyDOMHtml += '         </h5>                                              '
      emptyDOMHtml += '      </div>                                                 '
      emptyDOMHtml += '   </div>                                                     '
      emptyDOMHtml += '</div>                                                        '
      
      
      // 영화 리스트 만들기 (만들어줘야 하는 항목 1.포스터, 2.제목, 3.아이콘, 4.장르, 5. 상세페이지 이동)
      for (let movie of movieList){
         // emptyDOM 생성
         let template = document.createElement('template');
         template.innerHTML = emptyDOMHtml;
         let emptyDOM = template.content.firstChild;
         
         let movieListDiv = document.getElementById("movieList"); // jsp에 영화리스트 뿌려줄 div 선택 
         
         // 1. 포스터
         let posterPath = movie.poster_path;
         let bgImgUrlString = "background-image: url('https://image.tmdb.org/t/p/w342"+posterPath+"'); background-size: 230px 325px;";
         let pointer = "cursor: pointer;" // 마우스 호버시 손가락 모양 
            
         let posterDiv = emptyDOM.querySelector('#posterDiv'); // 새로생성한 emptyDOM 안에 포스터 넣어줄 div태그 선택
         posterDiv.setAttribute("style", bgImgUrlString + pointer);      // 이미지 삽입
         
         // 2. 제목
         let title = movie.title;
         
         let titleAnchor = emptyDOM.querySelector('#titleAnchor'); // 새로생성한 emptyDOM 안에 포스터 넣어줄 a태그 선택
         titleAnchor.innerText = title;                            // 제목 삽입
         
         // 3. 아이콘
         let viewCnt = movie.popularity      // popularity로 시청수 임의로 설정 
         let commentsCnt = movie.vote_count  // vote_count로 코멘트수 임의로 설정 
         
         viewCnt = Math.floor(viewCnt);      // 소수점 버림
         
         let viewSpan = emptyDOM.querySelector('#viewCnt');          // text를 넣어주기 위해서 임의로 생성한 span 선택자 잡기
         let commentsSpan = emptyDOM.querySelector('#commentsCnt');  // text를 넣어주기 위해서 임의로 생성한 span 선택자 잡기
         viewSpan.innerText = viewCnt;                               // text 삽입
         commentsSpan.innerText = commentsCnt;                       // text 삽입
         
         // 4. 장르
         let thisMovieGenreArr = movie.genre_ids;
         let genreUl = emptyDOM.querySelector('#genreUl');
         
         for (i = 0; i < thisMovieGenreArr.length; i++) {
            let genreId = thisMovieGenreArr[i];                             // 현재 영화의 장르아이디 배열중 i번째 id
            let storedGenreIdx = genreList.findIndex(j => j.id == genreId); // 저장된 장르정보리스트 배열에서 현재 장르id로 해당 장르오브젝트의 인덱스 가져오기
			//↑(genreList 배열에서 genreId 값을 검색해서 해당 genreId를 가지고있는 배열의 index값을 반환)
            let genreName = genreList[storedGenreIdx].name;                 // 가져온 인덱스로 저장된 장르정보리스트 배열에서 장르 이름 값 가져오기
            
            // li생성후 장르이름 추가
            let li = document.createElement('li');
            li.innerText = genreName;
            genreUl.append(li);
         }
         
         // 5. 상세페이지 이동 링크 생성
         let movieId = movie.id;
         posterDiv.setAttribute("onclick", "selectDetail('"+movieId+"')");
         titleAnchor.setAttribute("onclick", "selectDetail('"+movieId+"')");
         
         // 완성된 DOM jsp에 붙여주기
         movieListDiv.appendChild(emptyDOM);
      }
   });
}

// // 검색하는 장르 리스트에 맞는 영화만 골라주기
function editMovieList(movieList){
   
   // 검색하는 장르 리스트에 맞는 영화만 담을 배열 변수 생성
   let genreMovieList = [];
   
   for(let movie of movieList){
      let thisMovieGenreArr = movie.genre_ids;
      let findIndexResult = thisMovieGenreArr.findIndex(j => j == searchGenreId); // 찾는 장르아이디가 영화에 없으면 -1 리턴(인덱스가 없으니까)
	  //장르id 배열에서 searchGenreId를 검색해서 배열의 인덱스 값 반환

      if(findIndexResult > -1){
         genreMovieList.push(movie); // 해당 장르에 해당하는 영화만 새 리스트에 추가
      }
   }
   
   return genreMovieList;
}


// 포스터, 제목 클릭시 상세페이지로 이동
function selectDetail(movieId){
   location.href = "./movieDetail.do?movieId=" + movieId;
}


