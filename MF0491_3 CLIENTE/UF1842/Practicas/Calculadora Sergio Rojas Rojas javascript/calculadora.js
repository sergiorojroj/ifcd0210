/*  función de una calculadora*/
function Calcular() {
var NUMEROYSIGNO = document.micalc.meterdatos.value;     
 <!--ME CREO UNA VARIABLE QUE ES IGUAL=document.nombreformulario.dondesemuestra.value-->
document.micalc.meterdatos.value = eval(NUMEROYSIGNO);     <!-- y digo que los datos metidos me lo cualcule la funcion eval(NUMEROYSIGNO)

               }
                  <!---Lo podriamos haber hecho directo pero mejor con una variable independiente NUMEROYSIGNO-->
/*function Calcular (){document.micalc.meterdatos.value=eval(document.micalc.meterdatos.value)} */        
               
function num(x) {document.micalc.meterdatos.value += x;}    <!--EN ESTA FUNCION METO LOS NUMEROS DEL 1 AL 9--> 
function signo(y){document.micalc.meterdatos.value += y;}   <!--EN ESTA FUNCION METO LOS  SIGNOs + - * / ( ) -->       
function eliminar(){document.micalc.meterdatos.value= document.micalc.meterdatos.value.substring(0, document.micalc.meterdatos.value.length - 1)}

<!---------------------------Funciones donde se ocupa un solo numero--------------------------------------------------------------------------------------->
function derivada() {document.micalc.meterdatos.value = 1/(document.micalc.meterdatos.value);}
function cuadrado() {document.micalc.meterdatos.value = eval(document.micalc.meterdatos.value)*eval(document.micalc.meterdatos.value);}
function     cubo() {document.micalc.meterdatos.value = eval(document.micalc.meterdatos.value)*eval(document.micalc.meterdatos.value)*eval(document.micalc.meterdatos.value);}
function       pi() {document.micalc.meterdatos.value += Math.PI;}
function     raiz() {document.micalc.meterdatos.value = Math.sqrt(document.micalc.meterdatos.value);}
function      cos() {document.micalc.meterdatos.value = Math.cos(document.micalc.meterdatos.value);}
function      sen() {document.micalc.meterdatos.value = Math.sin(document.micalc.meterdatos.value);}
function      tan() {document.micalc.meterdatos.value = Math.tan(document.micalc.meterdatos.value);}
<!---------------------------Funciones donde se ocupa dos numero--------------------------------------------------------------------------------------->
function potencia() {var exponente = prompt('¿Indique el numero de exponente?')
document.micalc.meterdatos.value = Math.pow(document.micalc.meterdatos.value, exponente);
                 }
function porcent () {document.micalc.meterdatos.value= eval(document.micalc.meterdatos.value)/100;}