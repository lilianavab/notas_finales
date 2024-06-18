//Inicio Notas finales de HTML

var htmlNotaUno = prompt('Ingrese nota 1 HTML', '');
var htmlNotaDos = prompt('Ingrese nota 2 HTML', '');
var htmlNotaTres = prompt('Ingrese nota 3 HTML', '');

var idHtmlNotaUno = document.getElementById('htmlNotaUno');
var idHtmlNotaDos = document.getElementById('htmlNotaDos');
var idHtmlNotaTres = document.getElementById('htmlNotaTres');
var idPromedioHtmlNotas = document.getElementById('promedioHtmlNotas');
var numUno = parseFloat(htmlNotaUno);
var numDos = parseFloat(htmlNotaDos);
var numTres = parseFloat(htmlNotaTres);

    idHtmlNotaUno.innerHTML = htmlNotaUno;
    idHtmlNotaDos.innerHTML = htmlNotaDos;
    idHtmlNotaTres.innerHTML = htmlNotaTres;
    idPromedioHtmlNotas.innerHTML = ( ( ( numUno+numDos+numTres ) / 3 ).toFixed(2) );

//Cierre de Notas finales de HTML

//Inicio Notas Finales de CSS

var cssNotaUno = prompt('Ingrese nota 1 CSS', '');
var cssNotaDos = prompt('Ingrese nota 2 CSS', '');
var cssNotaTres = prompt('Ingrese nota 3 CSS', '');

var idCssNotaUno = document.getElementById('cssNotaUno');
var idCssNotaDos = document.getElementById('cssNotaDos');
var idCssNotaTres = document.getElementById('cssNotaTres');
var idPromedioCssNotas = document.getElementById('promedioCssNotas');
var numUno = parseFloat(cssNotaUno);
var numDos = parseFloat(cssNotaDos);
var numTres = parseFloat(cssNotaTres);

    idCssNotaUno.innerHTML = cssNotaUno;
    idCssNotaDos.innerHTML = cssNotaDos;
    idCssNotaTres.innerHTML = cssNotaTres;
    idPromedioCssNotas.innerHTML = ( ( ( numUno+numDos+numTres ) / 3 ).toFixed(2) );

//Cierre de Notas Finales de CSS

//Inicio Notas Finales JAVASCRIPT

var javascriptNotaUno = prompt('Ingrese nota 1 JAVASCRIPT', '');
var javascriptNotaDos = prompt('Ingrese nota 2 JAVASCRIPT', '');
var javascriptNotaTres = prompt('Ingrese nota 3 JAVASCRIPT', '');

var idJavascriptNotaUno = document.getElementById('javascriptNotaUno');
var idJavascriptNotaDos = document.getElementById('javascriptNotaDos');
var idJavascriptNotaTres = document.getElementById('javascriptNotaTres');
var idPromedioJavascriptNotas = document.getElementById('promedioJavascriptNotas');
var numUno = parseFloat(javascriptNotaUno);
var numDos = parseFloat(javascriptNotaDos);
var numTres = parseFloat(javascriptNotaTres);

    idJavascriptNotaUno.innerHTML = javascriptNotaUno;
    idJavascriptNotaDos.innerHTML = javascriptNotaDos;
    idJavascriptNotaTres.innerHTML = javascriptNotaTres;
    idPromedioJavascriptNotas.innerHTML = ( ( ( numUno+numDos+numTres ) / 3 ).toFixed(2) );

//Cierre de Notas Finales JAVASCRIPT

