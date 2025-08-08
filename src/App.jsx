import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PlayGroundScreen from "./screens/PlayGroundScreen/PlayGroundScreen";
import PlayGroundProvider from "./screens/Provider/PlayGroundProvider";

const App = () => {
  return (
    <PlayGroundProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/playground" element={<PlayGroundScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </PlayGroundProvider>
  );
};

export default App;
