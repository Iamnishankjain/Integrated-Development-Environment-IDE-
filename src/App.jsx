import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PlayGroundScreen from "./screens/PlayGroundScreen/PlayGroundScreen";
import PlayGroundProvider from "./screens/Provider/PlayGroundProvider";
import ModalProvider from "./screens/Provider/ModalProvider";

const App = () => {
  return (
    <PlayGroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/playground/:fileId/:folderId" element={<PlayGroundScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlayGroundProvider>
  );
};

export default App;
