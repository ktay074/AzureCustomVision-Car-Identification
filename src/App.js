import React from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import Header from './components/Header/Header';


function App() {

  return (
    <div className="App">
      <Header></Header>
      
      <div className='MainContent'>Submit a image file of a car
      <br/>
      <ImageUpload></ImageUpload>
      </div>
    </div>
  );
}

export default App;
