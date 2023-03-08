let a: number = 5;
let b: string = "deneme";
let c: boolean = true;
let d: any;
let e: number[] = [1,3,4,5,6];
let f: Array<number> = [1,2,3];
let g: any[] = [1,"a",true];

enum Payment
{
    kredi = 0,
    havale = 5,
    kapidaOdeme = 2,
    eft = 3
};

let kredi = Payment.kredi;
let havale = Payment.havale;
let kapidaOdeme = Payment.kapidaOdeme;
let eft = Payment.eft;

