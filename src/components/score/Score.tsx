import { ScoreStyle as SS } from "./ScoreStyle";

const Score = () => {
  return(
    <SS.Container>
      <SS.Title>SCORE</SS.Title>
      <SS.Player.Container>
        <li>
          <span>BLACK</span>
          <span>0</span>
        </li>
        <li>
          <span>WHITE</span>
          <span>0</span>
        </li>
      </SS.Player.Container>
    </SS.Container>
  )
}

export default Score;