import { useState } from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import { stageState, playerState, BLACK, WHITE, inputState, RowStateType, scoreState, ScoreStateType } from "../../recoil/stage";
import { CellStyle as C } from "components/cell/CellStyle";
import { CellPropsType } from "components/cell/type";
import { getCheckVictory, makeLeftDiagonalArr, makeRightDiagonalArr, makeVerticalArr, getIsFullStage } from "./getCheck";
import useReset from "components/reset/useReset";

const Cell = ({rowNum, cellNum} : CellPropsType) => {
  const [score, setScore] = useRecoilState<ScoreStateType>(scoreState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);
  const [cellState, setCellState] = useState<null | number>(null);

  const reset = useReset();
  const stageLength = useRecoilValue(inputState).row * useRecoilValue(inputState).cell;

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
    // 배열을 만들어 승패 판정
    const verticalArr = makeVerticalArr({stage, cellIdx: cellNum});
    const rightDiagonalArr = makeRightDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});
    const leftDiagonalArr = makeLeftDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});

    let arr = [stage[rowNum], verticalArr, rightDiagonalArr, leftDiagonalArr];

    arr.forEach((el ) => {
      if (getCheckVictory(el, player)){
        const playerName = player === BLACK ? 'black' : 'white';
        alert(`${playerName} 님이 승리하였습니다.`);

        setScore({
          ...score,
          [player]: score[player] + 1,
        });
        reset.reset();
        return;
      }
    });

    if (getIsFullStage(stage, stageLength)){
      alert(`돌을 더 놓을 자리가 없습니다. 게임을 리셋합니다.`);
      reset.reset();
    }
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