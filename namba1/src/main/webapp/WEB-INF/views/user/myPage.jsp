<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="zxx">
<head>
<meta charset="UTF-8">
<title>MY PAGE</title>
</head>

<body>
	<!-- Page Preloder -->
	<div id="preloder">
		<div class="loader"></div>
	</div>

	<!-- Normal Breadcrumb Begin -->
	<section class="normal-breadcrumb set-bg" data-setbg="img/ticket.jpg">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="normal__breadcrumb__text">
						<h2>MY PAGE</h2>
						<p>${nickName}님 안녕하세요</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Normal Breadcrumb End -->

	<!-- Signup Section Begin -->
	<section class="signup spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login__form">
						<h3>PROFILE</h3>
						<div class="col-lg-6 col-md-6 col-sm-6">
							<div class="blog__item small__item set-bg"
								data-setbg="img/blog/man.png">
								<div class="blog__item__text"></div>
							</div>
						</div>
						<h5>
							NICK   NAME : ${nickName} + 프리미엄 회원인지 표시<br> 
							with NAMBA1 : ${joinDate}
						</h5>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login__social__links">
						<ul>
							<li><a href="./jjim.do" class=""> JJIM MOVIE</a></li>
							<li><a href="./accountManage.do" class=""> 계정관리</a></li>
							<li><a href="./emptypage.html" class=""> 고객센터</a></li>
							<li><a href="./emptypage.html" class=""> 이용약관</a></li>
							<li><a href="./emptypage.html" class=""> 개인정보 처리방침</a></li>
							<li><a href="./emptypage.html" class=""> 회원탈퇴</a></li>
						</ul>
					</div>
				</div>
				<!--      <div class="col-lg-12">
                    <div class="row d-flex justify-content-center">
                        <button type="submit" class="site-btn">Logout</button>
                    </div>
                </div>-->
			</div>
		</div>
	</section>
	<!-- Signup Section End -->

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

</body>

</html>