$(function(){
	$(".alternative a").click(function(){
		$(".name").show();
		$("body").css("overflow","hidden");
	})
	$(".name b").click(function(){
		$(".name").hide();
		$("body").css("overflow","");

	})

// 回到顶部
    $('.TOP').hide();        //隐藏go to top按钮
    $(window).scroll(function(){
    // console.log($(this).scrollTop());
    //当window的scrolltop距离大于1时，go to 
        if($(this).scrollTop() > 1000){
            $('.TOP').fadeIn();
        }else{
            $('.TOP').fadeOut();
        }
    });
    $('.TOP').click(function(){
        $('html ,body').animate({scrollTop: 0}, 500);
             return false;
    });

 	$(window).scroll(function(){
    	if($(this).scrollTop()>2900){
    		$(".items div").addClass("i-content");
        }else{
        	$(".items").html();
        }
        if($(this).scrollTop()>500){
            $("#conten").addClass("conten");
        }else{
            $("#conten").html();
        }
    })
})	


