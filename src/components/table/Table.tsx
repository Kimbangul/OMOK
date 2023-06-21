import {useRecoilState} from "recoil";
import { StageStateType, stageState, inputState, InputStateType } from "../../recoil/stage";
import Row from "../row/Row";
import { TableStyle as T } from "./TableStyle";

const Table = () => {
  const [stage, setStage] = useRecoilState<StageStateType>(stageState);
  const [table, setTable] = useRecoilState<InputStateType>(inputState);

  return (
    <>
      {
      stage === 'start' &&
        <T.Container>
          {
            Array(table.row).fill('').map((el, idx) => {
              return(
                <Row key={`row${idx}`} rowNum={idx} cell={table.cell}/>
              )
            })
          }
        </T.Container>
      }
    </>
  )
}

export default Table;