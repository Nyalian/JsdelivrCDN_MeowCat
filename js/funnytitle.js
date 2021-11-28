var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon.ico");
        document.title = '！你在盯着别的女人看嘛...';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon.ico");
        document.title = '喵！不要看啦！' ;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});