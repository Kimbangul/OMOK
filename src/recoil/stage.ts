import {atom} from "recoil";
import { InputStateType, GameStateType, CellStateType, ScoreStateType, RowStateType, StageStateType, RoomStateType } from "./type";

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
  default: 'room',
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
  // 오목판 상태
  key: 'stageState',
  default: null
})

// 방 상태정보
export const roomState = atom<RoomStateType>({
  key: 'roomState',
  default: null
})


export type { InputStateType, GameStateType, CellStateType, ScoreStateType, RowStateType, StageStateType, RoomStateType };