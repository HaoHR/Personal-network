$(function () {
	$(window).scroll(function(){
    	if($(this).scrollTop()>50){
    		$(".load").hide();
        }else{
        	$(".load").html();
        }
    })
})

