$(function () {
    var sitesAsString = "abc";
    console.log(sitesAsString);

    chrome.storage.sync.get("newList", function (list) {
        $("#excludeInput").val(list.newList);
        sitesAsString = list.newList;
    });

    // excludeInput is empty?

    var sites = getArrayOfSites("google, youtube");
    updatePageStyle(sites)

    $("#updateExcludeButton").click(function () {
        var list = $('#excludeInput').val();

        chrome.storage.sync.set({"newList": list}, function () {
            console.log(list);
        });

        $("#submitAlert").fadeIn().delay(2500).fadeOut();
    })
});

/*
 * convert a string of sites into array of sites and return
 */
function getArrayOfSites(sites) {
    console.log(sites);
    var array = sites.split(", ");
    for(var i = 0; i < array.length; i++) {
        var output = i + ": " + array[i];
        console.log(output);
    }
    return array;
}

/*
 * disable style/extension on the excluded sites
 */
function updatePageStyle(excludedSites) {
    var url = window.location.href;

    alert(url);

    for(var site in excludedSites) {
        if(url.contains(site)) {
            alert("match");
        }
        else {
            alert("not match");
        }
    }
}