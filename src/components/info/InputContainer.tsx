import { useRef } from "react";
import {useRecoilState} from "recoil";
import { BLACK, inputState, InputStateType, playerState, gameState, GameStateType, stageState } from "../../recoil/stage";
import Button from "../common/Button";
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
      <form onSubmit={setStartGame}>
        행: <input type="number" min={5} maxLength={2} ref={inputSelector.row} /> 
        <br />
        열: <input type="number" min={5} maxLength={2} ref={inputSelector.cell}/>
        <Button type="submit">button</Button>
      </form>
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