import { useRecoilState } from "recoil";
import { gameState, playerState, stageState, BLACK } from "../../recoil/stage";
import Button from "../common/Button";

const ResetButton = () => {
  const [game, setGame] = useRecoilState(gameState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);
  
  // FUNCTION 버튼 클릭 시 실행
  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setGame('ready');
    setPlayer(BLACK);
    setStage(null);
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