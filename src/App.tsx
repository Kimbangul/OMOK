import Button from "./components/common/Button";
import Table from "./components/table/Table";

function App() {
  return (
      <section>
        <div>
          <input type="number" /><input type="number" />
          <Button>button</Button>
        </div>
        <div>
          <Table />
        </div>
      </section>
  );
}

export default App;
