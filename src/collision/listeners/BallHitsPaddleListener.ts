import {ICollisionsListener} from "../ICollisionsListener";
import {Collision} from "../Collision";
import {Ball} from "../../gameplayObjects/Ball";
import {Paddle, PaddleSide} from "../../gameplayObjects/Paddle";
import {p} from "../../game/setup/processing";

export class BallHitsPaddleListener  implements ICollisionsListener{

    constructor() {
    }

    onCollisions(collisions: Collision[]): void {
        let ball: Ball | null = null;
        let paddle : Paddle | null = null;

        for (const collision of collisions) {
            if (collision.shapeA instanceof Ball && collision.shapeB instanceof Paddle) {
                ball = collision.shapeA;
                paddle = collision.shapeB;
            }
            if (collision.shapeB instanceof Ball && collision.shapeA instanceof Paddle) {
                ball = collision.shapeB;
                paddle = collision.shapeA;
            }
        }

        if (ball && paddle) {
            let deg = 45;
            const diff = ball.centerPoint.y - (paddle.centerPoint.y - paddle.dimensions.height / 2);
            const leftSideAngle = p.map(diff, 0, paddle.dimensions.height, -deg, deg);
            let angle = leftSideAngle;

            if (paddle.side === PaddleSide.right) {
                let rightSideAngle = 180 - p.abs(leftSideAngle);
                if (leftSideAngle < 0) {
                    rightSideAngle = -rightSideAngle;
                }
                angle = rightSideAngle;
            }

            ball.setDirection(angle);
        }
    }
}
