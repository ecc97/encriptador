var body = document.querySelector("body");
var check = document.querySelector("input[type=checkbox]");
var logo = document.querySelector(".imglogo");
var marcador = document.querySelector("#campo-entrada");
var marEnt = document.querySelector(".campo1");
var senc = document.querySelector(".caja2");
var marEnc = document.querySelector(".campo2");
var ind = document.querySelector(".indicacion");
var titulo = document.querySelector("h1");


function cambiarTema(){
      if(this.checked){
          body.style.background = "#051933";
          body.style.color = "white";  
          logo.src = "./img/logo-vo.png";
          senc.style.backgroundColor = "transparent";
          marEnt.style.color = "white";
          marEnc.style.color = "white";
          senc.style.boxShadow = "0px 0px 9px 7px rgba(0,0,0,0.7)";
          ind.style.color = "white";
          marcador.classList.remove("campo1");
          marcador.classList.add("campo1-vo");
          titulo.classList.add("titulo-vo");
      }else{
          body.style.background = "#F3F5FC";
          body.style.color = "black";  
          logo.src = "./img/logo.png";
          marEnt.style.color = "#0A3871";
          senc.style.backgroundColor = "white";
          marEnc.style.color = "black";
          senc.style.boxShadow = "0px 24px 32px -8px rgba(0, 0, 0, 0.08)";
          ind.style.color = "#65747D";
          marcador.classList.remove("campo1-vo");
          marcador.classList.add("campo1");
          titulo.classList.remove("titulo-vo");
      }
}

check.onchange = cambiarTema;


export{cambiarTema};