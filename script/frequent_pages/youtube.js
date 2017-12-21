$(document).ready(function () {
    var url = $(location).attr("href");

    console.log(url);

    if(url.indexOf("youtube") >= 0) {
        console.log("ok");

        // $("* *").each(function () {
        //    this.style.setProperty("background-color", "transparent", "important");
        // });
    }
    else {
        console.log("not ok");
    }
});
