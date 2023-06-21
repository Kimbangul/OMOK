import { useState } from "react";
import {useRecoilState} from "recoil";
import { stageState, playerState, BLACK, WHITE } from "../../recoil/stage";
import { CellStyle as C } from "./CellStyle";
import { CellPropsType } from "./type";

const Cell = ({rowNum, cellNum} : CellPropsType) => {
  const [table, setTable] = useRecoilState(stageState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [cellState, setCellState] = useState<null | number>(null);

  // FUNCTION 셀 클릭 시 실행
  const onClickCell = () => {
    const newTable = table?.map((row, rowIdx) => 
      rowIdx === rowNum ? 
        row.map((cell, cellIdx) => cellIdx === cellNum ? player : cell)
      : row
    );

    setCellState(player);
    setPlayer(player === BLACK ? WHITE : BLACK);

    if (newTable) {
      setTable(newTable)
    }
  }

  return (
    <C.Container onClick={onClickCell}>
      {cellState === BLACK ? '⚫' 
      : cellState === WHITE ? '⚪'
      : null
      }
    </C.Container>
  )
}



export default Cell;