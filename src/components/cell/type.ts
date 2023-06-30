import { RowStateType } from "../../recoil/stage";

export interface CellPropsType {
  rowNum: number,
  cellNum: number,
}

export interface BaseMakerType {
  stage: RowStateType[],
  cellIdx: number,
}

export type MakerDiagonalType = BaseMakerType & {rowIdx: number};

export interface CheckVictoryType {
  goal: number;
  arr: RowStateType[];
  player: number;
  cellIdx: number;
}