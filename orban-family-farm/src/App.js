import './App.css';
import { Tab, Tabs, Box } from '@mui/material';
import banner from './images/banner.png';

function App() {
  return (
    <div>
      <div class='App-header'>
        <img
          src={banner}
          alt="banner" />
    
        <Tabs sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#8998AB'}}>
          <Tab label="Home" />
          <Tab label="Farm History" />
          <Tab label="Family Members" />
          <Tab label="Contact Info" />
          <Tab label="Blog" />
        </Tabs>
        </div>
        <div class='App-body'>
          This is the body
        </div>
    </div >
  );
}

export default App;
