
console.group("Cuadrado");
const ladoCuadrado =5;

console.log("Los lados del cuadrado miden: "+ladoCuadrado);

function perimetroCuadrado(lado){
    return lado*4;
}
console.log("el perimetro es : "+perimetroCuadrado(5)+"cm");

function AreaCuadrado(lado){

return lado**2;
}

console.log("El área del cuadrado es: "+AreaCuadrado(6)+"cm*cm")

console.groupEnd();

console.group("Triangulo");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const BaseTriangulo=4;

console.log("los lados del triangulo miden: "
+ladoTriangulo1+"cm" +" "
+ladoTriangulo2+"cm" +" "
+BaseTriangulo+"cm"  +" ");

const Altura=5.5;
console.log("la altura del triangulo es: "+Altura+"cm");
function perimetroTriangulo(ladoA,ladoB,base){
    return ladoA+ladoB+base;
}

console.log("El perimetro del triangulo es : "+perimetroTriangulo(8,8,9)+"cm");
function AreaTriangulo(base, altura){
    return (base*Altura)/2;
}
console.log("El área de un triangulo es : "+AreaTriangulo(6,8)+"cm*cm");
console.groupEnd();

console.group("Circulo");
function  diametrocirculo(radio){
    return radio*2;
}
console.log("El diametro del circulo es : "+diametrocirculo(6)+"cm");
function perimetroCirculo(diametro){
   const pi=Math.PI;
    return diametro*pi;
}

console.log("El perimetro del circulo es : "+perimetroCirculo(6)+"cm");
function AreaCirculo(radio){
  return (radio*radio)* Math.PI;
}


console.log("El Area del circulo es : "+AreaCirculo(5)+"cm*cm");

console.groupEnd();

//aqui interactuamos con html 
function CalcularPerimetroCuadrado(){
 const input = document.getElementById("inputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro)
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

 const area = AreaCuadrado(value);
 alert(area);
}

