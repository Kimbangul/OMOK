import { useState } from "react";
import {useRecoilState} from "recoil";
import { stageState, playerState, BLACK, WHITE, inputState, RowStateType } from "../../recoil/stage";
import { CellStyle as C } from "./CellStyle";
import { CellPropsType } from "./type";

const Cell = ({rowNum, cellNum} : CellPropsType) => {
  const [table, setTable] = useRecoilState(inputState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);
  const [cellState, setCellState] = useState<null | number>(null);

  // FUNCTION 셀 클릭 시 실행
  const onClickCell = () => {
    if (cellState !== null) return;

    const newTable = stage?.map((row, rowIdx) => 
      rowIdx === rowNum ? 
        row.map((cell, cellIdx) => cellIdx === cellNum ? player : cell)
      : row
    );

    setCellState(player);
    setPlayer(player === BLACK ? WHITE : BLACK);

    if (newTable) {
      setStage(newTable)
      getVictory(player,rowNum, cellNum, newTable);
    }
  }

  const getVictory = (player: number, rowIdx: number, cellIdx: number, stage: RowStateType[]) => {
    let result;
    
    if (stage === null) return;
    // 가로 체크
    const rowStartIdx = stage[rowIdx].indexOf(player);

    for (let i=0; i<5; i++){
      if (cellIdx + i > stage[rowIdx].length) break;
      if (stage[rowIdx][rowStartIdx + i] !== player) break;
      
      if (i===4) {
          console.log('가로 5');
          return;
        }
    }

  // 세로 체크
  let arr = [];
  for (let i = 0; i<stage.length; i++){
    arr.push(stage[i][cellIdx]);
  }
  // console.log(arr);

  // 대각선 체크 (오른쪽 아래 방향)
  arr = [];
  for (let i = 0;  i <= cellIdx; i++){
    if (rowIdx-i < 0 || cellIdx - i < 0) return;
    arr.unshift(stage[rowIdx-i][cellIdx-i]);
  }
  for (let i = 1; i < (stage.length - rowIdx); i++){
    arr.push(stage[rowIdx+i][cellIdx+i]);
  }
  
  console.log(arr);
}

  return (
    <C.Container onClick={onClickCell} state={cellState}>
      {cellState === BLACK ? <C.Stone>⚫</C.Stone> 
      : cellState === WHITE ? <C.Stone>⚪</C.Stone>
      : null
      }
    </C.Container>
  )
}



export default Cell;