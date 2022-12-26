<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <title>admin</title>

    <!--chart js-->
    <!-- 회원 수 차트(라인차트) -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages': ['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var aryData=[
                		['월', '전체 회원 수', '신규 회원 수']
            			];

            fetch('chartLine.do')
            .then(result => result.json())
            .then(data =>{
            	console.log(data);
            	for(let item of data){
            		aryData.push([item.userCnt])
            	}
            	console.log(aryData)
            var data = google.visualization.arrayToDataTable(aryData);
            var options = {
                curveType: 'function',
                legend: {
                    position: 'bottom'
                }
            };
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
            
            chart.draw(data, options);
            })
            .catch(err => console.log(err));

        }
    </script>
    
    <!-- 선호 장르 차트(도넛차트) -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var aryData = [
                		  ['선호장르', '퍼센트']
            			  ]);
            fetch('chartDonut.do')
            .then(result => result.json())
            .then(data => {
            	console.log(data);
            	for(let item of data){
            		aryData.push([item.movieGenre, item.movieCnt])
            	}
            	console.log(aryData)
            	
            var data = google.visualization.arrayToDataTable(aryData);
            var options = {
                title: '선호장르',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
            })
            .catch(err => console.log(err));
        }
    </script>
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Normal Breadcrumb Begin -->
    <section class="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="normal__breadcrumb__text">
                        <h2>ADMIN</h2>
                        <p>choose category</p>
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
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Line chart</h4>
                            <div id="curve_chart" style="width : auto; height : auto;"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login__social__links">
                            <h3>INFO</h3>
                            <ul>
                                <li><a href="./noticeList.do" class="">공지사항</a></li>
                                <li><a href="./userList.do" class="">회원관리</a></li>
                                <li><a href="./report.do" class="">신고관리</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Doughnut chart</h4>
                            <div id="donutchart" style="width: auto; height: auto;"></div>
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
            <div class="search-close-switch"><i class="icon_close"></i></div>
            <form class="search-model-form">
                <input type="text" id="search-input" placeholder="Search here.....">
            </form>
        </div>
    </div>
    <!-- Search model end -->

</body>

</html>