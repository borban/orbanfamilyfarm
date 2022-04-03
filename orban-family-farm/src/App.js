import React from 'react';
import './App.css';
import banner from './images/banner.png';
import NavigationBar from './NavigationBar';
import { Switch, Route } from 'react-router';
import Home from './content/Home';
import FarmHistory from './content/FarmHistory';
import FamilyMembers from './content/FamilyMembers';
import ContactInfo from './content/ContactInfo';
import Blog from './content/Blog';

function App() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/farm-history" component={FarmHistory} />
          <Route path="/family-members" component={FamilyMembers} />
          <Route path="/contact-info" component={ContactInfo} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </div >
  );
}

export default App;
