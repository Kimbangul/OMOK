import { useRef } from "react";
import {useRecoilState} from "recoil";
import { BLACK, inputState, InputStateType, playerState, gameState, GameStateType, stageState } from "../../recoil/stage";
import Button from "../common/Button";
import { InputContainerStyle as IC } from "./InputContainerStyle";
import { InputSelectorType } from "./type";

const InputContainer = () => {
  const inputSelector : InputSelectorType = {
    row: useRef(null),
    cell: useRef(null),
  }

  // PARAM state
  const [game, setGame] = useRecoilState<GameStateType>(gameState);
  const [input, setInput] = useRecoilState<InputStateType>(inputState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [table, setTable] = useRecoilState(stageState)

  // FUNCTION 시작 및 input정보 바인딩
  const setStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    const rowNum = Number(inputSelector.row.current?.value) || 10;
    const cellNum = Number(inputSelector.cell.current?.value) || 10;

    setInput(
      {...input, 
       row: rowNum, 
       cell: cellNum, 
     }
    );
    setGame('start');
    setTable(Array(rowNum).fill(Array(cellNum).fill(null)));
  }

  return(
    <>
    {
      game === 'ready' &&
      <IC.Container onSubmit={setStartGame}>
        <IC.Label>행</IC.Label>
        <IC.Input type="number" min={5} max={10} maxLength={2} ref={inputSelector.row} /> 
        <IC.Label>열</IC.Label>
        <IC.Input type="number" min={5} max={10} maxLength={2} ref={inputSelector.cell}/>
        <IC.ButtonContainer>
          <Button type="submit">button</Button>
        </IC.ButtonContainer>
      </IC.Container>
    }
    {
      game === 'start' &&
      <div>
        <div>{input.row} * {input.cell}</div>
        <div>현재 플레이어 : {player === BLACK ? '⚫' : '⚪'}</div>
      </div>
    }
    </>
  )
}

export default InputContainer;