var xmlhttp = new XMLHttpRequest();
var url = "https://itunes.apple.com/us/rss/topfreeapplications/limit=20/json";
var globalArr;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      globalArr = myArr;
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getApps(myArr) {
    var out = "";
    var img;
    var i;
    var nombre;
    var descripcion;
    var precio;

    for(i = 0; i < myArr["feed"]["entry"].length; i++) {
        img = myArr["feed"]["entry"][i]["im:image"][0];
        nombre = myArr["feed"]["entry"][i]["im:name"];
        descripcion = myArr["feed"]["entry"][i]["summary"];
        precio = myArr["feed"]["entry"][i]["im:price"]["attributes"]["amount"];

      imprimeApp(img["label"],nombre["label"],descripcion["label"],precio);
      
    }
}

function imprimeApp(link,nombre,descripcion,precio) {
		document.body.innerHTML += "<div class=\"tabla\"><div class=\"fila\">"+
		"<div class=\"bloque\">"+
		"<img src=\""+ link +"\"/>"+
		"</div>"+
		"<div class=\"bloque\">"+
		
		"<p>"+ nombre +"</p>	"+
		
		"<p>"+ descripcion +"</p>	"+
		
		"<p>"+ precio +"</p>	"+
		
		"</div>"+
		"</div></div>";
}
