import { useState } from "react";
import {useRecoilState} from "recoil";
import { stageState, playerState, BLACK, WHITE, inputState, RowStateType } from "../../recoil/stage";
import { CellStyle as C } from "./CellStyle";
import { CellPropsType } from "./type";
import { getCheckVictory, makeLeftDiagonalArr, makeRightDiagonalArr, makeVerticalArr } from "./getCheck";

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
      setStage(newTable);
      checkTable(newTable);
    }
  }

  const checkTable = (stage: RowStateType[]) => {
    if (stage === null) return;

    const verticalArr = makeVerticalArr({stage, cellIdx: cellNum});
    const rightDiagonalArr = makeRightDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});
    const leftDiagonalArr = makeLeftDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});

    let arr = [stage[rowNum], verticalArr, rightDiagonalArr, leftDiagonalArr];
    console.log(arr);

    arr.forEach((el, idx) => {
      if (getCheckVictory(5, el, player, cellNum)){
        console.log(stage);
        console.log('win');
      }
    });
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