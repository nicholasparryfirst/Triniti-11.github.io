function onlygraphicdesign(){
var x = document.getElementsByClassName('gallery-item');
var j;
for(j = 0; j < x.length; j++) {
  x[j].style.display = 'none';
};


var G = document.getElementsByClassName('graphic-design');
var i;
for (i = 0; i < G.length; i++) {
    G[i].style.display = 'block';
};


function onlyuiux(){
var x = document.getElementsByClassName('gallery-item');
var j;
for(j = 0; j < x.length; j++) {
  x[j].style.display = 'none';
};


var U = document.getElementsByClassName('ui-ux');
var i;
for (i = 0; i < U.length; i++) {
    U[i].style.display = 'block';
};
}

}



