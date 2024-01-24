import { useRef } from "react";
import {useRecoilState} from "recoil";
import { BLACK, inputState, InputStateType, playerState, gameState, GameStateType, stageState, gameInfoState } from "../../recoil/stage";
import Button from "components/common/Button";
import { InputContainerStyle as IC, StartInputContainer as SC } from "components/info/InputContainerStyle";
import { InputSelectorType } from "./type";
import socket from "socket/socket";
import { StartGameParamsType } from "socket/type";

const InputContainer = () => {
  const inputSelector : InputSelectorType = {
    row: useRef(null),
    cell: useRef(null),
  }

  // PARAM state
  const [game, setGame] = useRecoilState<GameStateType>(gameState);
  const [input, setInput] = useRecoilState<InputStateType>(inputState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [table, setTable] = useRecoilState(stageState);
  const [gameInfo, setGameInfo] = useRecoilState(gameInfoState);

  // FUNCTION 시작 및 input정보 바인딩
  const setStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    
    const rowNum = Number(inputSelector.row.current?.value) || 10;
    const cellNum = Number(inputSelector.cell.current?.value) || 10;
    const inputState = {...input, 
      row: rowNum, 
      cell: cellNum, 
    };

    setInput(inputState);

    const info : StartGameParamsType = {
      member: gameInfo?.member || [],
      code: gameInfo?.code || '',
      input: inputState,
    }
    setTable(Array(rowNum).fill(Array(cellNum).fill(null)));
    console.log(info);
    socket.startGame(info);   
  }

  // FUNCTION 서버에 행,열 설정이 정상적으로 넘겨졌을 때
  socket.socket.on('doneStartGame', (data) => {
    console.log(data);
    setGameInfo(data);
    setGame('start');   
  });

  return(
    <>
    {
      game === 'ready' &&
     <>
      {
         gameInfo?.host === socket.id ?
         <IC.Container onSubmit={setStartGame}>
           <IC.Label>행</IC.Label>
           <IC.Input type="number" min={10} max={20} maxLength={2} ref={inputSelector.row} /> 
           <IC.Label>열</IC.Label>
           <IC.Input type="number" min={10} max={20} maxLength={2} ref={inputSelector.cell}/>
           <IC.ButtonContainer>
             <Button type="submit">Start!</Button>
           </IC.ButtonContainer>
         </IC.Container>
         :
         <IC.Container>
           Host가 설정 중입니다.
         </IC.Container>
      }
     </>
    }
    {
      game === 'start' &&
     <>
       <SC>
        <IC.Label>칸 수</IC.Label>
        <IC.RowInfo>{input.row} * {input.cell}</IC.RowInfo>
        <IC.Label>현재 플레이어</IC.Label>
        <IC.RowInfo>{player === BLACK ? '⚫' : '⚪'}</IC.RowInfo>
      </SC>
     </>
    }
    </>
  )
}

export default InputContainer;