$(function(){
    var $messages, $ads;
    $messages = $('.message--post');
    var $ads1 = $('.inContentAd')[0];
    var $ads2 = $('.inContentAd')[1];
    var $ads3 = $('.inContentAd')[2];
    $ads1 = $($ads1);
    $ads2 = $($ads2);
    $ads3 = $($ads3);
    if($messages.length < 4 ){
        $messages.last().after($ads1);
        $ads1.show();
    } else if($messages.length >= 4 && $messages.length < 6){
        $('.message--post:nth-child(2)').after($ads1);
        $ads1.show();
        $('.message--post:nth-child(4)').after($ads2);
        $ads2.show();
    }else if ($messages.length >= 6){
        $('.message--post:nth-child(2)').after($ads1);
        $ads1.show();
        $('.message--post:nth-child(4)').after($ads2);
        $ads2.show();
        $('.message--post:nth-child(6)').after($ads3);
        $ads3.show();
    }
});