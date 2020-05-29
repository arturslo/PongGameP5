import {ICollisionsListener} from "../ICollisionsListener";
import {Collision} from "../Collision";
import {Paddle} from "../../gameplayObjects/Paddle";
import {Border} from "../../gameplayObjects/Border";
import {RelativePositionResolver} from "../../relativePosition/RelativePositionResolver";

export class PaddleHitsBorderListener implements ICollisionsListener {
    private _relativePositionResolver: RelativePositionResolver;

    constructor(relativePositionResolver: RelativePositionResolver) {
        this._relativePositionResolver = relativePositionResolver;
    }

    onCollisions(collisions: Collision[]): void {
        let paddle: Paddle | null = null;
        let border : Border | null = null;

        for (const collision of collisions) {
            if (collision.shapeA instanceof Paddle && collision.shapeB instanceof Border) {
                paddle = collision.shapeA;
                border = collision.shapeB;
            }
            if (collision.shapeB instanceof Paddle && collision.shapeA instanceof Border) {
                paddle = collision.shapeB;
                border = collision.shapeA;
            }
        }

        if (paddle && border) {
            if (this._relativePositionResolver.top(border)) {
                paddle.moveDown();
            } else {
                paddle.moveUp();
            }
        }
    }
}
