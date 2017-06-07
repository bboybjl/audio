






    $('.audioPhoto').click(function () {
        $(this).toggleClass('audioplay');

        audioAutoPlay('music');

    });

    $('.share').animate({'top':0},5000);

    setTimeout(function () {
        $('.share').fadeOut(500)

    },8000);


    function audioAutoPlay(id){
        var audio = document.getElementById(id);
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay('music');


