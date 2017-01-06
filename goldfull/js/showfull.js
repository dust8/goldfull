function cleanShowFull() {
    var showFullBlocks = document.getElementsByClassName("show-full-block");
    if (showFullBlocks.length > 0) {
        // remove .show-full-block div
        var showFullBlock = showFullBlocks[0];
        showFullBlock.parentNode.removeChild(showFullBlock);

        // remove .show-full div
        var showFulls = document.getElementsByClassName("show-full");
        var showFull = showFulls[0];
        showFull.parentNode.removeChild(showFull);
    }
}

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        cleanShowFull();
    }
};
