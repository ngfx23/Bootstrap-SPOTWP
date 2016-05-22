$(function(){
	/* 点击latest-works 产生模态框 */
	$(".latest-modal-btn").click(function(){
		var imgSrc = $(this).find('img').attr('src'); // 得到点击图片的src
		var imgAlt = $(this).find('img').attr('alt'); // 得到点击图片的alt
		$(".modal-title").html("client"+imgAlt); // 模态框的标题
		$(".modal-body img").attr("src" , imgSrc); // 模态框的图片
		$(".latest-modal").modal({ // 点击模态框外部不关掉模态框
			backdrop : 'static'
		});
	});
})
