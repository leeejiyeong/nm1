<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zxx">

<head>
<meta charset="UTF-8">
<title>categories</title>

</head>

<body>
   <!-- Page Preloder -->
   <div id="preloder">
      <div class="loader"></div>
   </div>

   

   <!-- Product Section Begin -->
   <section class="product-page spad">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="product__page__content">
                  <div class="product__page__title">
                     <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-6">
                           <div class="section-title">
                              <h4>CATEGORIES</h4>
                           </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                           <div class="product__page__filter">
                              <p>Select Genre:</p>
                              <select id="selectGenre">
                                 <option value="">선택</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row" id="movieList">
                        <!-- 샘플 포스터 DOM-->                  
<!--                      <div class="col-lg-3 col-md-6 col-sm-6"> -->
<!--                         <div class="product__item"> -->
<!--                            <div class="product__item__pic set-bg" -->
<!--                               data-setbg="img/popular/popular-1.jpg"> -->
                              
<!--                               <div class="comment"> -->
<!--                                  <i class="fa fa-comments"></i> 11 -->
<!--                               </div> -->
<!--                               <div class="view"> -->
<!--                                  <i class="fa fa-eye"></i> 9141 -->
<!--                               </div> -->
<!--                            </div> -->
<!--                            <div class="product__item__text"> -->
<!--                               <ul> -->
                                 
                                 
<!--                               </ul> -->
<!--                               <h5> -->
<!--                                  <a href="#">Sen to Chihiro no Kamikakushi</a> -->
<!--                               </h5> -->
<!--                            </div> -->
<!--                         </div> -->
<!--                      </div> -->

                  </div>
               </div>
               <div class="product__pagination">
                  <a href="./categories.do">1</a> 
                  <a href="#">2</a> 
                  <a href="#">3</a> 
                  <a href="#">4</a> 
                  <a href="#">5</a> 
                  <a href="#"><i class="fa fa-angle-double-right"></i></a>
               </div>
            </div>
            
         </div>
      </div>
   </section>
   <!-- Product Section End -->

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

<script type="text/javascript" src="js/categories.js"></script>

</body>
</html>