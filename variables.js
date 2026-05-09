//Sebastian David Aguilar Pulido 1029143082

document.addEventListener("DOMContentLoaded", () => {

  //Variables para animación de gif
  const calcularBoton = document.getElementById("calcular");
  const recalcularBoton = document.getElementById("recalcular");
  const contenedor = document.getElementById("contenedor");

  //Los resultados que se veran en el HTML
  const salarioFinal = document.getElementById("salarioFinal");
  const ibcTexto = document.getElementById("ibc");
  const deduccionesTexto = document.getElementById("deducciones");
  const totalTexto = document.getElementById("total");

  
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

  calcularBoton.addEventListener("click", () => {

    //Datos que ingresara el usuario
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let edad = document.getElementById("edad").value;
    let td= document.getElementById("td").value;
    let numeroDeDocumento = document.getElementById("numeroDeDocumento").value;

    let salario = document.getElementById("salario").value;
    let comisiones = document.getElementById("comisiones").value;
    let totalHorasExtra = document.getElementById("totalHorasExtra").value;
    let nivelDeRiesgo = document.getElementById("nivelDeRiesgo").value;

    contenedor.classList.add("right-panel-active");
  

    function calcularPorcentaje (base, porcentaje) {
        let resultado = base * porcentaje
        return resultado;
    }

    let calculoIbc = ingresoBaseCotizacion * (salario + comisiones + totalHorasExtra);
    let calculoSalud = calculoIbc * saludPorcentaje;
    let calculoPension = calculoIbc * pensionPorcentaje;

    function validarUsuario(edadUsuario){
        if (edadUsuario < 18) {
            alert("El usuario es menor de edad. No se puede calcular la nómina.");
            return;
        }

        else if (edadUsuario >= 18 && edadUsuario < 25) {
            alert("Usuario beneficiario por cotizante. No continúa el cálculo.");
            return;
        }

        else if (edadUsuario >= 25 && edadUsuario < 60) {
            
        }

        edadUsuario >= 60? pension : false;
            //Se calcula la pensión porque el usuario es mayor de edad
    }
  });
  
  recalcularBoton.addEventListener("click", () => {
    contenedor.classList.remove("right-panel-active");
  });

});