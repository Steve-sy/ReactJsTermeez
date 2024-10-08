/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Main from "./Main";
import Header from "./Header";
import Articles from "./Articles";

const person = {
  name: "Mustafa",
  age: 34,
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
