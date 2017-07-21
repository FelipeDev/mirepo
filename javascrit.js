var xmlhttp = new XMLHttpRequest();
var url = "https://itunes.apple.com/us/rss/topfreeapplications/limit=20/json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      getApps(myArr);
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

      //imprimeApp(img["label"],nombre["label"],descripcion["label"],precio);
      
    }
}
