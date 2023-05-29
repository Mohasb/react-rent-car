import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//Components
import Home from "./app/home/Home";
import ConfirmationBoocking from "./app/BookingConfirmation";
import CarListShow from "./app/CarListShow";
import AuthService from "./services/login/auth.service";
import Register from "./app/register/Register";
import NotFound from "./app/notFound/NotFound";
import ContextUser from "./services/contextUser/ContextUser";
import ResponsiveAppBar from "./components/navBar/NavBar";
import ControlledOpenSpeedDial from "./Components/CircularMenu";
import UserPage from "./app/userPage/UserPage";
import Footer from "./Components/footer/Footer";
import Notification from "./components/notifications/Notification";
import Cookie from "./components/cookies/cookie";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const id = JSON.parse(localStorage.getItem("user")).id;
      AuthService.getCurrentUser(id).then((response) => {
        setUser(response);
      });
    }
  }, []);

  return (
    <>
      <ContextUser.Provider value={{ user, setUser }}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reserva/coche" element={<CarListShow />} />
          <Route path="/booking" element={<ConfirmationBoocking />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/user/:name" element={<UserPage />} />
        </Routes>
        <ControlledOpenSpeedDial />
        {user && <Notification user={user} open={true} />}
        <Cookie />
        <Footer />
      </ContextUser.Provider>
    </>
  );
}

export default App;
