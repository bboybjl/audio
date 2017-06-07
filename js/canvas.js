

    $(document).ready(function(){
        var a = 2;


        $("#canvasId").attr("width", $('.mask').width());
        $("#canvasId").attr("height", $('.mask').height());


        $("#canvasId").hide();
        $(".mask").hide();
        gzhide();
        $(".zige").click(function(){
            $(".zige_con").toggle();
            $(".bifa_con").hide();
        });
        $(".bifa").click(function(){

            $(".zige_con").hide();
            $(".bifa_con").toggle();
        });
        $(".zi_slide ul li img").click(function(){
            $(".bgimg").attr({'src':this.src,background:'#ccc'}).slideDown(700,function () {
                hw.clear();
            });
            console.log(this.src);
        });
        $(".gz_none").click(function(){
            gzhide();
        });

        $(".gz_huigong").click(function(){
            gzhide();
            $(".huigong").show();
        });
        $(".gz_huogongmizi").click(function(){
            gzhide();
            $(".huigong").show();
            $(".mizi").show();
            $(".xie").show();
        });
        $(".gz_jiugong").click(function(){
            gzhide();
            $(".jiugong").show();
        });
        $(".gz_miziyuan").click(function(){
            gzhide();
            $(".mizi").show();
            $(".xie").show();
            $(".yuan").show();
        });
        $(".gz_mizi").click(function(){
            gzhide();
            $(".mizi").show();
            $(".xie").show();
        });
        $(".gz_tianzi").click(function(){
            gzhide();
            $(".tianzi").show();
        });
        $(".mh_btn").click(function(){
            if($("#canvasId").is(":hidden")){
                $("#canvasId").show();
                $(".mask").show();
                gzhide();
                $(".jiugong").show();
            }else{
                $("#canvasId").hide();
                $(".mask").hide();
            }
        });

        function gzhide(){
            $(".gezi div").each(function(){
                $(this).hide();
            });
        }
        function Handwriting(id) {
            ;this.canvas = document.getElementById(id);
            this.ctx = this.canvas.getContext("2d")
            this.ctx.fillStyle = "rgba(255,0,0,0.25)";
            var _this = this;
            this.canvas.onmousedown = function (e) { _this.downEvent(e)};
            $("#canvasId").on('touchstart mousedown', function(e) {
                _this.downEvent(e);
            });
            $("#canvasId").on('touchmove mousemove', function(e) {
                _this.moveEvent(e);
                return false

            });
            $("#canvasId").on('touchend mouseout mouseup', function(e) {
                _this.upEvent(e);
            });
            //this.canvas.onmousemove = function (e) { _this.moveEvent(e)};
            //this.canvas.onmouseup = function (e) { _this.upEvent(e)};
            //this.canvas.onmouseout = function (e) { _this.upEvent(e)};
            this.moveFlag = false;
            this.upof = {};
            this.radius = 0;
            this.has = [];
            this.lineMax = 40;
            this.lineMin = 5;
            this.linePressure = 1;
            this.smoothness = 80;

        }

        Handwriting.prototype.clear = function () {
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        }

        Handwriting.prototype.colorblack = function () {
            this.ctx.fillStyle = "rgba(0,0,0,1)";
        }

        Handwriting.prototype.colorred = function () {
            this.ctx.fillStyle = "rgba(255,0,0,1)";
        }

        Handwriting.prototype.downEvent = function (e) {
            this.moveFlag = true;
            this.has = [];
            this.upof = this.getXY(e);



        };

        Handwriting.prototype.moveEvent = function (e) {

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            if (!this.moveFlag)
                return;

            var of = this.getXY(e);
            var up = this.upof;
            var ur = this.radius;
            this.has.unshift({time:new Date().getTime() ,dis:this.distance(up,of)});
            var dis = 0;
            var time = 0;
            for (var n = 0; n < this.has.length-1; n++) {
                dis += this.has[n].dis;
                time += this.has[n].time-this.has[n+1].time;
                if (dis>this.smoothness)
                    break;
            }
            var or = 15;
            this.radius = or;
            this.upof = of;
            if (this.has.length<=4)
                return;
            var len = Math.round(this.has[0].dis/2)+1;
            for (var i = 0; i < len; i++) {
                var x = up.x + (of.x-up.x)/len*i;
                var y = up.y + (of.y-up.y)/len*i;
                var r = ur + (or-ur)/len*i;



                this.ctx.beginPath();

                this.ctx.arc(x,y,r/a,0.2*Math.PI,Math.PI,true);
                this.ctx.fill();

            }


        }

        Handwriting.prototype.upEvent = function (e) {
            this.upof = this.getXY(e);
            this.ctx.beginPath();


            this.moveFlag = false;
        };

        Handwriting.prototype.getXY = function (e)
        {
            var xPos, yPos;
            var event = e.originalEvent;
            if (e.type.indexOf('touch') !== -1) { // event.constructor === TouchEvent
                xPos = event.touches[0].clientX -((document.body.offsetWidth || document.documentElement.offsetWidth) - this.canvas.offsetWidth)/2;
                yPos = event.touches[0].clientY - this.canvas.offsetTop  + (document.body.scrollTop || document.documentElement.scrollTop) - 10;
            }else{
                xPos = e.clientX - ((document.body.offsetWidth || document.documentElement.offsetWidth) - this.canvas.offsetWidth)/2;
                yPos = e.clientY - this.canvas.offsetTop  + (document.body.scrollTop || document.documentElement.scrollTop) - 10;
            }
            return {
                x: xPos,
                y: yPos
            };
        }

        Handwriting.prototype.distance = function (a,b)
        {
            var x = b.x-a.x , y = b.y-a.y;
            return Math.sqrt(x*x+y*y);
        }

        var hw = new Handwriting("canvasId");
        hw.lineMax = 50;
        hw.lineMin = 15;
        hw.linePressure = 2.5;
        hw.smoothness = 100;
        $(".red_btn").click(function(){
            hw.colorred();
        });
        $(".black_btn").click(function(){
            hw.colorblack();
        });

        $(".clear_btn").click(function(){
            hw.clear();
        });
        $(".big3_btn").click(function () {
            return a = 2
        });
        $(".big_btn").click(function () {
            return a = 1.5
        });
        $(".big2_btn").click(function () {
            return a = 1
        });


    });

