import { RowStateType } from "../../recoil/stage";
import { BaseMakerType, CheckVictoryType, MakerDiagonalType } from "./type";

export const getCheckVictory = ({player, rowIdx, cellIdx, stage} : CheckVictoryType) => {
  let result; 

  if (stage === null) return;

  const rowStartIdx = stage[rowIdx].indexOf(player);

  for (let i=0; i<5; i++){
    if (cellIdx + i > stage[rowIdx].length) break;
    if (stage[rowIdx][rowStartIdx + i] !== player) break;
    
    if (i===4) {
        console.log('가로 5');
        return;
      }
  }
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
export const makeRightDiagonalArr = ({stage, cellIdx, rowIdx} : MakerDiagonalType) => {
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
export const makeLeftDiagonalArr = ({stage, cellIdx, rowIdx} : MakerDiagonalType) => {
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