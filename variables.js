//Sebastian David Aguilar Pulido 1029143082

//Datos que ingresara el usuario
let nombreCompleto = "";
let edad = 0;
let td= "";
let numeroDeDocumento = 0;

let salario = 0;
let comisiones = 0;
let totalHorasExtra = 0;
let nivelDeRiesgo = "";

//Prompts para pedir info al usuario
nombreCompleto = prompt ("Ingrese su nombre completo");
edad = parseInt (prompt ("Ingrese su edad"));
validarUsuario(edad);
td = prompt ("Ingrese su tipo de documento");
numeroDeDocumento = parseInt (prompt ("Ingrese su número de documento"));
salario = parseInt (prompt ("Ingrese su salario"));
comisiones = parseInt (prompt ("Ingrese sus comisiones"));
totalHorasExtra = parseInt (prompt ("Ingrese el total de horas extra"));
nivelDeRiesgo = prompt ("Ingrese su nivel de riesgo");


//Variables para calculos
const ingresoBaseCotizacion = 0.70;
const subsidioDeTransporte = 249095;
const salarioMinimo = 1750905;
const salarioMinimoIntegralVigente = 22761765;
const uvt = 52.37;

const saludPorcentaje= 0.04;
const pensionPorcentaje= 0.04;
const fondoSolidaridadPorcentaje = 0.01;

const riesgos = [
    {nombre: "Mínimo", valor: 0.522}, 
    {nombre: "Bajo", valor: 1.044},    
    {nombre: "Medio", valor: 2.436}, 
    {nombre: "Alto", valor: 4.350}, 
    {nombre: "Muy Alto", valor: 6.960},
];

function calcularPorcentaje (base, porcentaje) {
    let resultado = base * porcentaje
    return resultado;
}

let calculoIbc = ingresoBaseCotizacion * (salario + comisiones + totalHorasExtra);
let calculoSalud = calculoIbc * saludPorcentaje;
let calculoPension = calculoIbc * pensionPorcentaje;

function validarUsuario(edadUsuario){
    console.log("Dentro de la función de Validar Usuario")
    if (edadUsuario < 18) {
    alert("No se calcula porque el usuario es menor de edad");
    }

    else if (edadUsuario >= 18 && edadUsuario < 25) {
        alert("No se calcula porque el usuario es beneficiario por cotizante");
    }

    else if (edadUsuario >= 25 && edadUsuario < 60) {
        alert("Se calculan las cotizaciones")
    }

    edadUsuario >= 60? pension : false;
        //Se calcula la pensión porque el usuario es mayor de edad
}
