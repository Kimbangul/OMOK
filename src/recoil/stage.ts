import {atom, selector} from "recoil";
import { InputStateType, GameStateType, GameInfoStateType, CellStateType, ScoreStateType, RowStateType, StageStateType, RoomStateType } from "recoil/type";
import socket from "socket/socket";

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

export const gameInfoState = atom<GameInfoStateType | null>({
  // 게임 정보 상태(호스트, 멤버, 스코어 등 서버와 연동되는 정보)
  key: 'gameInfoState',
  default: null,
});

export const playerState = atom<number>({
  // 현재 플레이어 상태
  key: 'playerState',
  default: BLACK
})

export const playerTurnState = selector({
  // 자신의 턴 계산
  key: 'playerTurnState',
  get: ({ get }) => {
    if (!socket.id) return -1;
    const turn = get(gameInfoState)?.member.indexOf(socket.id); 
    return turn;
  }
});

export const playableState = selector({
  // 현재 턴이 자신의 턴인지 판별하는 데 사용
  key: 'playableState',
  get: ({ get }) => {
    return  get(playerTurnState) ===  get(playerState);
  }
});

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


export type { InputStateType, GameStateType, CellStateType, GameInfoStateType, ScoreStateType, RowStateType, StageStateType, RoomStateType };