import { CardName } from "../../CardName";
import { SpaceBonus } from "../../SpaceBonus";
import { MoholeArea } from "../MoholeArea";
import { IAdjacencyBonus } from "../../ares/AdjacencyBonus";

export class MoholeAreaAres extends MoholeArea {
  public name: CardName = CardName.MOHOLE_AREA_ARES;
  public adjacencyBonus: IAdjacencyBonus =  {bonus: [SpaceBonus.HEAT, SpaceBonus.HEAT]};
}
