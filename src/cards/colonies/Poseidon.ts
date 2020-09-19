import { CorporationCard } from "../corporation/CorporationCard";
import { Player } from "../../Player";
import { Tags } from "../Tags";
import { Game } from "../../Game";
import { CardName } from "../../CardName";

export class Poseidon implements CorporationCard {
    public name: CardName =  CardName.POSEIDON;
    public tags: Array<Tags> = [];
    public startingMegaCredits: number = 45;

    public initialAction(player: Player, game: Game) {
        if (game.gameOptions.coloniesExtension) {
          game.addColonyInterrupt(player, false, "Poseidon first action - Select where to build colony");
          return undefined;
        }
        else {
          console.warn("Colonies extension isn't selected.");
          return undefined;
        }
    }

    public play() {
        return undefined;
    }


}
