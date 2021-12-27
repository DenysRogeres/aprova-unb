import { GlobalStyled } from "../src/styles/global"
import { ScoreTable } from "./components/ScoreTable";
import { User } from "./components/User/User";

function App() {
  return (
    <>
      <GlobalStyled/>
      <ScoreTable/>
      <User/>
    </>
  );
}

export default App;
