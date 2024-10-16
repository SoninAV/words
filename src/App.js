import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Words from './pages/Words/Words';
import WordDetail from './components/WordDetail/WordDetail';
import LetterFilter from './components/LetterFilter/LetterFilter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Words />} />
        <Route path="/word/:word" element={<WordDetail />} />
        <Route path="/letter/:letter" element={<LetterFilter />} />
      </Routes>
    </Router>
  );
}

export default App;