<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zxx">

<head>
<meta charset="UTF-8">
<title>movieDetails</title>
</head>

<body>
<% String movieCode = request.getParameter("movieCode");%>
	<div id="hey"><%=movieCode%></div>
	
	<!-- Page Preloder -->
	<div id="preloder">
		<div class="loader"></div>
	</div>


	<!-- Anime Section Begin -->
	<section class="anime-details spad">
		<div class="container">
			<div class="anime__details__content">
				<div class="row">
					<div class="col-lg-3">
						<div id = "posterDiv" class="anime__details__pic set-bg"
							data-setbg="img/anime/details-pic.jpg">
							<div class="comment">
								<i class="fa fa-comments"></i> 11
							</div>
							<div class="view">
								<i class="fa fa-eye"></i> 9141
							</div>
						</div>
					</div>
					<div class="col-lg-9">
						<div class="anime__details__text">
							<div class="anime__details__title">
								<h3>Fate Stay Night: Unlimited Blade</h3>
								<span>フェイト／ステイナイト, Feito／sutei naito</span>
							</div>
							<div class="anime__details__rating">
								<div class="rating">
									<a href="#"><i class="fa fa-star"></i></a> <a href="#"><i
										class="fa fa-star"></i></a> <a href="#"><i class="fa fa-star"></i></a>
									<a href="#"><i class="fa fa-star"></i></a> <a href="#"><i
										class="fa fa-star-half-o"></i></a>
								</div>
								<span>1.029 Votes</span>
							</div>
							<p>Every human inhabiting the world of Alcia is branded by a
								“Count” or a number written on their body. For Hina’s mother,
								her total drops to 0 and she’s pulled into the Abyss, never to
								be seen again. But her mother’s last words send Hina on a quest
								to find a legendary hero from the Waste War - the fabled Ace!</p>
							<div class="anime__details__widget">
								<div class="row">
									<div class="col-lg-6 col-md-6">
										<ul>
											<li><span>감독:</span> TV Series</li>
											<li><span>출연배우:</span> Lerche</li>
											<li><span>장르:</span> Action, Adventure, Fantasy, Magic</li>
										</ul>
									</div>
									<div class="col-lg-6 col-md-6">
										<ul>
											<li><span>개봉일:</span> Oct 02, 2019 to ?</li>
											<li><span>상영시간:</span> 정보없음 </li>
											<li><span>평점:</span> 7.31 / 1,515</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="anime__details__btn">
								<a href="#" class="follow-btn"><i class="fa fa-heart-o"></i>
									Follow</a> <a class="watch-btn"><span style="cursor:pointer">Watch Now</span>
									<i class="fa fa-angle-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-md-8">
					<div class="anime__details__form">
						<div class="section-title">
							<h5>Your Comment</h5>
						</div>
						<form name="reviewform" action="./reviewInsert.do" method="post">
							<input type="text" name="MovieCode" id="MovieCode" value="<%=movieCode%>"> 
							<input type="text" name="userEmail" id="userEmail" value="123@123"> 
							<input type="text" name="userNickname" id="userNickname" value="닉네임자리('위랑가틈 자동처리')"> 
							<input type="hidden" name="reviewDate" value="2022-12-16">&nbsp;
							<textarea placeholder="Your Comment" id="reivewContent"
								name="reivewContent">
							</textarea>
							<span class="star"> ★★★★★ <span>★★★★★</span> <input
								type="range" oninput="drawStar(this)" value="1" step="1" min="0"
								max="10" id="reviewScore" name="reviewScore">
							</span>

							<button id="reviewBtn" type="submit">
								<i class="fa fa-location-arrow"></i> Review
							</button>
						</form>
					</div>&nbsp;
					<div class="anime__details__review">
						<div class="section-title">
							<h5>Reviews</h5>
						</div>
						<div class="anime__review__item">
							<div class="anime__review__item__pic">
								<img src="img/anime/review-1.jpg" alt="">
							</div>
							<div class="anime__review__item__text">
								<h6>
									Chris Curry - <span>1 Hour ago</span>
								</h6>
								<p>whachikan Just noticed that someone categorized this as
									belonging to the genre "demons" LOL</p>
							</div>
						</div>
						<div class="anime__review__item">
							<div class="anime__review__item__pic">
								<img src="img/anime/review-2.jpg" alt="">
							</div>
							<div class="anime__review__item__text">
								<h6>
									Lewis Mann - <span>5 Hour ago</span>
								</h6>
								<p>Finally it came out ages ago</p>
							</div>
						</div>
						<div class="anime__review__item">
							<div class="anime__review__item__pic">
								<img src="img/anime/review-3.jpg" alt="">
							</div>
							<div class="anime__review__item__text">
								<h6>
									Louis Tyler - <span>20 Hour ago</span>
								</h6>
								<p>Where is the episode 15 ? Slow update! Tch</p>
							</div>
						</div>
						<div class="anime__review__item">
							<div class="anime__review__item__pic">
								<img src="img/anime/review-4.jpg" alt="">
							</div>
							<div class="anime__review__item__text">
								<h6>
									Chris Curry - <span>1 Hour ago</span>
								</h6>
								<p>whachikan Just noticed that someone categorized this as
									belonging to the genre "demons" LOL</p>
							</div>
						</div>
						<div class="anime__review__item">
							<div class="anime__review__item__pic">
								<img src="img/anime/review-5.jpg" alt="">
							</div>
							<div class="anime__review__item__text">
								<h6>
									Lewis Mann - <span>5 Hour ago</span>
								</h6>
								<p>Finally it came out ages ago</p>
							</div>
						</div>
						<div class="anime__review__item">
							<div class="anime__review__item__pic">
								<img src="img/anime/review-6.jpg" alt="">
							</div>
							<div class="anime__review__item__text">
								<h6>
									Louis Tyler - <span>20 Hour ago</span>
								</h6>
								<p>Where is the episode 15 ? Slow update! Tch</p>
							</div>
						</div>
					</div>
					
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="anime__details__sidebar">
						<div class="section-title">
							<h5>you might like...</h5>
						</div>
						<div class="product__sidebar__view__item set-bg"
							data-setbg="img/sidebar/tv-1.jpg">
							<div class="view">
								<i class="fa fa-eye"></i> 9141
							</div>
							<h5>
								<a href="#">Boruto: Naruto next generations</a>
							</h5>
						</div>
						<div class="product__sidebar__view__item set-bg"
							data-setbg="img/sidebar/tv-2.jpg">
							<div class="view">
								<i class="fa fa-eye"></i> 9141
							</div>
							<h5>
								<a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
							</h5>
						</div>
						<div class="product__sidebar__view__item set-bg"
							data-setbg="img/sidebar/tv-3.jpg">
							<div class="view">
								<i class="fa fa-eye"></i> 9141
							</div>
							<h5>
								<a href="#">Sword art online alicization war of underworld</a>
							</h5>
						</div>
						<div class="product__sidebar__view__item set-bg"
							data-setbg="img/sidebar/tv-4.jpg">
							<div class="view">
								<i class="fa fa-eye"></i> 9141
							</div>
							<h5>
								<a href="#">Fate/stay night: Heaven's Feel I. presage flower</a>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Anime Section End -->

	<!-- Search model Begin -->
	<div class="search-model">
		<div class="h-100 d-flex align-items-center justify-content-center">
			<div class="search-close-switch">
				<i class="icon_close"></i>
			</div>
			<form class="search-model-form">
				<input type="text" id="search-input" placeholder="Search here.....">
			</form>
		</div>
	</div>
	<!-- Search model end -->
<script type="text/javascript" src="js/movieDetail.js"></script>
<script type="text/javascript" src="./js/movieDetailReview.js"></script>
</body>

</html>