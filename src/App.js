import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes className="app__main">
          <Route path="/mail" element={<Mail />} />
          <Route path="/" element={<EmailList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
