import { StageStateType, GameStateType } from "recoil/type";

export interface StartGameParamsType {
  member: string[];
  code: string;
  input: {row: number; cell: number};
  stageState: StageStateType,
  gameState: GameStateType
}