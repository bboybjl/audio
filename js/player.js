



$(function () {

    var audio = document.getElementById('music');
    bf();
    $('.audioPhoto').click(function () {
        $(this).toggleClass('audioplay');


        bf();
    });

    $('.share').animate({'top':0},5000);

    setTimeout(function () {
        $('.share').fadeOut(500)

    },8000)


    function bf(){

        if(audio!==null){
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.

            if(audio.paused)                     {
                audio.play();//audio.play();// 这个就是播放
            }else{
                audio.pause();// 这个就是暂停
            }
        }
    }
});


