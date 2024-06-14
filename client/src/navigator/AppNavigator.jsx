import { Route, Routes } from "react-router-dom";

// Layout:
import AppLayout from "../layout/AppLayout";

// Pages:
import Auth from "../pages/Auth";
import { PrivateRoute, PublicRoute } from "../helper/route";

const AppNavigator = ({ auth }) => {
  return (
    <Routes>
      {/* 1:- Public route */}
      <Route
        path="/login"
        element={<PublicRoute isAuth={auth} Component={<Auth />} />}
      />

      {/* 2:- Private route */}
      <Route exact path="/" element={<AppLayout/>}>
        <Route
          index
          element={<PrivateRoute isAuth={auth} Component={""} replace />}
        />
      </Route>

      {/* 3:- Default route */}
      <Route path="*" element={"Page not fount"} />
    </Routes>
  );
};

export default AppNavigator;


