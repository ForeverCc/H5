/*	
	大美西域 
	create by ForeverCc
	date ： 2017	
*/
var musicIcon = $('#musicIcon');
var myAudio = $("#myAudio").get(0);
var myAudio1 = $("#myAudio1").get(0);
var timer1 = null;
var timer2 = null;
var timer3 = null;
var timer4 = null;
var timer5 = null; 
var number = 0; //记录图片加载的数量
//默认事件
document.addEventListener('touchstart',function(ev){
	ev.preventDefault();
},{ passive: false})

imgLoad();
//LOADING  预加载
function imgLoad(){
	var oImage = new Image();
	for( var i = 0; i<data.length; i++ ){
		var oImage = new Image();
		oImage.src = data[i];
		oImage.onload = function(){
			number++;
			//加载完成
			if( number === data.length ){
				$("#loading").animate({
					opacity: 0
				},1000, function(){
					music();
					$("#loading").remove();
				})
			};
		};
	}
}
//背景音乐的控制;
function music(){
	var onoff = false;//状态的切换
	musicIcon.css({ 
		animation: "musicRotate 3s infinite linear",
		webkitAnimation: "musicRotate 3s infinite linear"
	})
	musicIcon.on('touchstart',function(){
		if(onoff){
			myAudio1.play();
			musicIcon.css({ 
				backgroundImage: "url(images/music_on.png)",
				animation: "musicRotate 3s infinite linear",
				webkitAnimation: "musicRotate 3s infinite linear"
			})
		}else{
			myAudio1.pause();
			musicIcon.css({ 
				backgroundImage: "url(images/music_off.png)",
				animation: ""
			});
		};
		onoff = !onoff;
	})
}
//配置
//第三幅图 五个文字的原始位置		
var arrOrigin=[
	{
		top: "2.7rem",
		left: "5.25rem"
	},
	{
		top: "1.5rem",
		left: "6.5rem"
	},
	{
		top: ".2rem",
		left: "8rem"	
	},
	{
		top: "2rem",
		left: "9rem"	
	},
	{
		top: "3.5rem",
		left: "10.5rem"	
	}
]
//点击以后要移动到的位置
var arrNow = [
	{
		top: "2rem",
		left: "2rem"
	},
	{
		top: ".6rem",
		left: "5rem"				
	},
	{
		top: ".1rem",
		left: "8rem"
	},
	{
		top: ".6rem",
		left: "11rem"
	},
	{
		top: "2rem",
		left: "13.5rem"
	}
]
//要添加的动画
var arrAnimation=[
	"textAn1 1s infinite",
	"textAn2 1s infinite",
	"textAn3 1s infinite",
	"textAn4 1s infinite",
	"textAn5 1s infinite"
	]
//配置进出场动画
var configAn = [
	{//第1屏
		inFn: function(){
			myAudio1.play();
			//myAudio.pause();
			//声声慢  三个字   透明度 缩放  逐个进场
			timer1 = setTimeout(function(){
				$("#word1").css({
						transiton:"2s",
						transform:"scale(1)",
						webkitTransform:"scale(1)",
						opacity:1
				});
			}, 800);
			timer2 = setTimeout(function(){
				$("#word2").css({
					transiton:"2s",
					transform:"scale(1)",
					webkitTransform:"scale(1)",
					opacity:1
				});
			}, 1200);
			timer3 = setTimeout(function(){
				$("#word3").css({
					transiton:"2s",
					transform:"scale(1)",
					webkitTransform:"scale(1)",
					opacity:1
				});
				$("#bell").css({
					transiton: ".5s",
					opacity: 1
				});
			}, 1600);
			//人物的进场
			timer4 = setTimeout(function(){
				$("#person").css({
					
					left: "3.65rem",
					opacity: 1,
					transiton: "2s"
				})
			}, 2000);
			timer5 = setTimeout(function(){
				$("#s1-desc").css({
					opacity:1
				});
			}, 3600);
			
		},
		outFn: function(){
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
			clearTimeout(timer4);
			clearTimeout(timer5);
			$("#word1").css({
				transition: 0,
				transform: "scale(1.5)",
				opacity: 0
			});
			$("#word2").css({
				transition:0,
				transform:"scale(1.5)",
				opacity:0
			});
			$("#word3").css({
				transition: 0,
				transform: "scale(1.5)",
				opacity: 0
			});
			$("#bell").css({
				transition: 0,
				opacity: 0
			});
			$("#person").css({
					transition: 0,
					left: 0,
					opacity: 0
			});
			$("#s1-desc").css({
				transition: 0,
				opacity: 0
			});
		}
	},
	{//第2屏
		inFn: function(){
			//audio源的变化
			myAudio.src = "music/piying.mp3";
			/*
				点击戳我
			*/
			$("#s2-click").on("touchstart",function(){
				myAudio.pause();
				myAudio1.pause();
				myAudio.play();
				$(this).hide();//hide
				//遮罩层  光  皮影的出现
				$("#mask").animate({
					opacity:1
				}, 500, function(){
					$("#pp").animate({
						width: "2.5rem",
						height: "9.25rem",
						bottom: "3.75rem",
						left: "12rem"
					},function(){
						$("#light").animate({
							opacity: 1
						},function(){
							$("#pyLeft").animate({
							opacity: 1
							});
							$("#pyRight").animate({
								opacity: 1
							});
						})
					})
				})
			})	
	
		},
		outFn: function(){
			$("#s2-click").show();
			$("#pp").css({
				width: "1.5rem",
				height: "6rem",
				bottom: "1.9rem",
				left: "12.1rem"
			});
			$("#light").css("opacity", 0); //光的消失
			$("#pyLeft").css("opacity", 0); // 皮影的消失
			$("#pyRight").css("opacity", 0); // 皮影的消失
			$("#mask").css("opacity", 0); //遮罩消失
			$("#btn2").show(); //按钮显示
		}
	},
	{//3屏
		inFn: function(){
			myAudio1.play();
			myAudio.src="music/suona.mp3";
			$("#s3-click").on("touchstart",function(){
				myAudio.play();
				myAudio1.pause();
				$(this).hide();//按钮影藏
				
				//喇叭的运动
				$("#laba").css({
					webkitTransform: "scale(1.3)",
					transform: "scale(1.3)",
					webkitAnimation: "labaScale 1s infinite",
					animation: "labaScale 1s infinite"
				});
				
				//每一个文字
				$(".text").each(function(index,elem){
					$(elem).css({
						top: arrNow[index].top ,
						left: arrNow[index].left ,
						webkitAnimation: arrAnimation[index],
						animation: arrAnimation[index]
					})
				})
			})
		},
		outFn: function(){
			$(".text").each(function(index,elem){
				//回到原始的位置
				$(elem).css({
					top: arrOrigin[index].top,
					left: arrOrigin[index].left,
					webkitAnimation: "",
					animation: ""
				})
			});
			//喇叭的还原
			$("#laba").css({
				webkitTransform: "scale(1)",
				transform: "scale(1)",
				webkitAnimation: "",
				animation: ""
			});
			$("#s3-click").show();
		}
	},
	{//第4屏
		inFn: function(){
			myAudio1.play();
			myAudio.src = "music/fallwater.mp3";
			$("#s4-click").on("touchstart",function(){
					myAudio.play();
					myAudio1.pause();
					$(this).hide();
					//文字的运动
					$(".textL").animate({
						left: "3.3rem"
					},function(){
						$(".textL").css({
							webkitTransform: "rotate(-20deg)",
							transform: "rotate(-20deg)",
							webkitAnimation: "top1 2s infinite",
							animation: "top1 2s infinite"
						});
						$(".water1").animate({
							opacity:1
						},1000,function(){
							$(".water2").animate({
								opacity:1
							},function(){
								$(".water3").animate({
									opacity:1
								},1000,function(){
									$(".water3").css("webkitAnimation","fallwater .05s infinite")
									$(".water3").css("animation","fallwater .05s infinite")
									$(".water4").animate({
										opacity:1
									},1000,function(){
										$(".water4").css("webkitAnimation","fallwater .1s infinite")
										$(".water4").css("animation","fallwater .1s infinite")
										$(".water5").animate({
											opacity:1
										},1000,function(){
											$(".water5").css("webkitAnimation","fallwater .1s infinite")
											$(".water5").css("animation","fallwater .1s infinite")
										})
									})
								})
							})
						})
					});
				$(".textR").animate({
					left: "11.25rem"
				},function(){
					$(".textR").css({
						webkitTransform:"rotate(20deg)",
						transform:"rotate(20deg)",
						webkitAnimation: "top2 2s infinite",
						animation: "top2 2s infinite"
					})
				});
			})
	
		},
		outFn: function(){		
			$("#s4-click").show();
			$(".water").css({
				opacity: 0,
				webkitAnimation: "",
				animation: ""
			});
			$(".textL").css({
				left: "5.3rem",
				webkitAnimation: "",
				animation: "",
				transform: "",
				webkitTransform: ""
			});
			$(".textR").css({
				left: "9.25rem",
				webkitAnimation: "",
				animation: "",
				transform: "",
				webkitTransform: ""
			});
		}
	},
	{//第5屏
		inFn: function(){
			myAudio1.play();
			myAudio.src = "music/bg.mp3";
			//车轮
			$(".wheel").css({
				webkitAnimation: "rotateCar 1s infinite linear",
				animation: "rotateCar 1s infinite linear"
			});

			$(".mei").css({
				webkitTransform: "scale(1)",
				transform: "scale(1)",
				opacity:1
			});
			
			$("#car").animate({
				left: "3rem"
				},2000,function(){
					$(".wheel").css({
						webkitAnimation: "",
						animation: ""
					});
					$(".person").animate({
						left: "2.75rem",
						opacity:1
					},1000,function(){
						$("#s5-btn").animate({
							top: "20.4rem",
							opacity:1
						})
					});
					$(".s5-text").css({
						webkitTransform:"scale(1)",
						transform:"scale(1)",
						opacity:1
					})
				});
			myAudio.pause();
		
		},
		outFn: function(){
			//第五屏的还原
			$(".mei").css({
				transform: "scale(1.5)",
				webkitTransform:"scale(1.5)",
				opacity: 0
			});
			$("#car").css({
				left: "16rem"
			});
			$(".wheel").css({
				webkitAnimation: "",
				animation: ""
			});
			$(".person").css({
					left: "2rem",
					opacity:0
			});
			$("#s5-btn").css({
					top: "23rem",
					opacity:0
			});
			$(".s5-text").css({
				transform: "scale(1.5)",
				webKitTransform: "scale(1.5)",
				opacity:0
			});
		
		}
	}
]
//全屏切换  fullpage  配置	
$("#wrap").fullpage({
	verticalCentered: true,
	//continuousVertical: true,
	//滚动前  即将滚动到的页面  状态还原
	onLeave: function( index, nextIndex, dir){
		//myAudio1.start = 0;	
		configAn[0].outFn();
	
	
		configAn[1].outFn();
	
	
		configAn[2].outFn();
	

		configAn[3].outFn();

	
		configAn[4].outFn();
	
	},
	afterLoad:function(anchorLink,index){
		if( index === 1 ){
			
			configAn[0].inFn();

		}else if( index === 2 ){
			
			configAn[1].inFn();
			
		}else if(index === 3 ){
			
			configAn[2].inFn();
		
		}else if(index === 4 ){
			configAn[3].inFn();
		
		}else if(index === 5 ){
			
			configAn[4].inFn();
			
		};
	}
})


