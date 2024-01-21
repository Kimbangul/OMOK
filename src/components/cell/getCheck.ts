import { RowStateType, BLACK, inputState } from "recoil/stage";
import { BaseMakerType, MakerDiagonalType } from "components/cell/type";

// FUNCTION 승리 판별 함수
export const getCheckVictory = (arr: RowStateType, player: number) => {
  const toStringArr = arr.join('');
  const condition = player.toString().repeat(5);
  
  if (toStringArr.includes(condition)){
    console.log(`${player} win`);
    return true;
  }

  return false;
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

// FUNCTION 오목판이 다 찼는지 확인하기
export const getIsFullStage = (stage: RowStateType[], stageLength: number) : boolean => {
  let result : number = 0;

  stage.forEach((el: RowStateType)=> {
    const emptyCell = el.filter((cell) => cell !== null);
    result += emptyCell.length;

    return result;
  });
  
  if (result === stageLength){
    return true;
  }

  return false;
};