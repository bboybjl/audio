



setTimeout(audioAutoPlay('music'),5000);

    $('.audioPhoto').click(function () {
        $(this).toggleClass('audioplay');

        
        bf()
    });

    $('.share').animate({'top':0},5000);

    setTimeout(function () {
        $('.share').fadeOut(500)

    },8000);
    function bf(){
        var audio = document.getElementById('music');
        if(audio!==null){
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.

            if(audio.paused)                     {
                audio.play();//audio.play();// 这个就是播放
            }else{
                audio.pause();// 这个就是暂停
            }
        }
    }

    function audioAutoPlay(id){
        var audio = document.getElementById(id);
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    


