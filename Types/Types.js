var a = 5;
var b = "deneme";
var c = true;
var d;
var e = [1, 3, 4, 5, 6];
var f = [1, 2, 3];
var g = [1, "a", true];
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 5] = "havale";
    Payment[Payment["kapidaOdeme"] = 2] = "kapidaOdeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi;
var havale = Payment.havale;
var kapidaOdeme = Payment.kapidaOdeme;
var eft = Payment.eft;
