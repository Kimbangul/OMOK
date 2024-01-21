import Cell from "components/cell/Cell";
import { RowPropsType } from "components/row/type";

const Row = ({cell, rowNum} : RowPropsType) => {
  return (
    <tr>
      {
        Array(cell).fill('').map((el,idx)=> {
          return(
            <Cell key={`row${rowNum}cell${idx}`} cellNum={idx} rowNum={rowNum}/>
          )
        })
      }
    </tr>
  )
}

export default Row;