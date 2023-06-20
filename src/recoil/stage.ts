import {atom} from "recoil";

// PARAM type
export interface InputStateType {
  row: number;
  cell: number
}

export type StageStateType = 'ready' | 'start' | 'end';

// PARAM state
export const inputState = atom<InputStateType>({
  key: 'inputState',
  default: {
    row: 10,
    cell: 10
  }
});

export const stageState = atom<StageStateType>({
  key: 'stageState',
  default: 'ready',
});