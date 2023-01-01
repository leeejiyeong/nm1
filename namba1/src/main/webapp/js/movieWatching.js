/**
 * movieWatching.js
 */
window.onload = function() {
	let url = new URL(window.location.href);
	let urlParam = url.searchParams;
	let movieId = urlParam.get('movieId');
	console.log(movieId)

	//영화 예고편 정보가 담긴 api
	let videourl = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR'
	fetch(videourl)
		.then(result => result.json())
		.then(data => {
			console.log(data)
			let movie = data.results;
			console.log(movie)

			let playerDiv = document.querySelector('div #player')

			if (movie.length > 0) {
				//예고편이 있을 경우 영상 출력
				let youtubeKey = movie[0].key
				let link = '<iframe width="100%" height="600" src="https://www.youtube.com/embed/' + youtubeKey + '?autoplay=1"></iframe>'
				playerDiv.innerHTML = link;
			} else {
				let msg = '<h3>해당 영화의 예고편이 존재하지 않습니다<h3>'
				playerDiv.innerHTML = msg;
			}

		})

	//영화 제목
	let movieInfoUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=b96ed5ac7fac8cd9c2670c50e891b392&language=ko-KR';
	fetch(movieInfoUrl)
		.then(result => result.json())
		.then(data => {
			let movie = data;
			//제목
			let title = movie.title;
			let titleTag = document.querySelector('div .anime__details__title > h3')
			titleTag.innerText = title;

			//소제목
			let engTitle = movie.original_title;
			let engTitleTag = document.querySelector('div .anime__details__title > span')
			engTitleTag.innerText = engTitle;
		})
}