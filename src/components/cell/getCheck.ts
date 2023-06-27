import { RowStateType } from "../../recoil/stage";
import { BaseMakerType } from "./type";

export const getCheckVictory = (player: number, rowIdx: number, cellIdx: number, stage: RowStateType[]) => {
  let result; 

  
}

// FUNCTION 세로 배열 만들기
export const makeVerticalArr = ({stage, cellIdx}: BaseMakerType) => {
  let arr = [];

  for (let i = 0; i<stage.length; i++){
    arr.push(stage[i][cellIdx]);
  }

  return arr;
}

// FUNCTION 오른쪽 아래로 향하는 대각선 배열 만들기
export const makeRightDiagonalArr = (stage: RowStateType[], cellIdx: number, rowIdx: number) => {
  let arr = [];

  for (let i = 0;  i <= cellIdx; i++){
    if (rowIdx-i < 0 || cellIdx - i < 0) break;
    arr.unshift(stage[rowIdx-i][cellIdx-i]);
  }

  for (let i = 1; i < (stage.length - rowIdx); i++){
    if (rowIdx + i > stage.length - 1 || cellIdx + i > stage[rowIdx].length - 1) break;
    arr.push(stage[rowIdx+i][cellIdx+i]);
  }

  return arr;
}

// FUNCTION 왼쪽 아래로 향하는 대각선 배열 만들기
export const makeLeftDiagonalArr = (stage: RowStateType[], cellIdx: number, rowIdx: number) => {
  let arr = [];

  for (let i = 0;  i <= cellIdx; i++){
    if (rowIdx + i > stage.length - 1 || cellIdx - i < 0) break;
    arr.unshift(stage[rowIdx+i][cellIdx-i]);
  }

  for (let i = 1; i < (stage[rowIdx].length - cellIdx); i++){
    if (rowIdx - i < 0 || cellIdx + i > stage[rowIdx].length - 1) break;
    arr.push(stage[rowIdx-i][cellIdx+i]);
  }

  return arr;
}