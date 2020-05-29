import {RGB} from "../shapes/shapePartsLib";

export interface IGameConfig {
    isProjectionOn: boolean;
    backgroundColor: RGB;
    borderColor: RGB;
    netColor: RGB;
    paddleColor: RGB;
    ballColor: RGB;
}
