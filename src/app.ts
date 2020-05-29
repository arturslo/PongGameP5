import p5 from "p5";
import {game} from "./game/setup/gameSetup";
import {ComputerControlInput} from "./page/ComputerControlInput";
import {ConfigInput} from "./page/ConfigInput";
import {KeyMappingInput} from "./page/KeyMappingInput";

new p5((p: p5) => {
    p.setup = () => {
        const canvasDimensions = game.objects.canvas.dimensions;
        p.createCanvas(canvasDimensions.width, canvasDimensions.height);
    };

    p.draw = () => {
        const backgroundColor = game.config.backgroundColor;
        p.background(backgroundColor.getValues());
        game.objects.scoreCounter1.draw(p);
        game.objects.scoreCounter2.draw(p);

        game.players.player1.activeController.checkKeyPresses();
        game.players.player2.activeController.checkKeyPresses();
        game.services.collisionDetector.detect(game.getGameObjects());
        game.gameObjects.ball.update();
        game.gameObjects.leftPaddle.update();
        game.gameObjects.rightPaddle.update();

        for (const obj of game.getGameObjects()) {
            obj.draw(p);
            if (game.config.isProjectionOn) {
                game.services.projectionDrawer.drawPoints(obj, p);
                game.objects.axis.draw(p);
            }
        }
    };
}, document.getElementById("game")!);

new ComputerControlInput(game.players.player1, game.players.player2);
new ConfigInput(game.config);
new KeyMappingInput(game.controllers.controller1, game.controllers.controller2);
