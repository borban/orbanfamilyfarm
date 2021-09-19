import './App.css';
import { Tab, Tabs, Box } from '@mui/material';
import banner from './images/banner.png';

function App() {
  return (
    <div>
      <Box sx={{
        flexGrow: 1, bgcolor: 'background.paper', display: 'flex',
        alignItems: 'center', justifyContent: 'center'
      }} >
        <img
          src={banner} width="600" height="200"
          alt="banner" />
      </Box>
      <Box sx={{
        flexGrow: 1, bgcolor: 'background.paper', display: 'flex',
        height: '50px', width: '100%', alignItems: 'center', justifyContent: 'center'
      }} >
        <Tabs aria-label="basic tabs example" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Home" />
          <Tab label="Farm History" />
          <Tab label="Family Members" />
          <Tab label="Contact Info" />
          <Tab label="Blog" />
        </Tabs>
      </Box>

    </div >
  );
}

export default App;
