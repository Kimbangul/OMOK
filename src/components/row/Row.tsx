import Cell from "../cell/Cell";
import { RowPropsType } from "./type";

const Row = ({cell, rowNum} : RowPropsType) => {
  return (
    <tr>
      {
        Array(cell).fill('').map((el,idx)=> {
          return(
            <Cell key={`row${rowNum}cell${idx}`}/>
          )
        })
      }
    </tr>
  )
}

export default Row;