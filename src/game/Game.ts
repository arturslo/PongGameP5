import {IGameObjects} from "./IGameObjects";
import {IGameConfig} from "./IGameConfig";
import {IGameServices} from "./IGameServices";
import {IPlayers} from "./IPlayers";
import {IControllers} from "./IControllers";
import {IObjects} from "./IObjects";

export class Game {
    gameObjects: IGameObjects;
    objects: IObjects
    config: IGameConfig;
    services: IGameServices;
    players: IPlayers;
    controllers: IControllers;

    constructor(
        gameObjects: IGameObjects,
        objects: IObjects,
        config: IGameConfig,
        services: IGameServices,
        players: IPlayers,
        controllers: IControllers
    ) {
        this.gameObjects = gameObjects;
        this.objects = objects;
        this.config = config;
        this.services = services;
        this.players = players;
        this.controllers = controllers;
    }

    getGameObjects() {
        return Object.values(this.gameObjects);
    }
}
