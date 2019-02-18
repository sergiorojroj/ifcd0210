function opera( tecla){   
   switch (tecla) {
     case "0":
     case "1":
     case "2":
     case "3":
     case "4":
     case "5":
     case "6":
     case "7":
     case "8":
     case "9":
     case ".":
     case "+":
     case "-":
     case "/":
     case "*":
        document.getElementById("resultado").value += tecla;        
        break;
     case "=":                
        document.getElementById("resultado").value = eval(document.getElementById("resultado").value)
        break;
     case "limpiar":                
        document.getElementById("resultado").value = "";        
        break;        
     case "retroceso":                
        document.getElementById("resultado").value = document.getElementById("resultado").value.slice(0,-1);        
        break;                   
                                     
   }
   

}
function myfunction(txt){
        alert("Bienvenido " +  txt  + " a la calculadora de Sergio Rojas Rojas ")
  }