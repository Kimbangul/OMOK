export interface InputStateType {
  row: number;
  cell: number
}

export type GameStateType = 'room' | 'ready' | 'start' | 'end';

export interface GameInfoStateType{
  code: string;
  member: string[];
  turn: number;
  host: string;
  memberCnt: number;
  score: ScoreStateType;
  stageState: StageStateType;
  gameState: GameStateType;
  stageSize: {row: number, cell: number}
}

export interface ScoreStateType{
  [key:number]: number;
}

export type RoomStateType = string|null;
export type CellStateType = number | null;
export type RowStateType = CellStateType[];
export type StageStateType = RowStateType[] | null;