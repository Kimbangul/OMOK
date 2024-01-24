import {useRecoilState} from "recoil";
import { GameStateType, gameState, inputState, InputStateType, playerState, gameInfoState, stageState } from "recoil/stage";
import Row from "components/row/Row";
import { TableStyle as T } from "components/table/TableStyle";
import socket from "socket/socket";
import { useEffect } from "react";

const Table = () => {
  const [game, setGame] = useRecoilState<GameStateType>(gameState);
  const [table, setTable] = useRecoilState<InputStateType>(inputState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [gameStage, setGameStage] = useRecoilState(stageState);
  const [gameInfo, setGameInfo] = useRecoilState(gameInfoState);

    useEffect(()=>{
      // FUNCTION 클라이언트 데이터 업데이트
      socket.socket.on('updateClient', (data) => {
        console.log('=====update client=====');
        console.log(data);
        setGameInfo(data);
        setGameStage(data.gameState);
        setPlayer(data.turn);   
      });
    }, [socket]);

  return (
    <>
      {
      game === 'start' &&
       <T.Wrap>
         <T.Container>
          <thead></thead>
          <tbody>
          {
            Array(table.row).fill('').map((el, idx) => {
              return(
                <Row key={`row${idx}`} rowNum={idx} cell={table.cell}/>
              )
            })
          }
          </tbody>
        </T.Container>
       </T.Wrap>
      }
    </>
  )
}

export default Table;