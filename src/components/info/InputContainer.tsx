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

    const code = gameInfo?.code || '';
    const info : StartGameParamsType = {
      member: gameInfo?.member || [],
      code:code,
      input: inputState,
      stageState: Array(rowNum).fill(Array(cellNum).fill(null)),
      gameState: 'start'
    }
    console.log(info);
    socket.update(code, info);
    console.log('서버 업데이트') 
  }

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
          <IC.Loading.Container>
            {/* <IC.Loading.Spinner></IC.Loading.Spinner> */}
            {Array(3).fill('').map((el,idx)=>
              <IC.Loading.Dot key={'dot'+idx}></IC.Loading.Dot>
            )}
          </IC.Loading.Container>
          <IC.Loading.Text>Host가 설정 중입니다.</IC.Loading.Text>           
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