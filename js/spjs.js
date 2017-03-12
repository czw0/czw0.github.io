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
var odao=getClass("czw-daoh")[0];
var odaoli=odao.getElementsByTagName("li");
var ovideo=getClass("czw-video");
var odetail=getClass("czw-detail")[0];
var ovv=getClass("czw-vv")[0];
var ovvi=getClass("czw-vvid")[0];
var oaaa=ovvi.getElementsByTagName("a")[0];
var odeaa=odetail.getElementsByTagName("a");
for (var i=0;i<odaoli.length;i++) {
	odaoli[i].index=i;
	odaoli[i].onclick=function(){
		for (var i=0;i<odaoli.length;i++) {
			odaoli[i].className="";
			ovideo[i].style.display="none";
		}
		this.className="czw-onc";
		ovideo[this.index].style.display="block";
	}
}
for(var m=0;m<odeaa.length;m++){
	odeaa[m].onclick=function(){
		ovv.style.display="block";
		ovvi.style.display="block";
	}
}
oaaa.onclick=function(){
	ovv.style.display="none";
	ovvi.style.display="none";
}
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
