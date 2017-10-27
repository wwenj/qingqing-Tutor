$(function(){
/*index页*/
    /*导航栏input点击/失焦事件*/
    $('.inputon').on('click blur',function(){
        $('.search-out').fadeToggle('fast');
        if ($('.search').hasClass('searchClick')){
            $('.search').removeClass('searchClick')
        }else{
            $('.search').addClass('searchClick')
        }
    });
    /*点击展开*/
    $('.showMore').on('click',function(){
        if($(this).find('img').hasClass('showMoreChang')){
            $(this).find('img').removeClass('showMoreChang');
            $(this).parent().find('p').addClass('hidden');
        }else{
            $(this).find('img').addClass('showMoreChang');
            $(this).parent().find('p').removeClass('hidden');
        }
    });
    for(var i=0;i<$('.type1').length;i++){
        if($('.type1').eq(i).find('a').length<11){
            $('.type1').eq(i).find('button').addClass('buttonHidden')
            // console.log($('.type1').eq(i).find('button').html(""))
        }
    }
});