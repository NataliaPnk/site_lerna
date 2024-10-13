import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MyLearningContainer from './components/MyLearningContainer';
import ProfileContainer from './components/ProfileContainer';
import learningDataCards from './data/learningDataCards';
//import NavMenu from './components/NavMenu';
//import HelpPage from './pages/HelpPage';

function App() {

const [ learningCards, setLearningCards ] = useState(learningDataCards)

  return (
    <div>
      <Header />
   

      <Routes>
        <Route path='/' element={<ProfileContainer />}/>
        <Route path='/learning' element={<MyLearningContainer learningCards={learningCards} />} />
      </Routes>
    </div>
  );
}

export default App;
