$(function(){
	$("#btn_global").on("click",function(){
		$("#global").slideToggle();
	});
	var winHeight = $(window).height();
	var _scrollTop = $(window).scrollTop();
	$(window).on("scroll",function(){
		var _scrollTop = $(window).scrollTop();
		if(_scrollTop >= winHeight/3){
			$("#back_to,#bottom").css("display","block");
		}else{
			$("#back_to,#bottom").css("display","none");
		}
	});
	$("#back_top").on("click",function(){
		$("html,body").stop().animate({scrollTop:0},1000);
	});
//	$("#rs9,#rs9p,#right").hover(function(){
//		$(this).animate({"background-position-x":-16},888)
//	},function(){
//		$(this).animate({"background-position-x":0},888)
//	});
//	$(".smcan").hover(function(){
//		$(this).css({"box-shadow":"5px 5px 21px darkgrey","height":"366px"});
//	},function(){
//		$(".smcan").css({"box-shadow":"none","height":"360px"});
//	});
	$("#buy,#cart").on("selectstart",function(){
		return false;
	});
	$("#cart").on("click",function(){
		$("#count").text($("#number").val());
	});
//		var btns=$("button");
//		for(var i=0;i<btns.length;i++){
//			btns[i].index=i;
//			btns[i].onclick=function(){
//			var divs=$("div",$("#content"));
//			for(var j=0;j<divs.length;j++){
//				btns[j].className="";
//				divs[j].style.display="none";
//				}
//			divs[this.index].style.display="block";
//			this.className="current";
//			}
//			}
			var btns =$("#bottom_tab ul li");
			for(var i = 0;i < btns.length;i++){
				btns[i].index = i;
				btns[i].onclick = function(){
					var divs = $("#content div");
					for(var j=0;j<divs.length;j++){
						btns[j].className = "";
						divs[j].style.display="none"
					}
					divs[this.index].style.display="block";
					this.className = "current";
				}
			}
			var imgs = $("#main #left li"),
				len = imgs.length,
				imgWidth = imgs.outerWidth(),
				currentIndex = 1,
				nextIndex = 2;
			var _first = imgs.first().clone(true),
					_last = imgs.last().clone(true);
				$("#ul1").append(_first).prepend(_last);
				len+=2;
				$("#ul1").css("width",len*imgWidth);
				$("#ul1").css({top:0,left:-1*imgWidth});
				function move(){		
					var _left = -1 * nextIndex * imgWidth;
					var circleIndex = nextIndex - 1;
					if(circleIndex<0)
						circleIndex = len - 3;
					else if(circleIndex >= len - 2)
						circleIndex = 0;
					$("#pages div").eq(circleIndex).addClass("current")
									.siblings().removeClass("current");								   
				    currentIndex = nextIndex;
				    nextIndex++;
					$("#ul1").animate({left:_left},1000,function(){
						isRunning = false;
						if(nextIndex >= len){
							currentIndex = 1;
							nextIndex = 2;
						    $("#ul1").css("left",-1 * imgWidth);
						}else if(currentIndex == 0){
							currentIndex = len-2;
							nextIndex = len -1;
							$("#ul1").css("left",-1*imgWidth * (len-2));
						}						
					});
				}
				$("#pages").delegate("div","click",function(){
					var _index = $(this).index();
					nextIndex = _index + 1;
					move();
				});
			  var i =document.cookie.split("=");
			   var str1 = i[1];
			   $("#name").text(i[1]);
});