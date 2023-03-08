let message; //Burda mesajın türünü belirtmedik

message = "Hello World" //String bir değer atadık ama en başta strin goldugunu belirtmediğimiz için string metıduna erişemeyeceğiz. Bunun icin tür dönüşümü yapmamız gerek.


/* Tür Dönüşümü Örneği */
let count = (<string>message).length;
let length = (message as string).length; //İkisi de aynıdır.