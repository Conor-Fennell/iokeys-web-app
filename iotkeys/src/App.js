
import './App.css';
import { AwesomeButton } from "react-awesome-button";

 

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

        <AwesomeButton
       
          type="primary"
          ripple
          onPress={lockCommand}>
          LOCK
        </AwesomeButton>
       
        <AwesomeButton
         
          type="primary"
          ripple
          onPress={unlockCommand}>
          UNLOCK
        </AwesomeButton>

        </>

      </header>
    </div>
  );
}

export default App;
