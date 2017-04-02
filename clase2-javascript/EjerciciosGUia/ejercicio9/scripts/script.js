
function mostrarResultado(){


    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var opciones = document.getElementsByName("operacion");
    var operacion;
    var resultado;
    for (var index = 0; index < opciones.length; index++) {
            if(opciones[index].checked)
        {
            operacion = opciones[index].value;
            break;
        }
    }

    switch (operacion) {
        case "+":
            alert(parseInt(numero1.value) + parseInt(numero2.value));
            break;
        case "-":
            alert(parseInt(numero1.value) - parseInt(numero2.value));
            break;
        case "*":
            alert(parseInt(numero1.value) * parseInt(numero2.value));
            break;
        case "/":
            alert(parseInt(numero1.value) / parseInt(numero2.value));
            break;
        default:
            alert("Flashaste");
            break;
    }
}

