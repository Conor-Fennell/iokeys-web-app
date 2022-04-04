
import './App.css';
import { Button } from 'elemental'

function App() {

  const lockCommand = () => {
    console.log("Clicked lock button")
  }

  const unlockCommand = () => {
    console.log("Clicked unlock button")
  }

  console.log("App is running...")
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          IOKEYS
        </p>
        <>
        <Button onClick={lockCommand} variant="outline-primary">Lock</Button>
        <Button onClick={unlockCommand} variant="outline-primary">Unlock</Button>
        </>
      </header>
    </div>
  );
}

export default App;
