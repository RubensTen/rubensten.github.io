$(function() {
    $.stellar();
    $(".fittext").fitText();
    if (!Modernizr.cssanimations) {} else {
        $(".story-container, .story-image-container, .dot-container, .hr-container, .footer-container ").children().addClass("hide");
    }
    $(".story-container, .story-image-container, .dot-container, .hr-container, .footer-container ").waypoint(function(b) {
        if (b == "down") {
            if ($(this).children().data("delay") !== undefined) {
                var a = $(this).children().data("delay");
            } else {
                var a = 0;
            }
            $(this).children().removeClass("hide").addClass("animated fadeInDown delay-" + a);
        } else {
            $(this).children().addClass("hide").removeClass("animated fadeInDown");
        }
    }, {
        offset: "55%"
    });
    $(".color-change").waypoint(function(b) {
        var c = {
            backgroundColor: $(this).data("colorup")
        };
        var a = {
            backgroundColor: $(this).data("colordown")
        };
        if (b == "down") {
            $("body").animate(a, 525);
        } else {
            $("body").animate(c, 525);
        }
    }, {
        offset: "70%"
    });
    $("#start").waypoint(function(a) {
        if (a == "down") {
            $("#story-icons, #sub-title").fadeTo("300ms", 0);
        } else {
            $("#story-icons, #sub-title").fadeTo("300ms", 1);
        }
    }, {
        offset: "55%"
    });
});