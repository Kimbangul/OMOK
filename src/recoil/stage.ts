import { useEffect } from "react";
import {atom} from "recoil";

export const BLACK = 0;
export const WHITE = 1;

// PARAM type
export interface InputStateType {
  row: number;
  cell: number
}

export type GameStateType = 'ready' | 'start' | 'end';

// PARAM state
export const inputState = atom<InputStateType>({
  key: 'inputState',
  default: {
    row: 10,
    cell: 10
  }
});

export const gameState = atom<GameStateType>({
  // 게임 시작 상태
  key: 'gameState',
  default: 'ready',
});

export const playerState = atom<number>({
  // 현재 플레이어 상태
  key: 'playerState',
  default: BLACK
})

export type CellStateType = number | null;
export type RowStateType = CellStateType[];
export type StageStateType = RowStateType[] | null;

export const stageState = atom<StageStateType>({
  key: 'stageState',
  default: null
})