// JavaScript Document
	window.onload=function(){
		
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
		
		
		//总选项卡
		var aUl = document.getElementById("all");
		var aLi = aUl.getElementsByTagName("li");
		//alert(aLi.length);
		var oDiv = document.getElementsByClassName("one");
		//alert(oDiv.length);
		aLi[0].id = 'active';
		for(var i=0;i<aLi.length;i++){
			aLi[i].index = i;
			aLi[i].onclick = function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].id = '';
					oDiv[i].style.display = 'none';
				}
				oDiv[this.index].style.display = 'block';				
				this.id = 'active'; 
			};
	    }
		
		
		
		//one选项卡
		var oneUl = document.getElementById("allone");
		//alert(oneUl.nodeName)
		var oneLi = oneUl.getElementsByTagName("li");
		//alert(oneLi.length);
		var oneDiv = document.getElementsByClassName("one-top-main");
		//alert(oneDiv.length);
		oneLi[0].id = 'one-active';
		for(var i=0;i<oneLi.length;i++){
			oneLi[i].index = i;
			oneLi[i].onclick = function(){
				
				for(var i=0;i<oneLi.length;i++){
					oneLi[i].id = '';
					oneDiv[i].style.display = 'none';
				}
				oneDiv[this.index].style.display = 'block';
				
				this.id = 'one-active'; 
				  
			};
	    }
		
		
		//增值选项卡开始
		var twoUl = document.getElementById("alltwo");
		var twoLi = twoUl.getElementsByTagName("li");
		var twoDiv = document.getElementsByClassName("two-Top-main");
		twoLi[0].id = 'two-active';
		for(var i=0;i<twoLi.length;i++){
			twoLi[i].index = i;
			twoLi[i].onclick = function(){
				for(var i=0;i<twoLi.length;i++){
					twoLi[i].id = '';
					twoDiv[i].style.display = 'none';
				}
				twoDiv[this.index].style.display = 'block';
				this.id = 'two-active'; 
			};
	    }
		
		
		//图片显示隐藏
		var opic = document.getElementById("pic");
		var opicLi = opic.getElementsByTagName("li");
		for(var i = 0; i < opicLi.length;i++){
			opicLi[i].onmouseover = function(){
				var oimg = this.getElementsByTagName("img");
				var oimgp = this.getElementsByTagName("p")[0];
				oimg[0].style.display = 'none';
				oimg[1].style.display = 'block';
				oimgp.style.color="#ffffff";
				oimgp.style.fontSize="16px";
			}
			
			opicLi[i].onmouseout = function(){
				var oimg = this.getElementsByTagName("img");
				var oimgp = this.getElementsByTagName("p")[0];
				oimg[0].style.display = 'block';
				oimg[1].style.display = 'none';
				oimgp.style.color="";
				oimgp.style.fontSize="";
			}
		}
		//左右箭头消失
		var jian = document.getElementsByClassName("szh-banner")[0];
		var _left = jian.getElementsByClassName("prev")[0];
		var _right = jian.getElementsByClassName("next")[0];
		jian.onmouseover = function(){
			_left.style.display = 'block';
			_right.style.display = 'block';
		}
		jian.onmouseout = function(){
			_left.style.display = 'none';
			_right.style.display = 'none';
		}

		
		//小图片旋转
		var opig_pic = document.getElementsByClassName("pig-left-pic");
		for(var p = 0;p< opig_pic.length;p++){
			opig_pic[p].onmouseover = function(){
				this.style.transform ="rotate(360deg)";
				this.style.webkitTransform ="rotate(360deg)";
				this.style.transition ="all 2s"
			}
			
			opig_pic[p].onmouseout = function(){
				this.style.transform ="rotate(0deg)";
				this.style.webkitTransform ="rotate(0deg)";
				this.style.transition ="all 2s"
			}
			
		}
		
		
		//pig选项卡
		var _pigall = document.getElementById("pigall");
		var _pigLi = _pigall.getElementsByTagName("li");
		var _pigDiv = document.getElementsByClassName("pig-main");
		var _pigtwo = document.getElementById("alltwo");
		 _pigLi[0].children[0].id="pigactive";
		for(var a = 0; a < _pigLi.length;a++){
			_pigLi[a].index = a;
			_pigLi[a].onclick = function(){
			 _pigLi[0].children[0].id="";
				for(var a=0;a<_pigLi.length;a++){ 
					_pigDiv[a].style.display = 'none';
					_pigLi[a].children[0].style.color="";
				}
				_pigDiv[this.index].style.display = 'block';
				this.children[0].style.color="#49b44f";
				  
			};
		}
	
	
	
		//小banner轮播开始
		var obox = document.getElementById("box");
		var _boxli = obox.getElementsByTagName("li");
		var time = "";
		var aindex=0;
		var oOl = document.getElementsByClassName('dian')[0];
		var odianLi = oOl.getElementsByTagName("li");
		for(var i = 0; i< odianLi.length;i++){
			odianLi[i].index = i;
			odianLi[i].onclick = function(){
				aindex = this.index;
				for(var j = 0;j < odianLi.length;j++){
					odianLi[j].id="";
				}
				this.id = 'dianhover';
				obox.style.left = -1000*this.index +'px';
			}
			
		}
		clearInterval(time);
		time = setInterval(function(){
			aindex++;
			if(aindex > 2){
				aindex = 0;
			}
			for (var s = 0; s < odianLi.length; s++) {
				odianLi[s].id="";
			};
			odianLi[aindex].id="dianhover";
			obox.style.left = -1000*aindex +'px';
			
		},3000)
	
	
	//小图标旋转
	var picRoate = document.getElementsByClassName("ganyan-pic");
	for(var i = 0; i< picRoate.length;i++){
		picRoate[i].onmouseover = function(){
			var _orimg = this.getElementsByTagName("img")[0];
				_orimg.style.transform ="rotate(360deg)";
				_orimg.style.webkitTransform ="rotate(360deg)";
				_orimg.style.transition ="all 1s" 
		}
		picRoate[i].onmouseout = function(){
			var _orimg = this.getElementsByTagName("img")[0];
				_orimg.style.transform ="rotate(0deg)";
				_orimg.style.webkitTransform ="rotate(0deg)";
				_orimg.style.transition ="all 1s" 
		}
	}
	
	
	//二维码显示隐藏
	var _tong = document.getElementById('tong');
	var _tongLi = _tong.getElementsByTagName("li");
	for(var i = 0; i < _tongLi.length;i++){
		_tongLi[i].onmouseover = function(){
			var _tongspan = this.getElementsByTagName("span")[0];
			_tongspan.style.height="100px";
		}
		
		_tongLi[i].onmouseout = function(){
			var _tongspan = this.getElementsByTagName("span")[0];
			_tongspan.style.height="0px";
		}
		
	}
	
	
	//产品优势效果开始
	function canshu(qa,u,h){
	var Od = document.getElementsByClassName("two-Top-main")[qa];
	var Odli = Od.getElementsByTagName("li");
	var oddiv = document.getElementsByClassName('two-T-l-pic-word');
		
			for(var i = 0; i < Odli.length; i++){
				Odli[u].onmouseover = function(){
					var Odliword = 	this.getElementsByClassName('two-T-l-pic-word')[0];
					var odimg = this.getElementsByClassName("two-T-l-pic")[0];
					var Odliwordp = Odliword.getElementsByTagName("p");
					
					this.style.width="800px";
					this.style.background="#49b44f";
						for(var j = 0 ; j< Odliwordp.length;j++){
							Odliwordp[j].style.color="#ffffff";	
						}
					
					oddiv[h].style.display="none";
					Odli[h].style.width="100px";
				}
			
				Odli[u].onmouseout = function(){
					var Odliword = 	this.getElementsByClassName('two-T-l-pic-word')[0];
					var Odliwordp = Odliword.getElementsByTagName("p");
					this.style.width="";
					this.style.background="";
						for(var j = 0 ; j< Odliwordp.length;j++){
							Odliwordp[j].style.color="";
							
						}
					Odli[h].style.width="";	

						oddiv[h].style.display="block";
				
				}
			}
	}
	
	canshu(0,0,1)
	canshu(0,1,0)
	canshu(0,2,3)
	canshu(0,3,2)
	canshu(0,4,5)
	canshu(0,5,4)
	
	canshu(1,0,1)
	canshu(1,1,0)
	canshu(1,2,3)
	canshu(1,3,2)
	canshu(1,4,5)
	canshu(1,5,4)
	//其他产片效果开始
	function qaz(obj){
	var _othone =document.getElementById(obj);
	var _othli =_othone.getElementsByTagName("li");
	function othxiaoguo(a,b,c){                                //0=a, 1=b, 2=c
		_othli[a].onmouseover = function(){
			this.style.height="290px";
			var Othwarp = this.getElementsByClassName("othwarp")[0];
			var othwdiv = this.getElementsByClassName("oth-left-top")[0];
			var othimg = othwdiv.getElementsByTagName("img");
			othimg[0].style.display="none";
			othimg[1].style.display="block";
			Othwarp.style.height="230px";
			Othwarp.style.border="1px solid #49b44f";
			Othwarp.style.background="#fff";
			var _othinfo = this.getElementsByClassName("othinfo")[0];
			_othinfo.style.display="block";
			_othli[b].style.height="140px";
			_othli[c].style.height="140px";
		}
		
		_othli[a].onmouseout = function(){
			this.style.height="";
			var Othwarp = this.getElementsByClassName("othwarp")[0];
			var othwdiv = this.getElementsByClassName("oth-left-top")[0];
			var othimg = othwdiv.getElementsByTagName("img");
			othimg[0].style.display="block";
			othimg[1].style.display="none";
			Othwarp.style.height="";
			Othwarp.style.border="";
			Othwarp.style.background="";
			var _othinfo = this.getElementsByClassName("othinfo")[0];
			_othinfo.style.display="";
			_othli[b].style.height="";
			_othli[c].style.height="";
		}
	}
	othxiaoguo(0,1,2)
	othxiaoguo(1,0,2)
	othxiaoguo(2,1,0)
	othxiaoguo(3,2,1)
	}
	
	qaz('oth-one')	
	qaz('oth-two')	
	qaz('oth-three')	
	qaz('qita-one')	
	qaz('qita-two')	
	qaz('qita-three')
	qaz('gn-one')
	qaz('gn-two')
	qaz('gn-three')
	qaz('zz-one')
	qaz('zz-two')
	qaz('zz-three')
	//其他
	
	
	
	
	//
	var xiao = document.getElementsByClassName("szh-new-list")[0];
	setInterval(function(){
	   xiao.appendChild(xiao.firstElementChild)  //两步：先删除，再追加
    },2000)
	
	}
	
	
	
	
	

	
	