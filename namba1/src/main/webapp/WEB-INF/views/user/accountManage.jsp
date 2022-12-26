<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="zxx">
<head>
<meta charset="UTF-8">
<title>NEW MOVIE</title>
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
						<h2>계정 관리</h2>
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
				<div class="col-lg-12">
					<div class="row d-flex justify-content-center">
						<div class="signup__form">
							<h3>Sign Up</h3>
						 <form action="userJoin.do" onsubmit="return formCheck()">
								<div class="input__item">
									<input type="text" id="userEmail" name="userEmail" placeholder="Email address" required="required"> 
									<span class="icon_mail"></span>
									<button type="submit" class="site-btn" onclick="idChk()" id="btnId" value="No">Email address 중복체크</button>	
								</div>
								<div class="input__item">
									<input type="text" id="userNickname" name="userNickname" placeholder="Nick Name" required="required"> <span
										class="icon_profile"></span>
								</div>
								<div class="input__item">
									<input type="password" id="userPassword" name="userPassword" placeholder="Password" required="required"> <span
										class="icon_lock"></span>
								</div>
								<div class="input__item">
									<input type="password" id="passwordChk" placeholder="Check Password" required="required"> <span
										class="icon_lock"></span>
								</div>
								<button type="submit" class="site-btn">complete</button>
							</form>
						</div>
					</div>
				</div>
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