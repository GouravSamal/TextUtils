import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";


const App = () => {

  const [mode, setMode] = useState('light');

  const [bgcolor, setbgColor] = useState('dark')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode is successfully enabled', 'success');
      document.title = 'TextUtils-Dark Mode';
      // setbgColor('light')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is successfully enabled', 'success')
      document.title = 'TextUtils-Home';
      // setbgColor('dark');
    }
  }

  return (
    <>


        {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} bgcolor={bgcolor}/> */}
      <Router>

        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />

        <Alert alert={alert} />

        <div className="container my-3">

          <Switch>

            <Route exact path='/'>
              <TextForm heading="Enter the text to analyze:" mode={mode} showAlert={showAlert} />
            </Route>
            
            <Route exact path='/about'>
              <About />
            </Route>
            


          </Switch>

        </div>
        
      </Router>

      
          {/* <About/> */}
    </>
  )
}

export default App;
