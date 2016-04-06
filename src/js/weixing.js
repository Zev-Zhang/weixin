var $ = require('./jquery.js');
require('./swiper/swiper-3.3.1.min.js');
var swiperAnimateCache = require('./swiper/swiper.animate1.0.2.min.js').swiperAnimateCache;
var swiperAnimate = require('./swiper/swiper.animate1.0.2.min.js').swiperAnimate;

var tpl = require('./tpl/index.string');

window.onload = function(){
	$('body').prepend(tpl);
  var mySwiper = new Swiper('.swiper-container', {
  	 onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			 swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			onSlideChangeEnd: function(swiper){ 
			  swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  } ,

    speed:300,
    grabCursor : true,
	  direction : 'vertical',
	  pagination:'.swiper-pagination'
   

})
 var song=document.getElementById("song");
 var audio1=document.getElementById("audio");
 var musicbg=document.getElementById("musicbg");
 var music=document.getElementById("music");
 song.onclick=function(){
 	if(audio1.paused){
		musicbg.style.cssText="background:url(img/music.png) no-repeat  left top; background-size: 100% 100%;"
		music.style.cssText="background:url(img/music.gif) no-repeat center center;";
	  song.style.webkitAnimationPlayState = "running";
	   song.style.AnimationPlayState = "running";
		audio1.play();
		return;
	}else{		
		musicbg.style.cssText="background:url(img/music2.png) no-repeat  left top; background-size: 100% 100%;"
		music.style.cssText="background:url()";
	  song.style.webkitAnimationPlayState = "paused";
	   song.style.AnimationPlayState = "paused";
	 audio1.pause();
	}
	
}
 

$.ajax({
	url: "/interface/getList.do",
	type: "get",
	success: function(data){

		var d = data.data;
		var str = "";
		$.each(d, function(index, item){
			str += '<div class="'+ item.class +'"><img src="' + item.src + '" class="ani img" swiper-animate-effect="' + item.effect + '" swiper-animate-duration="' + item.duration + '" swiper-animate-delay="' +item.delay +'"/></div>'
		});
		$('#swiper222').html(str);
	}
});

}
 