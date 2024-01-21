import { useRecoilState } from "recoil";
import { gameState, playerState, stageState, BLACK } from "recoil/stage";

// FUNCTION reset
const useReset = () => {
  const [game, setGame] = useRecoilState(gameState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [stage, setStage] = useRecoilState(stageState);

  const reset = () => {
    setGame('ready');
    setPlayer(BLACK);
    setStage(null);
  }

  return {
    reset: reset,
  };
}

export default useReset;