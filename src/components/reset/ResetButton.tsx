import { useRecoilState } from "recoil";
import { gameState, playerState, stageState, BLACK, scoreState } from "../../recoil/stage";
import Button from "../common/Button";
import useReset from "./useReset";

const ResetButton = () => {
  const [score, setScore] = useRecoilState(scoreState);
  const [game, setGame] = useRecoilState(gameState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);
  const reset = useReset();
  
  // FUNCTION 버튼 클릭 시 실행
  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    reset.reset();
  }

  return(
   <>
    {
      game !== 'ready' ?
      <Button type='reset' onClick={onClickButton}>RESET</Button>
      : null
    }
   </>
  )
}

export default ResetButton;

function setScore(arg0: any) {
  throw new Error("Function not implemented.");
}
