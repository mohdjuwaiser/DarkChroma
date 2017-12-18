$(function () {
    init();

    $("#onBtn").click(function () {
        if(!$("#on").is(":visible")) {
            $("#on").show();
            $("#off").hide();
        }

        chrome.storage.sync.set({"status": "on"});
    });

    $("#offBtn").click(function () {
        if(!$("#off").is(":visible")) {
            $("#off").show();
            $("#on").hide();
        }

        chrome.storage.sync.set({"status": "on"});
    });
});

function init() {
   chrome.storage.sync.get("status", function(app) {
       if(app.status === "on") {
           $("#on".attr("display", "block"));
           $("#off".attr("display", "none"));
       }
       else {
           $("#on".attr("display", "none"));
           $("#off".attr("display", "block"));
       }
   });
}
