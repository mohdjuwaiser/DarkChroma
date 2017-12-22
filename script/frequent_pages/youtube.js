$(document).ready(function () {
    var url = $(location).attr("href");
    if(url.indexOf("youtube") >= 0) {
        $("* *").css("cssText", "background-color: transparent");
    }

    replaceLogo();
});

function replaceLogo() {
    $("#logo-container > span").attr("src", "../../assets/images/replacements/youtube/youtube-logo.png");
}
