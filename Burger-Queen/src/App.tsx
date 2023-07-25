import "./App.css";
import Mainview from "./components/mainview/Mainview";
import Login from "./components/login/Login";
import Waiterorder from "./components/waiterorder/Waiterorder";
import Chefview from "./components/chefview/Chefview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Waiterdelivering from "./components/waiterorder/waiterDelivering/WaiterDelivering";
import AdminView from "./components/adminview/AdminView"
import AdminMain from "./components/adminview/adminmain/AdminMain";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminview" element={<ProtectedRoute
          element={<AdminView />}
          allowedRoles={["admin"]}
        />} />
        <Route path="/adminmain" element={<ProtectedRoute
          element={<AdminMain />}
          allowedRoles={["admin"]}
        />} />
        <Route path="/waiterorder" element={<ProtectedRoute
          element={<Waiterorder />}
          allowedRoles={["admin", "waiter"]}
        />} />
        <Route path="/waiterdelivering" element={<ProtectedRoute
          element={<Waiterdelivering />}
          allowedRoles={["admin", "waiter"]}
        />} />
        <Route path="/chefview" element={<ProtectedRoute
          element={<Chefview />}
          allowedRoles={["admin", "chef"]}
        />} />
        
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;

/*  <Route path="/adminview" element={<AdminView />} /> */