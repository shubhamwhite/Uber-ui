import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/UserContext";
import UserProtactedWrapper from "./pages/UserProtactedWrapper";
import UserLogOut from "./pages/UserLogOut";

const App = () => {
  const ans = useContext(UserDataContext); // Insure data is goted or not
  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-signin" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtactedWrapper>
              <Home />
            </UserProtactedWrapper>
          }
        />

        <Route
          path="/user-logout"
          element={
          <UserProtactedWrapper>
            <UserLogOut/>
          </UserProtactedWrapper>
        }
        />

       </Routes>


    </div>
  );
};

export default App;
