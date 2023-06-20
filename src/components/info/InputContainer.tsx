import {useRecoilState} from "recoil";
import { inputState, InputStateType, stageState, StageStateType } from "../../recoil/stage";
import Button from "../common/Button";

const InputContainer = () => {
  // PARAM state
  const [stage, setStage] = useRecoilState<StageStateType>(stageState);
  const [input, setInput] = useRecoilState<InputStateType>(inputState);

  return(
    <>
    {
      stage === 'ready' &&
      <form>
        행: <input type="number" /> 열: <input type="number" />
        <Button>button</Button>
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