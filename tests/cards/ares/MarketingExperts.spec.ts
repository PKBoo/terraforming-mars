import { MarketingExperts } from "../../../src/cards/ares/MarketingExperts";
import { Color } from "../../../src/Color";
import { Game } from "../../../src/Game";
import { Player } from "../../../src/Player";
import { Resources } from "../../../src/Resources";
import { expect } from "chai";
import { SpaceType } from "../../../src/SpaceType";
import { TileType } from "../../../src/TileType";
import { ARES_GAME_OPTIONS } from "../../ares/AresTestHelper";
import { SpaceBonus } from "../../../src/SpaceBonus";
import { EmptyBoard } from "../../ares/EmptyBoard";

describe("MarketingExperts", function () {
  let card : MarketingExperts, player : Player, otherPlayer: Player, game : Game;

  beforeEach(function() {
    card = new MarketingExperts();
    player = new Player("test", Color.BLUE, false);
    otherPlayer = new Player("other", Color.RED, false);
    game = new Game("foobar", [player, otherPlayer], player, ARES_GAME_OPTIONS);
    game.board = new EmptyBoard();
  });

  it("Play", function () {
    expect(player.getProduction(Resources.MEGACREDITS)).eq(0);
    card.play(player, game);
    expect(player.getProduction(Resources.MEGACREDITS)).eq(1);
  });

  // This doesn't test anything about this card, but about the behavior this card provides, from
  // AresHandler.
  it("Bonus in the field", function() {
    // tile types in this test are irrelevant.
    player.playedCards = [card];

    var firstSpace = game.board.getAvailableSpacesOnLand(player)[0];
    firstSpace.adjacency = { bonus: [ SpaceBonus.DRAW_CARD ] };
    game.addTile(player, SpaceType.LAND, firstSpace, {tileType: TileType.RESTRICTED_AREA});

    expect(player.megaCredits).is.eq(0);
    expect(otherPlayer.megaCredits).is.eq(0);

    var adjacentSpace = game.board.getAdjacentSpaces(firstSpace)[0];
    game.addTile(otherPlayer, adjacentSpace.spaceType, adjacentSpace, {tileType: TileType.GREENERY});

    expect(player.megaCredits).is.eq(2);
    expect(otherPlayer.megaCredits).is.eq(0);
  });
});
