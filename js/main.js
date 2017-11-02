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
    /*li超过一行出现展开按钮*/
    for(var i=0;i<$('.type1').length;i++){
        if($('.type1').eq(i).find('a').length<11){
            $('.type1').eq(i).find('button').addClass('buttonHidden')
        }
    }
    /*老师列表hover*/
    $('.teacher-list li').hover(function(){
        $(this).addClass('hoverLi');
        $(this).find('.btnLi').addClass('HoverBtn')
    }, function(){
        $(this).removeClass('hoverLi');
        $(this).find('.btnLi').removeClass('HoverBtn')
    });
    /*教学顾问点击*/
    $('.input').on('click',function () {
        if($(this).find('img').hasClass('showMoreChang')){
            $(this).find('img').removeClass('showMoreChang');
            $(this).find('.inputShow').addClass('hidden')
        }else{
            $(this).find('img').addClass('showMoreChang');
            $(this).find('.inputShow').removeClass('hidden')
        }
    });
    $('.input').on('mouseout',function(){
        $(this).find('img').removeClass('showMoreChang');
        $(this).find('.inputShow').addClass('hidden')
    });
    /*二维码*/
    $('.codeimg').hover(function(){
        $('.erweima').css('display','block');
    },function(){
        $('.erweima').css('display','none');
    });
    /*teacher导航*/
    $('.category').hover(function(){
        $('.th-img').addClass('showMoreChang');
        $('.category-show').fadeIn('fast')
    },function(){
        $('.category-show').fadeOut('fast');
        $('.th-img').removeClass('showMoreChang')
    })
});