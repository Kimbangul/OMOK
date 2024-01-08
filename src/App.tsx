import Table from "./components/table/Table";
import InputContainer from "./components/info/InputContainer";
import { AppStyle as A } from "./style/AppStyle";
import ResetButton from "./components/reset/ResetButton";
import Score from "./components/score/Score";
import {io} from 'socket.io-client';

function App() {
 const socket = io("http://127.0.0.1:8000", {
    reconnectionDelayMax: 10000,
    withCredentials: true,
  });

  

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
