import moment from "moment";
import { useEffect, useState } from "react";
import CountdownPage from "./containers/CountdownPage";
import PuzzlePage from "./containers/PuzzlePage";


// const RELEASE_DATE = moment("2023-06-13 18:15:00");
const RELEASE_DATE = moment("2023-06-11 19:29:30");

function App() {

  const [isCounting, setIsCounting] = useState(true);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    const timeNow = moment();
    if(timeNow.isAfter(RELEASE_DATE)) {
      setIsCounting(false);
    }
  }, []);


  const renderPage = () => {
    if(isCounting) return <CountdownPage date={RELEASE_DATE.toDate()} onComplete={() => setIsCounting(false)} />
    if(isSolved) return <div>congrats</div>
    return <PuzzlePage />
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
