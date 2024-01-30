import { useEffect, useMemo, useState } from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import { stageState, playerState, BLACK, WHITE, inputState, RowStateType, scoreState, ScoreStateType, gameInfoState, playerTurnState, playableState } from "../../recoil/stage";
import { CellStyle as C } from "components/cell/CellStyle";
import { CellPropsType } from "components/cell/type";
import { getCheckVictory, makeLeftDiagonalArr, makeRightDiagonalArr, makeVerticalArr, getIsFullStage } from "./getCheck";
import useReset from "components/reset/useReset";
import socket from "socket/socket";

const Cell = ({rowNum, cellNum} : CellPropsType) => {
  const [score, setScore] = useRecoilState<ScoreStateType>(scoreState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);
  const [gameInfo, setGameInfo] = useRecoilState(gameInfoState);
  const [cellState, setCellState] = useState<null | number>(null);
  const myTurn = useRecoilValue(playerTurnState);
  const isMyTurn = useRecoilValue(playableState);

  const reset = useReset();
  const stageLength = useRecoilValue(inputState).row * useRecoilValue(inputState).cell;

  // FUNCTION 셀 클릭 시 실행
  const onClickCell = () => {
    if (!isMyTurn) return;
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
    console.log(gameInfo);
    socket.update(gameInfo?.code || '', {
      ...gameInfo,
      turn: player === BLACK ? WHITE : BLACK,
      gameState: newTable,
      score: score
    });
  }

  const checkTable = (stage: RowStateType[]) => {
    if (stage === null) return;
    // 배열을 만들어 승패 판정
    const verticalArr = makeVerticalArr({stage, cellIdx: cellNum});
    const rightDiagonalArr = makeRightDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});
    const leftDiagonalArr = makeLeftDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});

    let arr = [stage[rowNum], verticalArr, rightDiagonalArr, leftDiagonalArr];

    arr.forEach((el) => {
      if (getCheckVictory(el, player)){
        const playerName = player === BLACK ? 'black' : 'white';
        const msg = `${playerName} 님이 승리하였습니다.`;
        const newScore = { ...score,
          [player]: score[player] + 1};

        setScore(newScore);
        reset.reset();

        socket.reset(gameInfo?.code || '', newScore, gameInfo || {});
        socket.endGame(gameInfo?.member||[], msg);
        return;
      }
    });

    if (getIsFullStage(stage, stageLength)){
      const msg = `돌을 더 놓을 자리가 없습니다. 게임을 리셋합니다.`;
      socket.endGame(gameInfo?.member||[], msg);
      reset.reset();
      socket.reset(gameInfo?.code || '', score, gameInfo || {});
      
    }
  }

  return (
    <C.Container onClick={onClickCell} state={cellState} isMyTurn={isMyTurn}>
     {
       stage === null ? null :
      <>
        {
          // TODO 임시 추가
          // stage[rowNum][cellNum] === BLACK ? <C.Stone>⚫</C.Stone> 
          // : stage[rowNum][cellNum] === WHITE ? <C.Stone>⚪</C.Stone>
          // : null
          stage[rowNum][cellNum] === BLACK ? <C.Stone>ㅁ</C.Stone> 
          : stage[rowNum][cellNum] === WHITE ? <C.Stone>ㅇ</C.Stone>
          : null
        }
      </>
     }
    </C.Container>
  )
}



export default Cell;