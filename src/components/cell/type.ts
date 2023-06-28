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

export type CheckVictoryType = MakerDiagonalType & {player: number};