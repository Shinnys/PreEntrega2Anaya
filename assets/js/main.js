//  Fórmula para calcular el interés compuesto
//  A = P x (1 + r/n)^n*t (no utilizo la formula directamente)
//  A = la cantidad que recibirás al final del periodo. Variable: capital_final (float)
//  P = la cantidad de la inversión inicial. Variable: capital_inicial (float)
//  r = tasa de interés anual. Variable: tasa_interes (float)
//  n = el número de periodos devengados (mensual, cuatrimetral, trimestral, bimestral, anual). Variable: frecuencia_periodos (int). mensual = 12, trimestral = 4, cuatrimetral = 3, bimestral = 2, anual = 1.
//  t = el periodo total de inversión en años. Variable: tiempo (int)

function calcular_intereses (capital_inicial, frecuencia_periodos, tasa_interes, tiempo) {
    let periodos = frecuencia_periodos * tiempo;
    let tasa_periodo = tasa_interes / frecuencia_periodos;
    let capital_final = capital_inicial;
    let interes_acumulado = 0, interes_desvengado = 0;
    for (let i=0; i<periodos; i++) {
        interes_desvengado = capital_final * tasa_periodo / 100;
        interes_acumulado += interes_desvengado;
        capital_final += interes_desvengado;
        console.log("[Periodo " + (i+1) + "]: Capital periodo: $" + (capital_final-interes_desvengado).toFixed(2) + " - Interés desvengado: $" + interes_desvengado.toFixed(2) + " - Interés acumulado: $" + interes_acumulado.toFixed(2) + " - Capital final: $" + capital_final.toFixed(2));
    }
    console.log("\nCapital inicial: $" + capital_inicial.toFixed(2));
    console.log("Capital final: $" + capital_final.toFixed(2));
    console.log("Interés acumulados: $" + interes_acumulado.toFixed(2));
    console.log("Frecuencia de periodos: " + calcular_frecuencia(frecuencia_periodos));
    console.log("Interés por periodo: " + tasa_periodo.toFixed(3) + "%");
    console.log("Periodos: " + periodos);
};

function calcular_frecuencia (frecuencia_periodos) {
    if (frecuencia_periodos == 12) {
        return "mensual";
    } else if (frecuencia_periodos == 4) {
        return "trimestral";
    } else if (frecuencia_periodos == 3) {
        return "cuatrimetral";
    } else if (frecuencia_periodos == 2) {
        return "bimestral";
    } else {
        return "anual";
    };
}

// Comienzo de script
let continuar = "";
while (continuar != "no") {
    let capital_inicial = parseFloat(prompt("Capital inicial."));
    while (capital_inicial < 1) { 
        capital_inicial = parseFloat(prompt("Capital inicial incorrecto. Ingresar un valor mayor a $1."));
    }
    let frecuencia_periodos = parseInt(prompt("Frecuencia de intereses desvengados (ingrese el numero).\nMensual = 12.\nTrimestral = 4.\nCuatrimetral = 3.\nBimestral = 2.\nAnual = 1."))
    while (frecuencia_periodos != 12 && frecuencia_periodos != 4 && frecuencia_periodos != 3 && frecuencia_periodos != 2 && frecuencia_periodos != 1) {
        frecuencia_periodos = parseInt(prompt("Frecuencia de intereses desvengados incorrecta. Vuelva a ingresar.\nMensual = 12.\nTrimestral = 4.\nCuatrimetral = 3.\nBimestral = 2.\nAnual = 1."));
    }
    let tasa_interes = parseInt(prompt("Tasa de interés anual."));
    let tiempo = parseInt(prompt("Numero de años."));

    calcular_intereses(capital_inicial, frecuencia_periodos, tasa_interes, tiempo);
    continuar = prompt("¿Desea simular otro interés compuesto?\nEscriba 'Si' para continuar.\nEscriba 'No' para finalizar.").toLowerCase()
    continuar = "no";
}