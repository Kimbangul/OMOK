import { useRecoilState } from "recoil";
import { gameInfoState, gameState, scoreState } from "recoil/stage";
import Button from "components/common/Button";
import useReset from "components/reset/useReset";
import socket from "socket/socket";

const ResetButton = () => {
  const [game, setGame] = useRecoilState(gameState);
  const [gameInfo, setGameInfo] = useRecoilState(gameInfoState);
  const reset = useReset();
  
  // FUNCTION 버튼 클릭 시 실행
  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const score = gameInfo?.score || {};
    socket.reset(gameInfo?.code || '', score, gameInfo || {});
    reset.reset();
  }

  return(
   <>
    {
      game === ('start' || 'end') ?
      <Button type='reset' onClick={onClickButton}>RESET</Button>
      : null
    }
   </>
  )
}

export default ResetButton;
