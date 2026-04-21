//Datos que ingresara el usuario
let nombreCompleto = "";
let edad = 0;
let td= "";
let numeroDeDocumento = "";

let salario = 0;
let comisiones = 0;
let totalHorasExtra = 0;
let nivelDeRiesgo = "";

//Variables para pedir info al usuario
const mensajeNombreCompleto = "Ingrese su nombre completo";
const mensajeEdad = "Ingrese su edad";
const mensajeTd = "Ingrese su tipo de documento";
const mensajeNumeroDeDocumento = "Ingrese su número de documento";
const mensajeSalario = "Ingrese su salario";
const mensajeComisiones = "Ingrese sus comisiones";
const mensajeTotalHorasExtra = "Ingrese el total de horas extra";
const mensajeNivelDeRiesgo = "Ingrese su nivel de riesgo";


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



if (edad < 18) {
    //No se calcula porque el usuario es menor de edad
}

else if (edad >= 18 && edad < 25) {
    //No se calcula porque el usuario es beneficiario por cotizante
}

else if (edad >= 25 && edad < 60) {
    //Se calculan las cotizaciones
}

edad >= 60? pension : false;
    //Se calcula la pensión porque el usuario es mayor de edad

