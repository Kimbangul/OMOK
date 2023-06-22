import Table from "./components/table/Table";
import InputContainer from "./components/info/InputContainer";
import { AppStyle as A } from "./style/AppStyle";

function App() {
  return (
      <A.Container>
        <InputContainer />
        <div>
          <Table />
        </div>
      </A.Container>
  );
}

export default App;
