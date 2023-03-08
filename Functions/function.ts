function getAverage(a: number, b: number, c?: number): string 
{ //c parametresi boş gelebilir dönüş de string olacak dedik
 
    let total = a + b;
    let count = 2;

    if(typeof c !== 'undefined')
    {
        total += c; 
        count++;
    }
    const result = total / count;
    return 'result : ' + result;
}

getAverage(10,20);

/* Fonksiyon tanımlama 2 */

const deneme = (): void => 
{
    //Fonskiyon tanımlama iki.Geriye değer döndürmeyen.
}


const deneme2 = (): string => 
{
    //Geriye string döndüren.
    return "Örnek";
}