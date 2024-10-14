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

function App() {
  const [ learningCards, setLearningCards ] = useState(learningDataCards);
  const [ orderCards, setOrderCards ] = useState(ordersDataCards);
  const [ tests, setTests ] = useState(testsDataCards)

  return (
    <div>
      <Header />
  <Context.Provider value={{tests}}>
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
      </Routes>
  </Context.Provider>
    </div>
  );
}

export default App;
