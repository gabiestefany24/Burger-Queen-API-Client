import './App.css'
import Mainview from './components/mainview/Mainview';
import Login from './components/login/Login';
import Waiterorder from './components/waiterorder/Waiterorder';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from './components/Authcontext/Authcontext';

const App: React.FC = () => {
  return (
  //  <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waiterorder" element={<Waiterorder />} />
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App
