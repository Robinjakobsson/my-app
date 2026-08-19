export type Position =
  | "Anfallare"
  | "Försvarare"
  | "Mittfältare"
  | "Målvakt";

export type Player = {
  name: string;
  image: string;
  description: string;
  position: Position;
  goals: string;
  assists: string;
  yellow_cards: string;
  red_cards: string;
  holding_thenulls?: string;
  amountofSaves?: string;
  amountofGlidTackles?: string;
  mvps: string;
};