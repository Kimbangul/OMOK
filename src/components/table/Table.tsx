import {useRecoilState} from "recoil";
import { GameStateType, gameState, inputState, InputStateType } from "../../recoil/stage";
import Row from "../row/Row";
import { TableStyle as T } from "./TableStyle";

const Table = () => {
  const [stage, setStage] = useRecoilState<GameStateType>(gameState);
  const [table, setTable] = useRecoilState<InputStateType>(inputState);

  return (
    <>
      {
      stage === 'start' &&
        <T.Container>
          <thead></thead>
          <tbody>
          {
            Array(table.row).fill('').map((el, idx) => {
              return(
                <Row key={`row${idx}`} rowNum={idx} cell={table.cell}/>
              )
            })
          }
          </tbody>
        </T.Container>
      }
    </>
  )
}

export default Table;