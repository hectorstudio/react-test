import React from 'react';
import Header from './container/Header';
import SidebarContainer from './container/SidebarContainer';
import MainContainer from './container/MainContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-Body">
        <SidebarContainer />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
