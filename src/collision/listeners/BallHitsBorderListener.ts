import {RelativePositionResolver} from "../../relativePosition/RelativePositionResolver";
import {Collision} from "../Collision";
import {Border} from "../../gameplayObjects/Border";
import {Ball} from "../../gameplayObjects/Ball";
import {ICollisionsListener} from "../ICollisionsListener";

export class BallHitsBorderListener implements ICollisionsListener{
    private _relativePositionResolver: RelativePositionResolver;

    constructor(relativePositionResolver: RelativePositionResolver) {
        this._relativePositionResolver = relativePositionResolver;
    }

    onCollisions(collisions: Collision[]): void {
        let ball: Ball | null = null;
        let border : Border | null = null;

        for (const collision of collisions) {
            if (collision.shapeA instanceof Ball && collision.shapeB instanceof Border) {
                ball = collision.shapeA;
                border = collision.shapeB;
            }
            if (collision.shapeB instanceof Ball && collision.shapeA instanceof Border) {
                ball = collision.shapeB;
                border = collision.shapeA;
            }
        }

        if (ball && border) {
            let newYSpeed = Ball.BASE_SPEED;
            if (this._relativePositionResolver.bottom(border)) {
                newYSpeed = -Ball.BASE_SPEED;
            }

            ball.ySpeed = newYSpeed;
        }
    }
}
