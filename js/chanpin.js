$("#nav_z li").eq(0).addClass('active')
$("#nav_z li").click(function (){
	var index = $(this).index();
	$("#nav_z li").removeClass()
	$("#nav_z li").eq(index).addClass('active');
	$('.a_top .aa').eq(index).show().siblings().hide()
})
//alert(250*5)
$(".box .big").hover(function(){
	if($(this).index()==0){
		$(this).stop().animate({
			height:'290px'
		},300).parents("ul").find("li").eq(1).stop().animate({
			height:'140px'
		},300).parents("ul").find("li").eq(2).stop().animate({
			height:'140px'
		},300)
	}else if($(this).index()==1){
		$(this).stop().animate({
			height:'290px'
		},400).parents("ul").find("li").eq(0).stop().animate({
			height:'140px'
		},300).parents("ul").find("li").eq(2).stop().animate({
			height:'140px'
		},300)
	}else if($(this).index()>=2){
		$(this).stop().animate({
			height:'290px'
		},300).parents("ul").find("li").eq($(this).index()-1).stop().animate({
			height:'140px'
		},300).parents("ul").find("li").eq($(this).index()-2).stop().animate({
			height:'140px'
		},300)
	}
},function(){
	if($(this).index()==0){
		$(this).stop().animate({
			height:'189px'
		},300).parents("ul").find("li").eq(1).stop().animate({
			height:'189px'
		},300).parents("ul").find("li").eq(2).stop().animate({
			height:'189px'
		},300)
	}else if($(this).index()==1){
		$(this).stop().animate({
			height:'189px'
		},300).parents("ul").find("li").eq(0).stop().animate({
			height:'189px'
		},300).parents("ul").find("li").eq(2).stop().animate({
			height:'189px'
		},300)
	}else if($(this).index()>=2){
		$(this).stop().animate({
			height:'189px'
		},300).parents("ul").find("li").eq($(this).index()-1).stop().animate({
			height:'189px'
		},300).parents("ul").find("li").eq($(this).index()-2).stop().animate({
			height:'189px'
		},300)
	}
})
$(window).bind('scroll',function(){
	if($(window).scrollTop() >= 200){
		$(".scroll").fadeIn("slow")
	}else{
		$(".scroll").fadeOut("slow")
	}
})
$(".scroll").click(function (){
    var speed=200;//滑动的速度
    $('body').animate({ scrollTop: 0 }, speed);
    return false;
 })
var olo=document.getElementsByClassName("szh-logo")[0];
		var olist=document.getElementsByClassName("szh-logo-list")[0];
		var oright=document.getElementsByClassName("szh-logo-right")[0];
		var oimg=olo.getElementsByTagName('img')[0];
		var ogreen = document.getElementsByClassName("green")[0];
		onscroll=function(){
			var scroll=document.body.scrollTop||document.documentElement.scrollTop;
			if(scroll>50){
				olist.style.transition="";
				ogreen.style.position="fixed";
				olo.style.position="fixed";
				olo.style.top=0;
				ogreen.style.top=54+'px';
				olo.style.zIndex=999;
				olo.style.height=54+"px";
				olist.style.lineHeight=54+"px";
				oimg.style.width=148+"px";
				oimg.style.height=35+"px";
				oimg.style.marginTop=10+"px";
				oright.style.marginTop=10+"px";
			}
			if(scroll<=50){
				olist.style.transition="all 1s ease";
				olo.style.position="";
				ogreen.style.position="";
				olo.style.height="";
				olist.style.lineHeight="";
				ogreen.style.top="";
				oimg.style.width="";
				oimg.style.height="";
				oimg.style.marginTop="";
				oright.style.marginTop="";
			}
		}
		
		//导航绿条
		var dhgreen = document.getElementsByClassName("szh-logo-list")[0];
		var dha = dhgreen.getElementsByTagName("a");
		var ogreen = document.getElementsByClassName("green")[0];
		var oshou = document.getElementsByClassName("shou")[0];
		dha[1].onmouseover = function(){
			ogreen.style.height="172px";
		}
		oshou.onclick = function(){
			ogreen.style.height="0px";
		}
