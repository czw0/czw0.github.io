window.onload=function(){
	//返回顶部
		var oTop = document.getElementsByClassName("dingbu")[0];
		var toptimer = null;
		oTop.onclick = function(){

				var colltop = document.documentElement.scrollTop =document.body.scrollTop
				if(colltop>0){
					toptimer = setInterval(function(){
						document.documentElement.scrollTop = document.body.scrollTop-=40;
						if(document.documentElement.scrollTop = document.body.scrollTop==0){
							clearInterval(toptimer)
						}
					},30)
					
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

function getClass(className){      //className      
		if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
		}else{
			var All=document.getElementsByTagName('*')
			var arr=[];
			for(var i=0;i<All.length;i++){
				if(All[i].className==className){
					arr.push(All[i])
					}
				}
			return arr;
		}
	}
	var olo=getClass("szh-logo")[0];
	var olist=getClass("szh-logo-list")[0];
	var oright=getClass("szh-logo-right")[0];
	var oimg=olo.getElementsByTagName('img')[0];
	
	onscroll=function(){
		var scroll=document.body.scrollTop||document.documentElement.scrollTop;
		if(scroll>50){
			olist.style.transition="";
			olo.style.position="fixed";
			olo.style.top=0;
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
			olo.style.height="";
			olist.style.lineHeight="";
			oimg.style.width="";
			oimg.style.height="";
			oimg.style.marginTop="";
			oright.style.marginTop="";
		}
	}
	
}
	

	
	
	
