import Table from "./components/table/Table";
import InputContainer from "./components/info/InputContainer";
import { AppStyle as A } from "./style/AppStyle";
import ResetButton from "./components/reset/ResetButton";
import Score from "./components/score/Score";
import socket from 'socket.io';

function App() {
  return (
      <A.Container>
        <A.Inner>
          <A.Menu>
           <InputContainer />
           <ResetButton />
           <Score />
          </A.Menu>
          <Table />
        </A.Inner>
      </A.Container>
  );
}

export default App;
