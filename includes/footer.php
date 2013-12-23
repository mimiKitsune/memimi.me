<script>
    $(document).ready(function() {
        url = window.location.pathname.split('/');
        if (url.length > 2) {
            for (part in url) {
                if (part != "") {
                    $('header a[href*="'+url[part]+'"]').parent().first().addClass("active");
                }
            }
        }
        else {
            $('header a[href="/"]').parent().addClass("active");
        }
    })
</script>
</body>
</html>