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
	$("#rs9,#rs9p,#right").hover(function(){
		$(this).animate({"background-position-x":-16},888)
	},function(){
		$(this).animate({"background-position-x":0},888)
	});
	$(".smcan").hover(function(){
		$(this).css({"box-shadow":"5px 5px 21px darkgrey","height":"366px"});
	},function(){
		$(".smcan").css({"box-shadow":"none","height":"360px"});
	});
	 var i =document.cookie.split("=");
	var str1 = i[1];
	 $("#name").text(i[1]);
});
