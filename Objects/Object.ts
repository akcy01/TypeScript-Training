interface Point
{
    x: Number,
    y: Number
}

interface Vehicle
{
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle 
{
    currentLocation: Point;
    travelTo(point: Point): void 
    {
        console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}

class Bus implements Vehicle
{
    currentLocation: Point;
    travelTo(point: Point): void 
    {
        console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({x:1, y:2});
taxi_1.currentLocation = {x: 2, y: 5};