var dosnow = false;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46667109-1', 'memimi.me');
ga('send', 'pageview');


$(document).ready(function() {
    $('[href="https://github.com/mimiKitsune"]').on('click', function() {
        console.log("github clicked");
        ga('send', 'event', 'button', 'click', 'github');
    });

    $('#make-it-snow').click(function() {
        if (dosnow) {
            dosnow = false;
            $('.flake').remove();
        }
        else {
            dosnow= true;
        }
        snow();
        $('body').toggleClass('snowBackground');
        $('[class^="col-"]').toggleClass('snowBackground');
        $('#make-it-snow').parent().toggleClass('active');
        ga('send', 'event', 'snow', 'toggle', dosnow);
    })
})