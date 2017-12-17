$("#onBtn").click(function () {
    if(!$("#on").is(":visible")) {
        $("#on").show();
        $("#off").hide();
    }
});

$("#offBtn").click(function () {
    if(!$("#off").is(":visible")) {
        $("#off").show();
        $("#on").hide();
    }
});