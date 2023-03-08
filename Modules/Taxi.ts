import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle //Taksiyi dışarıya açmak için export ekledik basına.Yani Artık taxi sınıfını taxi ts dısında da kullanabilicez.Ama sonrasında kullanacağımız kısımda bunu import etmeliyiz.Örneği bu klasörde zaten.
{
    color: string
    constructor(location: Point, color: string)
    {
        this.currentLocation = location;
        this.color = color
    }
    currentLocation: Point;
    travelTo(point: Point): void 
    {
        console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}
