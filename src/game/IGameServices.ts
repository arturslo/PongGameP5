import {ProjectionDrawer} from "../projection/ProjectionDrawer";
import {CollisionDetector} from "../collision/CollisionDetector";
import {RelativePositionResolver} from "../relativePosition/RelativePositionResolver";

export interface IGameServices {
    projectionDrawer: ProjectionDrawer;
    collisionDetector: CollisionDetector;
    relativePositionResolver: RelativePositionResolver;
}
