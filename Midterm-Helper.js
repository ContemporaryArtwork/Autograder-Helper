function openSubmissionRange(startRow, endRow){
    var table = document.getElementById("grades");
    var rows = table.children[1]
    for (var i = endRow-1; i>=startRow-1; i--){
        var link = rows.children[i].children[1].children[2].href
        window.open(link, '_blank');
    }

}
