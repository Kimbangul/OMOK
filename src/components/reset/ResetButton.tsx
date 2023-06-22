import { useRecoilState } from "recoil";
import { gameState, playerState, stageState } from "../../recoil/stage";
import Button from "../common/Button";

const ResetButton = () => {
  const [game, setGame] = useRecoilState(gameState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);

  // FUNCTION 버튼 클릭 시 실행
  const onClickButton = () => {
    setGame('ready');
  }

  return(
    <Button type='reset'>RESET</Button>
  )
}

export default ResetButton;