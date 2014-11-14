if (document.getElementsByClassName('cb-grid-lines').length){

    document.body.removeChild(document.getElementsByClassName('cb-grid-lines')[0]);
}

else {

    var html = "",
        numCols = 12,
        dataNumCols = document.getElementsByTagName("body")[0].getAttribute("data-bootstrap-num-cols");

    if(typeof dataNumCols === "string" && dataNumCols.length){
        numCols = parseInt(dataNumCols, 10);
    }

    html += '<div class="cb-grid-lines"> \
      <div class="container"> \
        <div class="row">';

    for (var i = 0; i < numCols; i += 1) {
        html += '<div class="span1 col-xs-1"></div>';
    }

    html += '</div> \
      </div> \
    </div>';

    document.body.innerHTML += html;

}