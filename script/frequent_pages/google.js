$(document).ready(function () {
    var url = $(location).attr("href");
    if(url.indexOf("https://www.google.com/search") >= 0) {
        var peopleAlsoAskLine = $("div._qhf.match-mod-horizontal-padding.nmiw.nmtbi.nmt.ixIGVjDqJk0Q-Dxg0p2iqJnc");
        var arrow = $(peopleAlsoAskLine).firstChild;

        if(peopleAlsoAskLine.attr("aria-expanded")) {
            arrow.style.cssText = "background-image: url(\"../../assets/images/replacements/google/arrow_down.png\");";
        }
        else {
            arrow.style.cssText = "background-image: url(\"../../assets/images/replacements/google/arrow_up.png\");";
        }
    }
});
