import Table from "components/table/Table";
import InputContainer from "components/info/InputContainer";
import { AppStyle as A } from "style/AppStyle";
import ResetButton from "components/reset/ResetButton";
import Score from "components/score/Score";
import Room from "components/room/Room";
import socket from "socket/socket";
import SocketWrapper from "components/socket/SocketWrapper";

function App() {
  socket.init();

  return (
    <SocketWrapper>
      <A.Container>
        <A.Inner>          
          <A.Menu>
           <Room />
           <InputContainer />
           <ResetButton />
           <Score />
          </A.Menu>
          <Table />
        </A.Inner>
      </A.Container>
    </SocketWrapper>
  );
}

export default App;
