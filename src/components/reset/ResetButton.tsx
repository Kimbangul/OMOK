import { useRecoilState } from "recoil";
import { gameState, scoreState } from "../../recoil/stage";
import Button from "../common/Button";
import useReset from "./useReset";

const ResetButton = () => {
  const [game, setGame] = useRecoilState(gameState);
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
