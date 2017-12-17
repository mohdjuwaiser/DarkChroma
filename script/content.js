$(function () {
    chrome.storage.sync.get('list', function (list) {
        $("#excludeInput").text(list.newList);
    });

    $("#updateExcludeButton").click(function () {
        chrome.storage.sync.get("newList", function(){
            var newValue = $('#updateExcludeButton').value;
            chrome.storage.sync.set({"newList": newValue}, function () {
                if(chrome.runtime.error) {
                    console.log("Runtime error");
                }
                else {
                    console.log("ok");
                }
            });
            $("#submitAlert").fadeIn().delay(3000).fadeOut();
        });
    })
});
