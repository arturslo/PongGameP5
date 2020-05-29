import {Collision} from "./Collision";

export interface ICollisionsListener {
    onCollisions: (collisions: Collision[]) => void;
}
