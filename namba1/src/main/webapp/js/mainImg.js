/**
 * 
 */

//window.onload = function() {


let popularOpen =
   "https://api.themoviedb.org/3/movie/popular?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR&page=1";

let imgUrl1 = "https://image.tmdb.org/t/p/";
let imgUrlSize1 = "";
fetch(popularOpen)
   .then((result) => result.json())
   .then(data => {
      console.log(data);
      //window.onload = function () {
      //맨앞에 왕대빵 큰 화면(이미지3개 적용)

      for (let i = 1; i < 4; i++) {
         imgUrlSize1 = "w1280";


         let headImg = document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child(' + i + ')');
         console.log(headImg);

         //이미지 적용
         headImg.setAttribute('data-setbg', imgUrl1 + imgUrlSize1 + data["results"][i - 1].backdrop_path);
         headImg.setAttribute('style', "background-image : url('" + imgUrl1 + imgUrlSize1 + data["results"][i - 1].backdrop_path + "');");


         //            let heroTitle = document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child(' + i + ')').children[1];
         //
         //            console.log(heroTitle)
         //
         //            console.log(data["results"][2].title)
         //            console.log(data["results"][2].overview)
         //            heroTitle.innerHTML = data["results"][i - 1].title;
         //
         //            let heroOverview = document.querySelector('div.hero__slider.owl-carousel div.hero__items.set-bg:nth-child(' + i + 1 + ') p');
         //            heroOverview.innerHTML = data["results"][i].overview;
         //            console.log(heroTitle);
         //            console.log(heroOverview);

         let label = document.querySelector('.hero__slider.owl-carousel)').children[0].children[0]
         console.log(label)

      }




   })

fetch('reviewSelectList.do')
   .then(result => result.json())
   .then(result => {



      for (let i = 0; i < 6; i++) {
         let movieid = parseInt(result[i].movieCode)

         let deth = 'https://api.themoviedb.org/3/movie/' + movieid + '?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'

         fetch(deth)
            .then(data => data.json())
            .then(data => {
               console.log(data.backdrop_path)

               let sideImg = //document.querySelector('#MixItUpF113CF:nth-child(3)').children[i];
               document.querySelector('.filter__gallery:nth-child(3)').children[i]
let sidetitle= document.querySelector('.filter__gallery:nth-child(3)').children[i].children[2]

               sideImg.setAttribute('data-setbg', imgUrl1 + imgUrlSize1 + data.backdrop_path);
               sideImg.setAttribute('style', "background-image : url('" + imgUrl1 + imgUrlSize1 + data.backdrop_path + "');");
sidetitle.innerText=data.title;
sidetitle.setAttribute('style','color: white')
   
   
   sideImg.addEventListener('click', function() {
         document.getElementById('movieCode').value = data.id

         document.movieInfo.submit();
         return data.id;})
               //console.log(row)
               //result.filter(function(e){
               // return e.movieCode === "1234" && e.addr === "부산시 동구 수영동";
               ///})
            })
      }
   })
//}