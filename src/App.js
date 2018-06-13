import React, { Component } from 'react';
import './App.css';
import Folder from './folder';
import FolderTree from './folder-tree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Directory Structure Click on Folder to create on sub folder</h1>
        </header>
        <FolderTree key={1} title="Root"/>
        <FolderTree key={2} title="Root"/>
      </div>
    );
  }
}

export default App;
