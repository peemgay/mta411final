window.onload = pageLoad;

function pageLoad() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "shoeAdidas.json");
    xhr.onload = function() {
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);
        display(jsondata);
    };
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function display(layer){
    console.log(Object.keys(layer).length);
    var showdiv = document.getElementById("layer")
    var keys = Object.keys(layer);
    for(var i =0; i< keys.length;i++){
        var temp = document.createElement("div");
        var temp2 = document.createElement("img");
        var temp3 = document.createElement("p");
        temp3.innerHTML = layer[keys[i]].brandname + "<br>"+ "<br>" + layer[keys[i]].price + " ฿ "+ "<br>"+ "<br>" +layer[keys[i]].stock ;
        temp2.setAttribute("src", layer[keys[i]].pic)
        

        temp.appendChild(temp2);
        temp.appendChild(temp3);
        showdiv.appendChild(temp);
    }
}