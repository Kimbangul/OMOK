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
  const isMyTurn = useRecoilValue(playableState);

  const reset = useReset();
  const stageLength = useRecoilValue(inputState).row * useRecoilValue(inputState).cell;

  // FUNCTION 셀 클릭 시 실행
  const onClickCell = () => {
    if (!isMyTurn) return;
    console.log(cellState);
    if (!stage) return;
    if (stage[rowNum][cellNum] !== null) return;

    const newTable = stage?.map((row, rowIdx) => 
      rowIdx === rowNum ? 
        row.map((cell, cellIdx) => cellIdx === cellNum ? player : cell)
      : row
    );

    setCellState(player);
    setPlayer(player === BLACK ? WHITE : BLACK);

    console.log('onClickCell update')

    if (newTable) {
      setStage(newTable);
      socket.update(gameInfo?.code || '', {
        ...gameInfo,
        turn: player === BLACK ? WHITE : BLACK,
        stageState: newTable,
      });
      checkTable(newTable);
    }
    console.log(gameInfo);    
  }

  const checkTable = (stage: RowStateType[]) => {
    if (stage === null) return;
    // 배열을 만들어 승패 판정
    const verticalArr = makeVerticalArr({stage, cellIdx: cellNum});
    const rightDiagonalArr = makeRightDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});
    const leftDiagonalArr = makeLeftDiagonalArr({stage, cellIdx: cellNum, rowIdx: rowNum});

    let arr = [stage[rowNum], verticalArr, rightDiagonalArr, leftDiagonalArr];

    for (let i =0; i<arr.length; i++){
      if (getCheckVictory(arr[i], player)){
        const playerName = player === BLACK ? 'black' : 'white';
        const msg = `${playerName} 님이 승리하였습니다.`;
        console.log('victory');
        const newScore = { ...score,
          [player]: score[player] + 1};

        setScore(newScore);
        socket.update(gameInfo?.code || '', {score: newScore});
        console.log('서버 업데이트');
        socket.endGame(gameInfo?.code||'', gameInfo?.member||[], msg);
        socket.reset(gameInfo?.code || '');  
        console.log('리셋'); 
        break;
      }
    }

    if (getIsFullStage(stage, stageLength)){
      const msg = `돌을 더 놓을 자리가 없습니다. 게임을 리셋합니다.`;
      socket.reset(gameInfo?.code || '');      
      socket.endGame(gameInfo?.code||'', gameInfo?.member||[], msg); 
    }
  }


  return (
    <C.Container onClick={onClickCell} state={stage ? stage[rowNum][cellNum] : null} isMyTurn={isMyTurn}>
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