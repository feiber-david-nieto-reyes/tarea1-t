//1. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
{
    let answer = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3;
    console.log(answer);
}

//2. 2 *(4 – 10 + 8)/2* 36 *(1/2) 
{
    let answer = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2);
    console.log(answer);
}

//3. 260 / 12 + 54 % 3 – 85 % 7 
{
    let answer = 260 / 12 + 54 % 3 - 85 % 7;
    console.log(answer);
}

//4. (48 < 2 * 3) | | (2 * 7 < 12) 
{
    let answer = (48 < 2 * 3) ||  (2 * 7 < 12)
    console.log(answer)
}

//5. ((8 > 2) | | (932 < 23) ) && 4 == 2
{
    let answer = ((8 > 2) || (932 < 23)) && 4 == 2;
    console.log(answer);
}

//6. Dado a=3 y b=7, encuentra el valor de y = 2 * a + b - a mod 3
{
    let a = 3;
    let b = 7;
    let y = 2 * a + b - a % 3;
    console.log(y);
}

//7. Si a=10 y b=4, calcula el valor de z = a * b + 3 mod a + b
{
    let a = 10;
    let b = 4;
    let z = a * b + 3 % (a + b);
    console.log(z);
}

//8. Con a=6 y b=2, determina el valor de w = a - b + 2 * a mod b
{
    let a = 6;
    let b = 2;
    let w = a - b + 2 * (a % b);
    console.log(w);
}

//9. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a. 
{
    let a = 8;
    let b = 5;
    let v = 2 * b + a / 2 + 4 * (b % a);
    console.log(v);
}

//10. Si a=12 y b=9, calcula el valor de u = b - a + 3 * a mod b.
{
    let a = 12;
    let b = 9;
    let u = b - a + 3 * (a % b);
    console.log(u);
}

//11. Suma de dos números: Escribe un programa que tome dos números y muestre su suma. 
{
    let a = 10;
    let b = 20;
    let addition = a + b;
    console.log(addition);
}

//12.Área de un triángulo: Indique la base y la altura de un triángulo, luego calcula y muestra su área.
{
    let base = 10;
    let height = 20;
    let area = base * height / 2;
    console.log(area);
}

// 13. Número par o impar: Declara un número e indica si es par o impar. 
{
    let number = 11;
    let answer = number % 2 == 0? "Par" : "Impar";
    console.log(answer);
}

// 14. Calculadora simple: Crea una calculadora que realice operaciones básicas como suma, resta, multiplicación y división, según la elección del usuario. 
{
    let operacion = "suma"
    let a = 10
    let b = 20
    let answer=0
    switch (operacion) {
        case "suma":  answer = a+b; break;
        case "resta":  answer = a-b; break;
        case "multiplicacion": answer = a*b; break;
        case "division": answer = a/b; break;
        default: break;
    }
    console.log(answer);
}

// 15. Tabla de multiplicar: Declara un número y muestra su tabla de multiplicar del 1 al 10. 
{
    let number = 2;
    for (let i = 1; i <= 10; i++) {
        console.log(number * i);
    }
}

// 16. Copiar palabra: Escribe un programa que lea dos palabras y concatena en otra variable las dos palabras. 
{
    let word1 = "hola"
    let word2 = "hola"
    let phrase= word1 +" "+ word2
    console.log(phrase);
}

// 17. Mayor de tres números: Establece tres números y determina cuál es el mayor de ellos. 
{
    let number1 = 10;
    let number2 = 20;
    let number3 = 90;
    let largest = (number1 > number2 && number1 > number3) ? number1 : (number2 > number3) ? number2 : number3;
    console.log(largest);
}

// 18. Edad mínima para votar: Ingrese una edad y verifica si es elegible para votar (18 años o más). 
{
    let age = 18;
    let answer = (age>=18) ? "Si vota ": "No vota";
    console.log(answer);

}

// 19. Calculadora de BMI: Crea un programa que calcule el índice de masa corporal (BMI) a partir del peso y la altura del usuario, y luego indique si está en una categoría de peso saludable. 
{
    let weight = 50;
    let height = 1.73;
    let bmi = weight / (height * height);
    let answer = (bmi < 18.5)? "Peso saludable" : "Peso no saludable";
    console.log(answer);
}

// 20. Número positivo, negativo o cero: Declare un número y muestra si es positivo, negativo o cero. 
{
    let number = 8;
    let answer = (number>0)? "Positivo" : (number<0)? "Negativo" : "Es 0";
    console.log(answer);
}

// 21. Año bisiesto: Declara un año y determina si es un año bisiesto o no. Un año bisiesto es divisible por 4, pero no por 100, a menos que también sea divisible por 400. 
{
    let year = 2024;
    let answer = (year % 4 == 0 && year % 100!= 0) || (year % 400 == 0)? "Bisiesto" : "No bisiesto";
    console.log(answer);
}

// 22. Signo zodiacal: Pide al usuario que ingrese su mes y día de nacimiento en variables, luego determina su signo zodiacal. Puedes usar una serie de declaraciones if para comparar las fechas ingresadas con las fechas límite de cada signo zodiacal. 
{
    let month = 5; 
let day = 14; 
if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    console.log("Aries");
} else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    console.log("Tauro");
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    console.log("Géminis");
} else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    console.log("Cáncer");
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    console.log("Leo");
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    console.log("Virgo");
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    console.log("Libra");
} else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    console.log("Escorpio");
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    console.log("Sagitario");
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    console.log("Capricornio");
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    console.log("Acuario");
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    console.log("Piscis");
} else {
    console.log("Fecha no válida");
}

}

// 23. Declare un número de día del mes (por ejemplo, del 1 al 31) y verifica si ese día pertenece a la primera quincena (días 1-15) o a la segunda quincena (días 16- 31). 
{
    let day = 15;
    let answer = (day >= 1 && day <= 15)? "Primera quincena" : (day >= 16 && day <= 31)? "Segunda quincena" : "No pertenece";
    console.log(answer);
}

// 24. Día de la semana: Ingrese un número del 1 al 7, donde 1 representa el domingo, 2 el lunes, 3 el martes, y así sucesivamente. Luego, utiliza una estructura switch para mostrar el nombre del día de la semana correspondiente al número ingresado. 
{
    let day = 3;
    switch (day) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Lunes");
            break;
        case 3:
            console.log("Martes");
            break;
        case 4:
            console.log("Miercoles");
            break;
        case 5:
            console.log("Jueves");
            break;
        case 6:
            console.log("Viernes");
            break;
        case 7:
            console.log("Sabado");
            break;
        default:
            console.log("Día no válido");
    }
}

// 25. Frases iguales: Escribir un programa que ingrese dos frases e indique si son iguales. 
{
    let phrase1 = "hola mundo";
    let phrase2 = "hola mundo";
    let answer = (phrase1 == phrase2)? "Son iguales" : "No son iguales";
    console.log(answer);
}

// 26. Calculadora de precio con descuento: Crea un programa que permita declarar el precio de un artículo y un porcentaje de descuento. El programa debe calcular y mostrar el precio final después del descuento. 
{
    let price = 100;
    let discount = 50;
    let finalPrice = price - (price * discount/100);
    console.log(finalPrice);
}

// 27. Calculadora de factura con impuestos: Declare el total de una factura y el porcentaje de impuestos aplicado. Luego, calcula y muestra el monto total a pagar, incluyendo los impuestos. 
{
    let factura = 50;
    let impuesto = 1;
    let total = factura + (factura * impuesto/100);
    console.log(total);

}

// 28. Calculadora de sueldo con aumento: Declare un salario actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del aumento. 
{
    let salary = 150;
    let bonus = 50;
    let newSalary = salary + (salary * bonus/100);
    console.log(newSalary);
}

// 29. Calculadora de compra con múltiples artículos: Declare el precio y la cantidad de varios artículos que está comprando. Calcula el total de la compra y aplica un descuento del 10% si el total es mayor a cierta cantidad (por ejemplo, $100). 
{
    let cantidaddeterminada = 10;
    let item1Price = 2;
    let item1Quantity = 5;
    
    let item2Price = 5;
    let item2Quantity = 10;
    
    let item3Price = 2;
    let item3Quantity = 5;
    
    let totalPurchase = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (item3Price * item3Quantity);

       totalPurchase = (totalPurchase > cantidaddeterminada) ?  totalPurchase * 0.9 : totalPurchase*1;
    
    console.log(totalPurchase);
    
        
}

// 30. Descuento por antigüedad en la empresa: Pregunta al usuario cuántos años ha estado trabajando en una empresa y calcula su bono de antigüedad. Si ha trabajado más de 5 años, otorga un bono del 5% sobre su salario. 
{
    let salary = 300
    let year = 6;
    let bonus = (year > 5)? 0.5 : 0;
    console.log(bonus*salary + salary);
    

}

// 31. Calculadora de envío con tarifas diferentes: Crea un programa que permita al usuario ingresar la distancia de envío y calcule el costo del envío. Si la distancia es inferior a 50 km, el costo es de $10. Si la distancia es de 50 km o más, el costo es de $20. 
{
    let distance = 100;
    let cost = distance <= 50 ? 10 : 20;
    console.log(cost);
    
}

// 32.Calculadora de descuento por lealtad del cliente: Pide al usuario que ingrese el total de sus compras mensuales durante un año. Si el total es superior a $500, aplica un descuento del 10% en la próxima compra. 
{
    let comprasporaño= 500;
    let proximacompra =500;
    proximacompra *= comprasporaño > 500 ? 0.9 : 1;
    console.log(proximacompra)

}

// 33. Calculadora de descuento por volumen de compra: Permite al usuario ingresar la cantidad de unidades de un producto que va a comprar y el precio unitario. Aplica descuentos por volumen de compra según las siguientes reglas:
// 10-50 unidades: 5% de descuento
// 51-100 unidades: 10% de descuento
// Más de 100 unidades: 15% de descuento
{
    let units = 60;
let unitPrice = 10;
let totalWithoutDiscount = units * unitPrice;

let discount;

if (units >= 10 && units <= 50) {
    discount = totalWithoutDiscount * 0.05;
} else if (units >= 51 && units <= 100) {
    discount = totalWithoutDiscount * 0.10;
} else if (units > 100) {
    discount = totalWithoutDiscount * 0.15;
} else {
    discount = 0;
}

let totalWithDiscount = totalWithoutDiscount - discount;

console.log(totalWithDiscount);



}

// 34. Calculadora de costo de servicio: Pregunta al usuario cuántas horas de servicio necesita y calcula el costo total. Si las horas son más de 10, aplica un descuento del 20%. 
{
    let porhora= 50
    let hours = 2;
    let descuent  = hours > 10? hours * 0.8 : hours * 1;
    console.log(porhora * descuent);
}

// 35. Suma de números pares: Utiliza un bucle for para calcular la suma de los números pares del 1 al 50. 
{
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        i%2 == 0 ? suma += i: null;
    }
    console.log(suma);
}

// 36. Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de multiplicar de un número ingresado por el usuario del 1 al 12. 
{
    let number= 2
    for (let i = 1; i <= 12; i++) {
       console.log(number * i)
    }
}

// 37. Contador de vocales: Utiliza un bucle while para contar el número de vocales en una palabra ingresada por el usuario. 
{
    let word = "hola";
    let vocales = 0;
    let i=0
   while(i<word.length){
    word[i] == "a" || word[i]=="e" || word[i] == "i"  || word[i]=="o" || word[i] == "u" ? vocales+=1: null;
    i++
   }
   console.log(vocales);
}

// 38. Contador de digitos: Utiliza un bucle for para contar el numero de dígitos en una palabra ingresada por el usuario. 
{
    let word = "hola 24 y 4";
    let digitos = 0;
    for (let i = 0; i < word.length; i++) {
        word[i] >= "0" && word[i] <= "9"? digitos += 1: null;
    }
    console.log(digitos);
}

// 39. Adivina el número: Genera un número aleatorio y pide al usuario que adivine el número. Utiliza un bucle while para repetir la solicitud hasta que adivine correctamente. 
{
    
//!requiere promt

}

// 40. Contador de Alfabeto: Utiliza un bucle for para contar el número de letras del alfabeto(a..z) en una palabra ingresada por el usuario. 
{
    let word = "hola 1 ";
    let letras = 0;
    for (let i = 0; i < word.length; i++) {
        word[i] >= "a" && word[i] <= "z"? letras += 1: null;
    }
    console.log(letras);
}

// 41. Suma de números impares: Utiliza un bucle while para calcular la suma de los números impares del 1 al 100. 
{
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        i%2!= 0? suma += i: null;
    }
    console.log(suma);
}

// 42. Contador de caracteres: Escribir un programa que lea una palabra y presenta cuantos caracteres hay en dicha palabra. 
{
    let word = "hola" ;
    let caracteres = word.length;
    console.log(caracteres);
}

// 43. Suma de números: Pide al usuario que ingrese números enteros positivos uno por uno y utiliza un bucle while para calcular la suma de estos números. El ciclo debe terminar cuando el usuario ingrese un número negativo. 
{

let predefinedNumbers = [5, 8, ,-210, 1]; // -1 para terminar el bucle
let sum = 0;
let i = 0;

while (i < predefinedNumbers.length && predefinedNumbers[i] >= 0) {
    let userInput = predefinedNumbers[i];
    sum = sum + userInput;
    i++;
}

console.log(`La suma de los números ingresados es: ${sum}`);

}

//44.Cuenta regresiva: Pide al usuario que ingrese un número entero positivo y utiliza un bucle while para mostrar una cuenta regresiva desde ese número hasta 1.
{
    let number = 10
    let i=number
    if(number > 0 && number % 1 ==0){
        while (i >= 1) {
            console.log(i);
            i--;
        }
    }else {
    console.log("numero no valido")
    }

}