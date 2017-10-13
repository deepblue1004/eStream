[Firebase Account]
email:uveve0831@gmail.com
password: website1234

domain name: 
www.uveve.ml
uveve.ml

ip:
220.133.42.63

ftp user name:
leeyenlong_webAss

ftp password:
88888888
after login to the ftp, our website is save in "public_html"

[INFORMATION]
email: info@uveve.ml
tel : +605-1234567/+605-2345678
hp: +6016-5154702
fax: +605-2345678
address: 8888, climate road 88, Malaysia
working hours:
mon-fri: 9:00am-5:00pm
sat: 9:00am-1:00pm

icon pack:
https://icons8.com/-icon/new-icons/color

google drive image from Alex:
https://drive.google.com/drive/folders/0B9a-yPPonBAuUlJxVU1xdjBNTUE?usp=sharing


[Header & Footer]
<!----------------- IMPORTANT ------------------>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Do you want to rent a hostel? 
	Uveve Management Hostel For Rent, 
	Uveve is One of the Reputable Hostel Management Company 
	That Trusted By Over Thoursands Of Tenants. 
	Visit Us Today To Know More.">
<meta name="keywords" content="Uveve, Uveve management, Uveve Hostel, 
	Uveve Student Hostel, Uveve Hostel For Rent, Room For Rent">
<meta name="author" content="Uveve">

<title> XXXX | Uveve management</title>

<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />

Please make sure there exits "img/favicon.png" !










[No need preloader! Please remove!]
<!--
	Start Preloader
	==================================== -->
<div id="loading-mask">
	<div class="loading-img">
		<img alt="Uveve Preloader" src="img/preloader.gif" />
	</div>
</div>
<!--
	End Preloader
	==================================== -->


Need to change the preloader code inside custom.js:
/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

window.onload = function () {
	if (document.getElementById('loading-mask'))
		document.getElementById('loading-mask').style.display = 'none';
}

[No need preloader! Please remove!]









Navigation: dont just copy&paste, please replace old nav with the new one.
[Navigation bar - HTML]
<!-- 
	Fixed Navigation
	==================================== -->
<header id="navigation" class="navbar navbar-inverse navbar-color">
	<div class="container">
		<div class="top-panel">
			<button class="mynavtog" onclick="javascript:Toggle()">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
			<a id="no-pad" href="#body"><img class="logo" src="img/logo.png" width="50px" height="50px" alt="uveve" /></a>
			<div class="body-nav">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About Us</a></li>
					<li><a href="blog.html">News & Updates</a></li>
					<li><a href="types">Type & Rates</a></li>
					<li><a href="contactUs.html">Contact Us</a></li>
					<li><a href="FAQ.html">FAQ</a></li>
					<li><a href="SignInPage.html">Tenants Login</a></li>
					<li id="btn-search"><i class="fa fa-search" aria-hidden="true"></i></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="nav-search">
		<gcse:search></gcse:search>
	</div>
	<div class="body-down">
		<ul>
			<li><a href="index.html">Home</a></li>
			<li><a href="about.html">About Us</a></li>
			<li><a href="blog.html">News & Updates</a></li>
			<li><a href="types">Type & Rates</a></li>
			<li><a href="contactUs.html">Contact Us</a></li>
			<li><a href="FAQ.html">FAQ</a></li>
			<li><a href="SignInPage.html">Tenants Login</a></li>
			<li>
				<gcse:search></gcse:search>
			</li>
		</ul>
	</div>
</header>
<!--
	End Fixed Navigation
	==================================== -->











[Navigation - CSS]
/*=================================================================
	Navigation
==================================================================*/

#navigation{
    background-color: rgba(20, 20, 20, 0.90);
    width: 100%;
	z-index: 99;
	position: fixed;
}

#nav-search {
	height: 50px;
}

#navigation textarea:focus, #navigation input:focus {
    color: #000000;
}

#navigation input, #navigation select, #navigation textarea{
    color: #000;
}

.gcsc-branding {
	display: none !important; 
}

.gs-promotion{
	display: none !important;
}


.top-panel{
    height: 50px;     
}

#no-pad {
    padding: 20px;
    vertical-align: top;
}

.logo {
    vertical-align: top;
}

.body-nav{
    float: right;
    font-weight: bold;
    margin-top: 3px;
}

.body-nav ul  {
    float: right;        
}

.body-nav ul li{
    display: none;
    padding: 10px;
    margin-right: 5px; 
    border-radius: 5px;
}

.body-down{
	display: none;
	position: fixed;
	right:10px;
	width: 250px;
}

.body-down ul li{
	height: 35px;
	padding: 5px;
    display: block;
    text-align: center;
	text-decoration: none; 
    background-color: rgba(35, 33, 33, 0.78);
}

.body-down ul li:nth-child(8) {
	height: 88px;
}

.body-nav ul li:hover {
	background-color: rgb(80, 80, 80);
    color: #FFAC01;   
}

.body-down ul li:hover:nth-last-child(n) {
	background-color: rgba(35, 33, 33, 0.78);
    color: #FFAC01; 
}

.mynavtog {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    border: 1px solid #333;
    border-radius: 4px;
}
.navbar-inverse .mynavtog .icon-bar {
    background-color: #fff;
}

.mynavtog .icon-bar+.icon-bar {
    margin-top: 4px;
}

.mynavtog .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
}

.nav-search {
	position: fixed;
	display: none;
	right: 10px;
	width: 300px;
}








[navigation - js]
function Toggle() {
	$(".body-down").toggle()
};

// Search Engine
(function () {
	var cx = '005905430136159387705:v3y8chmhpfg';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
	$("#btn-search").click(function () {
		$(".nav-search").toggle();
	});
})();











change this in custom.js before use this nav:
/* ========================================================================= */
/*	Post image slider
/* ========================================================================= */

jQuery.fn.exists = function () {
	return this.length > 0;
}

if ($("#features").exists()) {
	$("#features").owlCarousel({
		navigation: true,
		pagination: true,
		slideSpeed: 800,
		singleItem: true,
		transitionStyle: "fadeUp",
		paginationSpeed: 800,
		navigationText: ["<i class='fa fa-chevron-left fa-2x'></i>",
			"<i class='fa fa-chevron-right fa-2x'></i>"]
	});
}










<!-------------- Footer Section --------------------->

<!-- Start Footer Area
		========================================== -->
<footer id="footer">
	<div class="container">
		<div class="row wow fadeInUp" data-wow-duration="500ms">
			<div class="col-lg-12">

				<!-- Footer Social Links -->
				<div class="social-icon">
					<ul>
						<li><a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
						<li><a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
						<li><a href="https://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
						<li><a href="https://www.youtube.com"><i class="fa fa-youtube"></i></a></li>
						<li><a href="https://www.likedin.com"><i class="fa fa-linkedin"></i></a></li>
					</ul>
				</div>
				<!--/. End Footer Social Links -->

				<!-- copyright -->
				<div class="copyright text-center">
					<a href="index.html">
						<img src="img/logo.png" alt="Uveve" width="80px" height="80px"/> 
					</a>
					<br />

					<p>Design And Developed by <a href="http://www.uveve.ml"> Uveve Management</a>. Copyright &copy; 2017. All Rights Reserved.
					</p>
				</div>
				<!-- /copyright -->

				<div id="google_translate_element"></div>
			</div>
			<!-- end col lg 12 -->
		</div>
		<!-- end row -->
	</div>
	<!-- end container -->
</footer>
<!-- end footer -->












[footer - js]
/* ========================================================================= */
/*	Footer Sections
/* ========================================================================= */

//Translator
function googleTranslateElementInit() {
	new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
}

[Need Include the script from google]
<!-- Google Translate -->
	<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>











[footer - css]
/*=================================================================
	Footer section
==================================================================*/

#footer {
	background-color: #0A0A0A;
}

.social-icon {
    padding: 60px 0 35px;
}

.social-icon > ul {
    text-align: center;
}

.social-icon > ul > li {
    display: inline-block;
    margin-right: 20px;
}

.social-icon > ul > li > a {
	border-radius: 35px;
    background-color: #26292e;
    display: block;
    height: 70px;
    width: 70px;

	-webkit-transform: rotateY(180deg);
	   -moz-transform: rotateY(180deg);
		-ms-transform: rotateY(180deg);
		 -o-transform: rotateY(180deg);
			transform: rotateY(180deg);

	-webkit-transition: all 400ms ease-out 0s;
	   -moz-transition: all 400ms ease-out 0s;
		 -o-transition: all 400ms ease-out 0s;
			transition: all 400ms ease-out 0s;
}

.social-icon > ul > li > a > i {
    color: #55606a;
    display: inline-block;
    font-size: 32px;
    line-height: 70px;
    margin: 0;

    opacity: 0.3;
    filter: alpha(opacity=30);

	-webkit-transform: rotateY(180deg);
	   -moz-transform: rotateY(180deg);
		-ms-transform: rotateY(180deg);
		 -o-transform: rotateY(180deg);
			transform: rotateY(180deg);

	-webkit-transition: all 400ms ease-out 0s;
	   -moz-transition: all 400ms ease-out 0s;
		 -o-transition: all 400ms ease-out 0s;
			transition: all 400ms ease-out 0s;
}

.social-icon > ul > li:hover a {
    background-color: #FFAC01;
	
	-webkit-transform: rotateY(0deg);
	   -moz-transform: rotateY(0deg);
		-ms-transform: rotateY(0deg);
		 -o-transform: rotateY(0deg);
			transform: rotateY(0deg);
}

.social-icon > ul > li:hover a i {
    color: #fff;
    opacity: 1;
    filter: alpha(opacity=100);
	
	-webkit-transform: rotateY(0deg);
	   -moz-transform: rotateY(0deg);
		-ms-transform: rotateY(0deg);
		 -o-transform: rotateY(0deg);
			transform: rotateY(0deg);
}

.copyright {
    padding: 20px 0;
    color: #fff;
}

.copyright img {
    margin-bottom: 10px;
}

#scrollUp {
    border: 1px solid #4e595f;
    bottom: 15px;
    color: #fff;
    display: none;
    padding: 8px 12px;
    position: fixed;
    right: 20px;
    z-index: 600;
}

#scrollUp:hover {
    background-color: #FFAC01;
    border: 1px solid #FFAC01;
}

#google_translate_element {
	position: absolute;
	bottom: 30px;
}

Make sure all image link is exits!!!
















<!-------------- media-queries.css --- for mobile use ----------------->

change the content before "parallax section" to this (on the top):

/*============================================================
	For Small Desktop
==============================================================*/

@media (min-width: 980px){

    .body-nav ul li{
        display: inline-block;	
	}
    
    .body-down ul>li {
        display: none;
    }

	.mynavtog{
		display: none;
    }
    
	/* parallax section */
	......
	......
	......
