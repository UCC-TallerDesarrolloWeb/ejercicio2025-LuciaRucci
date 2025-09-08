/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(unidad, valor) {
    let metro, pulgada, pie, yarda;

    console.log(valor); 
    console.log(isNaN(valor)); 

    if(isNaN(valor)) { 
        alert("El valor ingresado no es correcto"); 
        metro = " ";
        pie = " "; 
        pulgada = " "; 
        yarda = " "; 
    } else {  
    if (unidad === "unid_metro") {
        metro = valor;
        pie = 3.28 * metro;
        pulgada = 39.37 * metro;
        yarda = 1.0936 * metro;
    }
    else if (unidad === "unid_pulgada") {
        pulgada = valor;
        metro = 0.0254 * pulgada;
        pie = 0.0833 * pulgada;
        yarda = 0.0278 * pulgada;
    }
    else if (unidad === "unid_pie") {
        pie = valor;
        metro = 0.3048 * pie;
        pulgada = 12 * pie;
        yarda = 0.3333 * pie;
    }   
    else if (unidad === "unid_yarda") { 
        yarda = valor;
        metro = 0.9144 * yarda;
        pulgada = 36 * yarda;
        pie = 3 * yarda;
    }
}

    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda; 

}
