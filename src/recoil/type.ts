export interface InputStateType {
  row: number;
  cell: number
}

export type GameStateType = 'room' | 'ready' | 'start' | 'end';

export interface ScoreStateType{
  [key:number]: number;
}

export type CellStateType = number | null;
export type RowStateType = CellStateType[];
export type StageStateType = RowStateType[] | null;