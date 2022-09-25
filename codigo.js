function convertir () {
    var valore = parseInt(document.getElementById ("valor").value);
    var resultado = 0 ;
    var dolar = 40 ;
    var euro = 38 ;
    var argentino = 0.05;
    
    if (document.getElementById ("uno") .checked) {
        resultado = valore / dolar;
        alert ("El cambio de pesos uruguayos a Dolares es : $" + resultado.toFixed(2));
    }
    else if (document.getElementById ("dos") .checked ) {
        resultado = valore / euro;
        alert ("El cambio de pesos uruguayos a Euro es : $" + resultado.toFixed(2));
    }

    else if (document.getElementById ("tres") .checked ) {
        resultado = valore / argentino;
        alert ("El cambio de pesos uruguayos a Peso Argentino es : $" + resultado);
    }    
    else {
        alert ("tienes que cmpletar todos los requerimientos");
    }
}