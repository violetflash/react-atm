import { AtmKeyboard } from "./components/AtmKeyboard";

function App() {
  const initialCash = {
    5000: 100,
    2000: 400,
    1000: 1000,
    500: 3000,
    200: 5000,
    100: 8000,
    50: 10000
  }

  return (
    <div className="App">
      <AtmKeyboard/>
    </div>
  );
}

export default App;
