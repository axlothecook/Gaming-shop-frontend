import type { GameObject, GameState } from "../../../app";

type ObjOrNull = GameObject | null;

class Game implements GameState {
    product: ObjOrNull;

    constructor() {
        this.product = $state(null);
    };

    getGame() {
        return this.product;
    };

    resetGame(obj: ObjOrNull) {
        this.product = obj;
    };
};

export const gameClass = new Game;