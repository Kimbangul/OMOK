import {useRecoilState} from "recoil";
import { GameStateType, gameState, inputState, InputStateType } from "recoil/stage";
import Row from "components/row/Row";
import { TableStyle as T } from "components/table/TableStyle";

const Table = () => {
  const [game, setGame] = useRecoilState<GameStateType>(gameState);
  const [table, setTable] = useRecoilState<InputStateType>(inputState);

  return (
    <>
      {
      game === 'start' &&
       <T.Wrap>
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
       </T.Wrap>
      }
    </>
  )
}

export default Table;