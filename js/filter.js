function onlygraphicdesign(){
  console.log('graphicdesign() called');
var x = document.getElementsByClassName('gallery-item');
    console.log('var x' + x);

var j;
for(j = 0; j < x.length; j++) {
  x[j].style.display = 'none';
};


var G = document.getElementsByClassName('graphic-design');
      console.log('var x' + G);

var i;
for (i = 0; i < G.length; i++) {
    G[i].style.display = 'block';
};


function onlyuiux(){
      console.log('UIUX()');

var x = document.getElementsByClassName('gallery-item');
      console.log('var x' + x);

var j;
for(j = 0; j < x.length; j++) {
  x[j].style.display = 'none';
};


var U = document.getElementsByClassName('ui-ux');
      console.log('var x' + U);

var i;
for (i = 0; i < U.length; i++) {
    U[i].style.display = 'block';
};
}

}



