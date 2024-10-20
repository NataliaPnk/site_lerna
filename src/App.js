import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Context } from "./context";
import Header from "./components/Header";
import learningDataCards from "./data/learningDataCards";

import HelpPage from "./pages/HelpPage";
import MyLearningPage from "./pages/MyLearningPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import ordersDataCards from "./data/ordersDataCards";
import MyTestsPage from "./pages/MyTestsPage";
import testsDataCards from "./data/testsDataCards";
import BonusTokensPage from "./pages/BonusTokensPage";
import bonusDataCards from "./data/bonusDataCards";
import ReferralProgramPage from "./pages/ReferralProgramPage";

function App() {
  const [ learningCards, setLearningCards ] = useState(learningDataCards);
  const [ orderCards, setOrderCards ] = useState(ordersDataCards);
  const [ tests, setTests ] = useState(testsDataCards)
  const [ bonus, setBonus ] = useState(bonusDataCards)

  return (
    <div>
      <Header />
  <Context.Provider value={{tests, bonus}}>
      <Routes>
        <Route path="/" element={<HelpPage />} />
        <Route
          path="/learning"
          element={<MyLearningPage learningCards={learningCards} />}
        />
        <Route
          path="/orders"
          element={<MyOrdersPage orderCards={orderCards} />}
        />
        <Route
          path="/tests"
          element={<MyTestsPage />}
        />
        <Route
          path="/bonus"
          element={<BonusTokensPage />}
        />
        <Route
        path="/referral_program"
        element={<ReferralProgramPage />}
        />

      </Routes>
  </Context.Provider>
    </div>
  );
}

export default App;
