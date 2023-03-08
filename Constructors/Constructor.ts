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

let taxi_2: Taxi = new Taxi({x: 2, y: 5}, 'Red');
taxi_2.travelTo({x:1, y:2});
taxi_2.currentLocation = {x: 2, y: 5};