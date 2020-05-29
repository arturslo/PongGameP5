import {ProjectionDrawer} from "../../projection/ProjectionDrawer";
import {CollisionDetector} from "../../collision/CollisionDetector";
import {ShapeCollisionNotifier} from "../../collision/listeners/ShapeCollisionNotifier";
import {ball} from "./ball";
import {BallInNetListener} from "../../collision/listeners/BallInNetListener";
import {player1, player2} from "./players";
import {leftNet, rightNet} from "./nets";
import {leftPaddle, rightPaddle} from "./paddles";
import {bottomBorder, topBorder} from "./borders";
import {PaddleHitsBorderListener} from "../../collision/listeners/PaddleHitsBorderListener";
import {canvas} from "./gameShapes";
import {RelativePositionResolver} from "../../relativePosition/RelativePositionResolver";
import {BallHitsBorderListener} from "../../collision/listeners/BallHitsBorderListener";
import {BallHitsPaddleListener} from "../../collision/listeners/BallHitsPaddleListener";

export const projectionDrawer = new ProjectionDrawer();
export const relativePositionResolver = new RelativePositionResolver(canvas);

export const shapeCollisionNotifier = new ShapeCollisionNotifier();
shapeCollisionNotifier.addListener(ball);
shapeCollisionNotifier.addListener(leftNet);
shapeCollisionNotifier.addListener(rightNet);
shapeCollisionNotifier.addListener(leftPaddle);
shapeCollisionNotifier.addListener(rightPaddle);
shapeCollisionNotifier.addListener(topBorder);
shapeCollisionNotifier.addListener(bottomBorder);

export const ballInNetListener = new BallInNetListener(
    {player1, player2},
    [
        ball,
        leftPaddle,
        rightPaddle,
    ]
);

export const paddleHitsBorderListener = new PaddleHitsBorderListener(
    relativePositionResolver
);

export const ballHitsBorderListener = new BallHitsBorderListener(
    relativePositionResolver
);

export const ballHitsPaddleListener = new BallHitsPaddleListener();

export const collisionDetector = new CollisionDetector();
collisionDetector.addListener(shapeCollisionNotifier);
collisionDetector.addListener(ballInNetListener);
collisionDetector.addListener(paddleHitsBorderListener);
collisionDetector.addListener(ballHitsBorderListener);
collisionDetector.addListener(ballHitsPaddleListener);
