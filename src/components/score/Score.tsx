import { ScoreStyle as SS } from "./ScoreStyle";

const Score = () => {
  return(
    <SS.Container>
      <SS.Title>SCORE</SS.Title>
      <SS.Player.Container>
        <SS.Player.Item>
          <span>BLACK</span>
          <SS.Player.Score>0</SS.Player.Score>
        </SS.Player.Item>
        <SS.Player.Item>
          :
        </SS.Player.Item>
        <SS.Player.Item>
          <span>WHITE</span>
          <SS.Player.Score>0</SS.Player.Score>
        </SS.Player.Item>
      </SS.Player.Container>
    </SS.Container>
  )
}

export default Score;