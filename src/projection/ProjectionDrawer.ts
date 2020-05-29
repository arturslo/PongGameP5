import p5 from "p5";
import {RGB} from "../shapes/shapePartsLib";
import {IProjectable} from "../shapes/AbstractShape";

export class ProjectionDrawer {
    drawPoints(obj: IProjectable, p: p5) {
        for (const point of obj.getProjectionPoints()) {
            p.strokeWeight(2);
            p.stroke(new RGB(0, 255, 0).getValues());
            p.line(point.x, point.y, point.x, 0);
            p.stroke(new RGB(0, 0, 255).getValues());
            p.line(point.x, point.y, 0, point.y);
        }
    }
}
