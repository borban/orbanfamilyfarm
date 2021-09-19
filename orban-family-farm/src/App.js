import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
