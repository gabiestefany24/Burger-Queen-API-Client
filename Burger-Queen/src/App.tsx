import "./App.css";
import Mainview from "./components/mainview/Mainview";
import Login from "./components/login/Login";
import Waiterorder from "./components/waiterorder/Waiterorder";
import Chefview from "./components/chefview/Chefview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Waiterdelivering from "./components/waiterorder/waiterDelivering/WaiterDelivering";
import AdminView from "./components/adminview/AdminView"
import Modalremove from './components/modalremove/Modalremove';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/waiterorder" element={<Waiterorder />} />
        <Route path="/chefview" element={<Chefview />} />
        <Route path="/waiterdelivering" element={<Waiterdelivering />} />
        <Route path="/adminview" element={<AdminView />} />
        <Route path="/modalremove" element={<Modalremove />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
