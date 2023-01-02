/**
 * 
 */
console.log('hhh')
//별점부분
const drawStar = (target) => {
	document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
}

//여기까지 별점


let reviewCnt = document.querySelector('.anime__details__review').childElementCount
console.log(reviewCnt)
for (let i = 2; i <= reviewCnt; i++) {
	document.querySelector('.anime__review__item:nth-child(' + i + ') .anime__review__item__pic').remove();
}


//무비코드가져오기
let hey = document.getElementById('hey').innerText
console.log(hey)


fetch('reviewSelectList.do')
	.then(result => result.json())
	.then(result => {
		console.log(result[0].movieCode)

	function isApple(element)  {
  if(element.movieCode === 'apple')  {
    return true;
  }
}

example.filter(function(e){
    return e.code === "1234" && e.addr === "부산시 동구 수영동";
})


const apples = result.filter(isApple);
	console.log(row)
	
	
	})