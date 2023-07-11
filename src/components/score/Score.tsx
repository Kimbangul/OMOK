import { ScoreStyle as SS } from "./ScoreStyle";
import { useRecoilValue } from "recoil";
import { gameState, scoreState, BLACK, WHITE } from "../../recoil/stage";
import { GameStateType, ScoreStateType } from "../../recoil/stage";

const Score = () => {
  const game = useRecoilValue<GameStateType>(gameState);
  const score = useRecoilValue<ScoreStateType>(scoreState);

  return(
    <>
      {
        (
          game === 'start' || 
          [score[BLACK], score[WHITE]].some((el) => el > 0)
        )
        &&
        <SS.Container>
          <SS.Title>SCORE</SS.Title>
          <SS.Player.Container>
            <SS.Player.Item>
              <span>BLACK</span>
              <SS.Player.Score>{score[BLACK]}</SS.Player.Score>
            </SS.Player.Item>
            <SS.Player.Item>
              :
            </SS.Player.Item>
            <SS.Player.Item>
              <span>WHITE</span>
              <SS.Player.Score>{score[WHITE]}</SS.Player.Score>
            </SS.Player.Item>
          </SS.Player.Container>
        </SS.Container>
      }
    </>
  )
}

export default Score;