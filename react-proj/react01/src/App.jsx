import React from "react";
import TeamPage from "./pages/TeamPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";
import GetData from "./pages/GetData";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todolist" element={<TodoListPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/cats" element={<GetData />} />
      </Routes>
      <Footer />

      {/* <TeamPage /> */}
      {/* <CounterPage /> */}
      {/* <LoginPage /> */}
      {/* <TodoListPage /> */}
    </>
  );
}

export default App;
