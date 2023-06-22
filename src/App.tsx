import Table from "./components/table/Table";
import InputContainer from "./components/info/InputContainer";
import { AppStyle as A } from "./style/AppStyle";

function App() {
  return (
      <A.Container>
        <A.Inner>
          <InputContainer />
          <Table />
        </A.Inner>
      </A.Container>
  );
}

export default App;
