import { useRef } from "react";
import {useRecoilState} from "recoil";
import { inputState, InputStateType, stageState, StageStateType } from "../../recoil/stage";
import Button from "../common/Button";
import { InputSelectorType } from "./type";

const InputContainer = () => {
  const inputSelector : InputSelectorType = {
    row: useRef(null),
    cell: useRef(null),
  }

  // PARAM state
  const [stage, setStage] = useRecoilState<StageStateType>(stageState);
  const [input, setInput] = useRecoilState<InputStateType>(inputState);

  // FUNCTION 시작 및 input정보 바인딩
  const setStartStage = (e: React.FormEvent) => {
    e.preventDefault();
    setInput(
      {...input, 
       row: Number(inputSelector.row.current?.value) || 0, 
       cell: Number(inputSelector.cell.current?.value) || 0, 
     }
    );
    setStage('start');
  }

  return(
    <>
    {
      stage === 'ready' &&
      <form onSubmit={setStartStage}>
        행: <input type="number" min={5} maxLength={2} ref={inputSelector.row} /> 
        <br />
        열: <input type="number" min={5} maxLength={2} ref={inputSelector.cell}/>
        <Button type="submit">button</Button>
      </form>
    }
    {
      stage === 'start' &&
      <div>
        {input.row} * {input.cell}
      </div>
    }
    </>
  )
}

export default InputContainer;