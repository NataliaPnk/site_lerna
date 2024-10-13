import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import learningDataCards from "./data/learningDataCards";

import HelpPage from "./pages/HelpPage";
import MyLearningPage from "./pages/MyLearningPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import ordersDataCards from "./data/ordersDataCards";

function App() {
  const [learningCards, setLearningCards] = useState(learningDataCards);
  const [orderCards, setOrderCards] = useState(ordersDataCards);

  return (
    <div>
      <Header />

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
      </Routes>
    </div>
  );
}

export default App;
