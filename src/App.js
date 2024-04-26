
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NextPage from './components/NextPage';
import HomePage from './components/HomePage';



function App() {
   return (
    
        
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="nextpage" element={<NextPage/>} />
        </Routes>
      
    
  );
}

export default App;
