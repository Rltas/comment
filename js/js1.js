			$(function(){
				var imgs = $("#can li"),
					len = imgs.length,
					imgWidth = imgs.outerWidth(),
					currentIndex = 1,
					nextIndex = 2,
					timer = null,
					isRunning = false;
				var _first = imgs.first().clone(true),
					_last = imgs.last().clone(true);
				$("#can ul").append(_first).prepend(_last);
				len+=2;
				$("#can ul").css("width",len*imgWidth);
				$("#can ul").css({top:0,left:-1*imgWidth});
				var html = "";
				for(var i = 0;i<len-2;i++){
					html+="<div></div>";
				}
				$(html).appendTo("#pages").first().addClass("current");
				function move(){
					if(isRunning)
						return;			
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
					$("#can ul").stop().animate({left:_left},2000,function(){
						isRunning = false;
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
				$("#pages").delegate("div","click",function(){
					var _index = $(this).index();
					nextIndex = _index + 1;
					move();
					isRunning = true;
				})
				$("#last,#next").on("selectstart",function(){
					return false;
				});
				$("#last").click(function(){
					nextIndex = currentIndex - 1;
					move();
					isRunning = true;
				});
				$("#next").click(function(){
					move();
					isRunning = true;
				});
				$("#can").hover(function(){
					clearInterval(timer);
					$("#last").css("display","block");
					$("#next").css("display","block");
				},function(){
					timer = setInterval(move,4000);
					$("#last").css("display","none");
					$("#next").css("display","none");
				}).trigger("mouseleave");
				
			});