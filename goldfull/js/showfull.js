function cleanShowFullBlock() {
    var showFullBlocks = document.getElementsByClassName("show-full-block");
    if (showFullBlocks.length > 0) {
        var showFullBlock = showFullBlocks[0];
        showFullBlock.parentNode.removeChild(showFullBlock);
    }
}

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        cleanShowFullBlock();
    }
};
