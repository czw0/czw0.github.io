$('.an_content_right .nav a').eq(0).addClass('active');
$(".img_box .img").eq(0).show();
$(".an_content_right .nav a").click(function (){
	var index = $(this).index();
	$(".an_content_right .nav a").removeClass();
	$(".an_content_right .nav a").eq(index).addClass("active");
	$(".img_box .img").eq(index).show().siblings().hide();
})





