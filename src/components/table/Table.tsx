import {useRecoilState} from "recoil";
import { StageStateType, stageState } from "../../recoil/stage";
import Row from "../row/Row";

const Table = () => {
  const [stage, setStage] = useRecoilState<StageStateType>(stageState);

  return (
    <>
      {
      stage === 'start' &&
        <table>
          <Row />
        </table>
      }
    </>
  )
}

export default Table;