// inline modal video Start

var player;
var videoId = 'nh1aIMdDBp0';
var startSeconds = 4; // set your own video start time when loop play
var endSeconds = 26; // set your own video end time when loop play
var playerConfig = {
    height: '70vh',
    width: '100%',
    videoId: videoId,
    playerVars: {

        autoplay: 1, // Auto-play the video on load
        controls: 0, // Show pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        fs: 1, // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3, // Hide the Video Annotations
        start: startSeconds,
        end: endSeconds,
        autohide: 0, // Hide video controls when playing
    },
    events: {
        'onStateChange': onStateChange, // reference to Iframe API
        onReady: function(e) { // mute the video when loaded
            e.target.mute();
        }
    }
};
//excute the video in div
function onYouTubePlayerAPIReady() {

    player = new YT.Player('myvideo', playerConfig);

}
//repload the video when onStateChange=YT.PlayerState.ENDED)
function onStateChange(state) {
    if (state.data === YT.PlayerState.ENDED) {
        player.loadVideoById({
            videoId: videoId,
            startSeconds: startSeconds,
            endSeconds: endSeconds

        });
    }
}

// inline modal video End


$(document).ready(function() {

    var e = $(window).height();

    $(window).scroll(function() {
        var n = $(window).scrollTop(),
            o = e + n;
        $('.scrollable').each(function(e, n) {
            var i = $(n).offset().top - 120;
            o >= i ? $(n).addClass('slide_effect') : o <= i && $(n).removeClass('slide_effect');
        })

        $('.img-rl-container').each(function(e, n) {
            var pannelTop = $(n).offset().top;
            if (o >= pannelTop) {
                TweenMax.to('.img-rtl-1', 1.5, { opacity: 1, x: 0, delay: 0.5, ease: Back.easeOut.config(1.7) });
            } else {
                TweenMax.to('.img-rtl-1', 1.5, { opacity: 0, x: 560, delay: 1, ease: sine.in });
            }

        })

        $('.img-lr-container').each(function(e, n) {
            var pannelTop = $(n).offset().top;
            if (o >= pannelTop) {
                TweenMax.to('.img-ltr-1', 1.5, { opacity: 1, x: 0, delay: 0.5, ease: Back.easeOut.config(1.7) });
            } else {
                TweenMax.to('.img-ltr-1', 1.5, { opacity: 0, x: 560, delay: 1, ease: sine.in });
            }

        })
    })

    $('.launch-modal').click(function() {
        var trigger = $("body").find('[data-toggle="modal"]');
        trigger.click(function() {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-theVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').click(function() {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    });

});

(function($) {
    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            top = $t.offset().top,
            bottom = top + $t.height(),
            compareTop = partial === true ? bottom : top,
            compareBottom = partial === true ? top : bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };
})(jQuery);

// $(window).scroll(function(event) {
//     $(".img_opacity").each(function(i, el) {
//         var el = $(el);
//         if (el.visible(false)) {
//             el.css("opacity", "1");
//         } else {
//             el.css("opacity", "0");
//         }
//     });
// });

// Kirti code
function saveDetails() {
    var name = $('#name').val();
    var contact = $('#contact').val();
    var email = $('#email').val();
    var msg = $('#msg').val();
    if (name == '') {
        return $('#e-one').html('Please enter the name');
    } else if (contact == '') {
        return $('#e-two').html('Please enter the contact no.');
    } else if (email == '') {
        return $('#e-three').html('Please enter the Email');
    } else if (msg == '') {
        return $('#e-four').html('Please enter the Msg');
    }
}
// Kirti code end