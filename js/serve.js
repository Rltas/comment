			$(function(){
                var imgs = $("#can li"),
                	len = imgs.length,
                	imgWidth = imgs.outerWidth(),
                	currentIndex = 1,
                	nextIndex = 2,
                	_first = imgs.first().clone(true),
                	_last = imgs.last().clone(true);
                $("#can ul").append(_first).prepend(_last);
                len+=2;
                $("#can ul").css("width",len*imgWidth);
                $("#can ul").css({top:0,left:-1*imgWidth});
                function move(){
                	var _left = -1*nextIndex*imgWidth
                	currentIndex = nextIndex;
				    nextIndex++;
					$("#can ul").stop().animate({left:_left},1000,function(){
						if(nextIndex >= len){
							currentIndex = 1;
							nextIndex = 2;
						    $("#can ul").css("left",-1 * imgWidth);
						}else if(currentIndex == 0){
							currentIndex = len-2;
							nextIndex = len -1;
							$("#can ul").css("left",-1*imgWidth * (len-2));
						}						
					});					
				}
             $("#last,#next").on("selectstart",function(){
					return false;
				});
				$("#last").click(function(){
					nextIndex = currentIndex - 1;
					$(this).css("background","#009B72");
					move();					
				});
				$("#next").click(function(){
					$(this).css("background","#009B72");
					move();
				});
				$("#jiantou").on("click",function(){
					var css = $("#can").css("display");
					if(css == "block"){
						$("#can").hide();
						$("#products .r span").css("display","none");
					}else if(css == "none"){
						$("#can").show();
						$("#products .r span").css("display","inline-block");
					}
				});
				$("#products .r").hover(function(){
					$(this).css("border-color","#009B72");					
				},function(){
					$(this).css("border-color","white");
				});
				$("#btn_global").on("click",function(){
					$("#global").slideToggle();
				});
				$("#side b").on("click",function(){
					var css = $(this).next().css("display");
					if(css == "block"){
						$(this).next().hide();
						$(this).text("+");
					}else if(css == "none"){
						$(this).next().show();
					$(this).text("-");
					}
				});
			   $("#side b").on("selectstart",function(){
			   	return false;
			   });
			   var winHeight = $(window).height();
			   $(window).on("scroll",function(){
			   	var _scrollTop = $(window).scrollTop();
			   	if(_scrollTop>=winHeight/3){
			   		$("#back_to,#bottom").css("display","block")
			   	}else{
			   		$("#back_to,#bottom").css("display","none")
			   	}
			   });
			   $("#back_top").on("click",function(){
			   	$("html,body").stop().animate({scrollTop:0},1000)
			   });
			    var i =document.cookie.split("=");
			   var str1 = i[1];
			   $("#name").text(i[1]);
			});