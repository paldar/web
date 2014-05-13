function refreshComments() {
	if(!writing){
		xmlhttp=new XMLHttpRequest();
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			document.getElementById("commentSection").innerHTML=xmlhttp.responseText;
			}
		  }
		xmlhttp.open("GET","http://cslamp.colby.edu/tetan/proj04/loadTables.php",true);
		xmlhttp.send();
	}
}
refreshComments();
window.setInterval(refreshComments, 10000);