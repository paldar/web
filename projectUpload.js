/*document.getElementById('submitButton').onclick = function(event) {
    var url = "http://cslamp.colby.edu/tetan/proj04/loadComments.php?groupName=" + 
    		document.getElementById('commentBox').value + "&groupUrl=" + $('groupURL').value;
    new Ajax.Request(url, 
        {
            method: "GET",
            onSuccess: function() {location.reload(true)}
        });
};*/




function refreshComments() {
	var url = "http://cslamp.colby.edu/tetan/proj04/loadTables.php";
	new Ajax.Request(url, {
		method: "GET", onSuccess: function() {
			var responseText = ajax.responseXML;
			document.getElementById("commentSection").innerHTML = responseText;
		}	
	});
}

refreshComments();
window.setInterval(refreshComments, 5000);