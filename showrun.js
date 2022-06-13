

$(document).ready(function () {
    //alert($(document).height());

    var charactes = 0;
    $.fn.preload = function () {
        this.each(function () {
            $('<img/>')[0].src = this;
        });
        $(document).keypress(function (event) {
            switch (event.which) {
                case 105:
                case 100:
                case 113:
                    if (event.which == 105) {
                        charactes = event.which;
                    } else {
                        charactes += event.which;
                    }
                    $('.output').html(charactes);
                    if (charactes == 518) {
                        DoDoom();
						charactes = 0;
                    }
                    break;
            }
        });
        //DoDoom();
    }

    // Usage:

    $(['imp-front.png', 'imp-side-left.png', 'imp-side-right.png', 'revolver-fire.png', 'revolver.png']).preload();

    function DoDoom() {
        //alert($(".imp").position().left);
        var impHeight = $(".imp").height();
        var impwidth = $(".imp").width();
        var revolverHeight = $(".revolver img").height();
        var revolverwidth = $(".revolver img").width();
        $(".imp").css({ left: '-' + ((impwidth / 2) + 20) + 'px' });
        $(".imp img").css({ height: '50px' });
        $(".revolver").hide().css({ 'top': $(window).height() + 'px', 'left': (($(window).width()) - revolverwidth) / 2 + 'px' });
        //return;
        var impChange1 = ($(window).width() / 2) - $(".imp").position().left;
        //alert(impHeight);
        var impChange2 = impwidth;
        var impChange3 = impwidth / 2;
        $(".imp").animate({ left: "+=" + impChange1 + "px", top: "+=100px" }, 5000, function () {
            $(".imp img").attr('src', 'imp-side-left.png');
            $(".imp").animate({ left: "-=" + impChange2 + "px", top: "+=50px" }, 2000, function () {
                $(".imp img").attr('src', 'imp-side-right.png');
                $(".revolver").animate({ top: "-=" + revolverHeight + "px", height: "toggle" }, 1000, function () {
                    setTimeout(function () {
                        $(".revolver img").attr('src', 'revolver-fire.png');
                        $(".imp img").attr('src', 'imp-shot.png');
                    }, 500);
                    setTimeout(function () {
                        $(".revolver img").attr('src', 'revolver.png');
                    }, 700);
                    setTimeout(function () {
                        $(".imp img").attr('src', 'imp-front.png');
                    }, 800);

                    setTimeout(function () {
                        $(".revolver img").attr('src', 'revolver-fire.png');
                        $(".imp img").attr('src', 'imp-shot.png');
                    }, 1500);
                    setTimeout(function () {
                        $(".revolver img").attr('src', 'revolver.png');
                    }, 1700);
                    setTimeout(function () {
                        $(".imp img").attr('src', 'imp-front.png');
                    }, 1800);

                });
                $(".imp").animate({ left: "+=" + impChange3 + "px", top: "+=20px" }, 1000, function () {
                    $(".imp img").attr('src', 'imp-front.png');
                    $('.imp img').animate({ height: "+=250px" }, 500);
                });
                $('.imp img').animate({ height: "+=50px" }, 1000);
            });
            $('.imp img').animate({ height: "+=50px" }, 2000);
        });
        $(".imp img").animate({ height: "+=50px" }, 5000);
    }

});

