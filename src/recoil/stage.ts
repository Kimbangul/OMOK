import {atom} from "recoil";
import { InputStateType, GameStateType, CellStateType, ScoreStateType, RowStateType, StageStateType } from "./type";

export const BLACK = 0;
export const WHITE = 1;


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

export const scoreState = atom<ScoreStateType>({
  // 점수 상태
  key: 'scoreState',
  default: {
    0: 0,
    1: 0,
  }
})

export const stageState = atom<StageStateType>({
  key: 'stageState',
  default: null
})


export type { InputStateType, GameStateType, CellStateType, ScoreStateType, RowStateType, StageStateType };