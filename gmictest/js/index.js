var wrap = $('.wrap');
var video = $('.video')[0];
var loading = $('.loading');
var btn = $('.video_btn');//视频按钮
var video_wrap = $('.video_wrap');//播放视频的蒙层
var close = $('.video_wrap .video_close');//关闭按钮
btn.bind('click',function(){
	loading.show();//loading显示
	var e = this.getAttribute('data-video');
	e && (
		video_wrap.addClass('videoinandroid'),
		video.src = e,
		video.play()//视频播放
	),setTimeout(function(){
		loading.hide();//loading隐藏
	},5e3)
})

close.bind('click',function(){
	loading.hide();
	video.pause(),//视频暂停
	video_wrap.removeClass('videoinandroid');
})

//分享
var share = $('.share');
var wapShareWrap = $('.wapShareWrap');
init();

function init() {
	share.click(function() {
		wapShareWrap.css('display', 'block');
	})
	wapShareWrap.click(function() {
		wapShareWrap.css('display', 'none');
	})
}

if (window.screen.width >= 768) {
	share.css('display','none');
	wrap.css('width','640px');
} else{
	share.css('display','block');
	wrap.css('width','100%');
}