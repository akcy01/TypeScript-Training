import { Point } from "./Point";

export interface Vehicle
{
    currentLocation: Point;
    travelTo(point: Point): void;
}